"use server";

import { kv } from "@vercel/kv";
import { v4 as uuidv4 } from "uuid";

// We'll store products in a simple hash or list in KV.
// Easiest is a single JSON array under the key "products".
// If the array gets huge, a hash is better, but for a simple shop, array is fine.

export async function getProducts() {
  try {
    const products = await kv.get("products");
    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error("Error reading from KV:", error);
    // If KV is not configured yet, return empty array gracefully
    return [];
  }
}

export async function saveProduct(productData, isEdit = false) {
  try {
    let products = await getProducts();
    
    if (isEdit) {
      products = products.map(p => p.id === productData.id ? { ...p, ...productData, updatedAt: new Date().toISOString() } : p);
    } else {
      const newProduct = {
        ...productData,
        id: uuidv4(),
        createdAt: new Date().toISOString()
      };
      products.push(newProduct);
    }
    
    await kv.set("products", products);
    return { success: true };
  } catch (error) {
    console.error("Error saving to KV:", error);
    return { success: false, error: "Failed to save product" };
  }
}

export async function deleteProduct(productId) {
  try {
    let products = await getProducts();
    products = products.filter(p => p.id !== productId);
    await kv.set("products", products);
    return { success: true };
  } catch (error) {
    console.error("Error deleting from KV:", error);
    return { success: false, error: "Failed to delete product" };
  }
}
