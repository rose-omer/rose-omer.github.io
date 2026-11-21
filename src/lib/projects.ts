import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/** Projeler `order` alanına, eşitlikte yıla (yeni önce) göre sıralanır. */
export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects', (p) => p.data.lang === 'tr');
  return all.sort((a, b) => a.data.order - b.data.order || b.data.year - a.data.year);
}

export async function getFeatured(limit = 3): Promise<Project[]> {
  return (await getProjects()).filter((p) => p.data.featured).slice(0, limit);
}
