import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export async function getSiteConfig() {
  const filePath = path.join(contentDirectory, 'site-config', 'general.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export async function getCollectionData(collection) {
  const dirPath = path.join(contentDirectory, collection);
  if (!fs.existsSync(dirPath)) return [];

  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.md'));
  
  return files.map(filename => {
    const filePath = path.join(dirPath, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug: filename.replace('.md', ''),
      ...data,
      content
    };
  });
}

export async function getFeaturedProducts() {
  const groups = ['ammunition', 'parts', 'firearms'];
  let featured = [];
  
  for (const group of groups) {
    const items = await getCollectionData(group);
    featured = featured.concat(items.filter(item => item.featured));
  }
  
  return featured;
}
