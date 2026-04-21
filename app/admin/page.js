"use client";

import { useState, useEffect } from "react";
import { auth, db, storage } from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { LogOut, Plus, Trash2, Edit2, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [loadingConfig, setLoadingConfig] = useState(true);
  
  // Auth state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  // Dashboard Data
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Form State
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    collectionType: "ammunition",
    brand: "",
    caliber: "",
    description: "",
    featured: false,
    image: ""
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingConfig(false);
      if (currentUser) {
        fetchProducts();
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setAuthError("Failed to login. Please check your credentials.");
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setIsLoading(false);
  };

  const handleImageUpload = async (file) => {
    if (!file) return null;
    const storageRef = ref(storage, `products/${Date.now()}_${file.name}`);
    await uploadBytes(storageRef, file);
    return await getDownloadURL(storageRef);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      let imageUrl = formData.image;
      if (imageFile) {
        imageUrl = await handleImageUpload(imageFile);
      }

      const payload = {
        title: formData.title,
        price: parseFloat(formData.price) || 0,
        collection: formData.collectionType, // mapping
        brand: formData.brand,
        caliber: formData.caliber,
        description: formData.description,
        featured: formData.featured,
        image: imageUrl,
        updatedAt: new Date().toISOString()
      };

      if (editingId) {
        await updateDoc(doc(db, "products", editingId), payload);
      } else {
        await addDoc(collection(db, "products"), { ...payload, createdAt: new Date().toISOString() });
      }

      setFormData({
        title: "", price: "", collectionType: "ammunition", brand: "", caliber: "", description: "", featured: false, image: ""
      });
      setImageFile(null);
      setEditingId(null);
      setIsModalOpen(false);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product.");
    }
    setUploading(false);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      await deleteDoc(doc(db, "products", id));
      fetchProducts();
    }
  };

  const openEdit = (product) => {
    setFormData({
      title: product.title || "",
      price: product.price || "",
      collectionType: product.collection || "ammunition",
      brand: product.brand || "",
      caliber: product.caliber || "",
      description: product.description || "",
      featured: product.featured || false,
      image: product.image || ""
    });
    setEditingId(product.id);
    setImageFile(null);
    setIsModalOpen(true);
  };

  if (loadingConfig) {
    return <div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-neutral-900 p-10 rounded-2xl border border-white/10">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-white tracking-widest uppercase">Admin Login</h2>
            <p className="mt-2 text-center text-sm text-[var(--primary)] uppercase tracking-wider">Kurtz Mill Munitions System</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="space-y-4 rounded-md shadow-sm">
              <div>
                <input
                  type="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-white/10 bg-black text-white placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-white/10 bg-black text-white placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-[var(--primary)] focus:border-[var(--primary)] sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {authError && <div className="text-red-500 text-sm text-center font-medium bg-red-500/10 py-2 rounded">{authError}</div>}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold uppercase tracking-widest rounded-md text-black bg-[var(--primary)] hover:scale-105 transition-transform"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl font-bold uppercase tracking-tight">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Manage your inventory, categories, and site assets.</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors uppercase tracking-widest font-bold"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold uppercase tracking-widest text-[var(--primary)]">Products Directory</h2>
          <button
            onClick={() => {
              setFormData({ title: "", price: "", collectionType: "ammunition", brand: "", caliber: "", description: "", featured: false, image: "" });
              setEditingId(null);
              setImageFile(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform"
          >
            <Plus size={16} /> Add Product
          </button>
        </div>

        {/* Products Table */}
        <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-black/50 border-b border-white/5 uppercase tracking-widest text-xs text-muted-foreground">
                <tr>
                  <th className="px-6 py-4 font-semibold">Image</th>
                  <th className="px-6 py-4 font-semibold">Product Name</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Price</th>
                  <th className="px-6 py-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="px-6 py-12 text-center text-muted-foreground">
                      No products found. Add one to get started.
                    </td>
                  </tr>
                ) : (
                  products.map((product) => (
                    <tr key={product.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <div className="h-12 w-12 rounded bg-neutral-800 relative overflow-hidden border border-white/10 flex items-center justify-center">
                          {product.image ? (
                            <Image src={product.image} fill className="object-cover" alt={product.title} />
                          ) : (
                            <ImageIcon size={20} className="text-muted-foreground" />
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold">{product.title}</td>
                      <td className="px-6 py-4">
                        <span className="bg-[var(--primary)] text-black font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded">
                          {product.collection}
                        </span>
                        {product.featured && (
                           <span className="ml-2 bg-white text-black font-bold uppercase tracking-widest text-[10px] px-2 py-1 rounded">
                              Featured
                           </span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">${parseFloat(product.price).toFixed(2)}</td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <button onClick={() => openEdit(product)} className="text-white hover:text-[var(--primary)] transition-colors p-2">
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDelete(product.id)} className="text-muted-foreground hover:text-red-500 transition-colors p-2">
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-neutral-900 border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/40">
              <h3 className="text-xl font-bold uppercase tracking-widest">
                {editingId ? "Edit Product" : "Add New Product"}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-muted-foreground hover:text-white font-bold text-xl">
                &times;
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Product Name*</label>
                  <input type="text" required value={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)]" placeholder="E.g., Federal Premium 308 Win" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Price*</label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-muted-foreground">$</span>
                    <input type="number" step="0.01" required value={formData.price} onChange={(e) => setFormData({...formData, price: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg pl-8 pr-4 py-3 text-white focus:outline-none focus:border-[var(--primary)]" placeholder="0.00" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Category*</label>
                  <select required value={formData.collectionType} onChange={(e) => setFormData({...formData, collectionType: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)]">
                    <option value="ammunition">Ammunition</option>
                    <option value="parts">Parts & Accessories</option>
                    <option value="firearms">Used Firearms</option>
                    <option value="merch">Merchandise</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Brand / Sub-Text</label>
                  <input type="text" value={formData.brand} onChange={(e) => setFormData({...formData, brand: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)]" placeholder="E.g., Sig Sauer or Federal" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">Description</label>
                <textarea rows="4" value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] resize-none" placeholder="Product details..."></textarea>
              </div>

              <div className="space-y-4 border border-white/10 rounded-xl p-4 bg-black/40">
                <label className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] block">Product Image</label>
                {formData.image && !imageFile && (
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 relative rounded overflow-hidden border border-white/10">
                      <Image src={formData.image} fill className="object-cover" alt="Preview" />
                    </div>
                    <span className="text-xs text-muted-foreground">Current image active</span>
                  </div>
                )}
                <input type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} className="w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:uppercase file:tracking-widest file:bg-[var(--primary)] file:text-black hover:file:opacity-90" />
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" id="featured" checked={formData.featured} onChange={(e) => setFormData({...formData, featured: e.target.checked})} className="w-5 h-5 rounded border-white/10 bg-black text-[var(--primary)] focus:ring-[var(--primary)] focus:ring-offset-black" />
                <label htmlFor="featured" className="text-sm font-bold uppercase tracking-widest">Mark as Featured (Homepage)</label>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-end gap-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-6 py-3 font-bold text-sm text-white hover:text-muted-foreground uppercase tracking-widest transition-colors">
                  Cancel
                </button>
                <button type="submit" disabled={uploading} className="px-6 py-3 bg-[var(--primary)] text-black rounded font-bold text-sm uppercase tracking-widest hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2">
                  {uploading ? (
                     <span className="animate-pulse">Saving...</span>
                  ) : (
                     <>{editingId ? "Update Product" : "Create Product"}</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
