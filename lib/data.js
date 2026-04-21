import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";

const contentDirectory = path.join(process.cwd(), 'content');

export async function getSiteConfig() {
  const filePath = path.join(contentDirectory, 'site-config', 'general.json');
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return { tagline: "Where tradition meets readiness", about_text: "Kurtz Mill Munitions LLC is a dedicated provider of quality firearms, ammunition, and custom gunsmithing services." };
  }
}

export async function getCollectionData(collectionName) {
  try {
    const q = query(collection(db, "products"), where("collection", "==", collectionName));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      slug: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error(`Error fetching collection ${collectionName}:`, error);
    return [];
  }
}

export async function getFeaturedProducts() {
  try {
    const q = query(collection(db, "products"), where("featured", "==", true));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      slug: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
}
