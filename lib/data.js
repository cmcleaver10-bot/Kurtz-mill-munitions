import fs from 'fs';
import path from 'path';
import { kv } from "@vercel/kv";

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

async function getAllKvProducts() {
  try {
    const products = await kv.get("products");
    return Array.isArray(products) ? products : [];
  } catch (error) {
    console.error("Error fetching from KV:", error);
    return [];
  }
}

export async function getCollectionData(collectionName) {
  const allProducts = await getAllKvProducts();
  return allProducts.filter(p => p.collection === collectionName).map(p => ({
    slug: p.id,
    ...p
  }));
}

export async function getFeaturedProducts() {
  const allProducts = await getAllKvProducts();
  return allProducts.filter(p => p.featured === true).map(p => ({
    slug: p.id,
    ...p
  }));
}
