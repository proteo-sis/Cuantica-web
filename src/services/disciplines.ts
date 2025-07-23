import { promises as fs } from 'fs';
import path from 'path';

export interface Discipline {
  id: string;
  name: string;
  slug: string;
  heroSection: {
    title: string;
    subtitle: string;
    description: string;
    mainImage: string;
    ctaText: string;
    ctaLink: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  gallery: {
    title: string;
    images: Array<{
      url: string;
      alt: string;
      caption: string;
    }>;
  };
  schedule: {
    title: string;
    description: string;
    days: Array<{
      name: string;
      times: string[];
    }>;
  };
  instructors: Array<{
    id: string;
    name: string;
    title: string;
    specialties: string[];
    description: string;
    image: string;
    certifications?: string[];
    socialMedia?: {
      instagram?: string;
      facebook?: string;
    };
  }>;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  testimonials: Array<{
    id: string;
    name: string;
    image: string;
    text: string;
    rating: number;
  }>;
}

export async function getDisciplineBySlug(slug: string): Promise<Discipline | null> {
  try {
    const filePath = path.join(process.cwd(), 'src/data/disciplines', `${slug}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents) as Discipline;
  } catch (error) {
    console.error(`Error loading discipline data for slug ${slug}:`, error);
    return null;
  }
}

export async function getAllDisciplines(): Promise<Discipline[]> {
  try {
    const disciplinesDir = path.join(process.cwd(), 'src/data/disciplines');
    const files = await fs.readdir(disciplinesDir);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    const disciplines = await Promise.all(
      jsonFiles.map(async (file) => {
        const filePath = path.join(disciplinesDir, file);
        const fileContents = await fs.readFile(filePath, 'utf8');
        return JSON.parse(fileContents) as Discipline;
      })
    );

    return disciplines;
  } catch (error) {
    console.error('Error loading disciplines:', error);
    return [];
  }
} 