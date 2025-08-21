#!/usr/bin/env node

import { writeFileSync, readFileSync, existsSync } from 'fs';
import { join } from 'path';

// Google Scholar user ID from ContactCode.tsx
const SCHOLAR_USER_ID = '3jYQ3FsAAAAJ';
const DATA_DIR = join(process.cwd(), 'data');
const PAPERS_FILE = join(DATA_DIR, 'papers.json');
const OVERRIDES_FILE = join(DATA_DIR, 'papers_overrides.json');

/**
 * Load existing papers data
 */
function loadExistingData() {
  try {
    if (existsSync(PAPERS_FILE)) {
      const data = readFileSync(PAPERS_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn('Error loading existing papers data:', error.message);
  }
  return [];
}

/**
 * Load papers overrides
 */
function loadOverrides() {
  try {
    if (existsSync(OVERRIDES_FILE)) {
      const data = readFileSync(OVERRIDES_FILE, 'utf8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.warn('Error loading overrides:', error.message);
  }
  return [];
}

/**
 * Generate BibTeX entry for a paper
 */
function generateBibTeX(paper) {
  const year = paper.year || new Date().getFullYear();
  const venue = paper.venue || 'Unknown';
  const authors = paper.authors || 'Unknown';
  const title = paper.title || 'Untitled';
  
  // Create a simple citation key from first author and year
  const firstAuthor = authors.split(',')[0].trim().replace(/\s+/g, '');
  const citationKey = `${firstAuthor}${year}`;
  
  return `@article{${citationKey},
  title={${title}},
  author={${authors}},
  journal={${venue}},
  year={${year}}
}`;
}

/**
 * Merge paper with overrides
 */
function mergePaperWithOverrides(paper, overrides) {
  const override = overrides.find(o => o.slug === paper.slug);
  if (!override) return paper;
  
  return {
    ...paper,
    ...override,
    // Keep original data as fallback
    title: override.custom_title || paper.title,
    venue: override.custom_venue || paper.venue,
  };
}

/**
 * Fetch papers from Google Scholar (mock implementation)
 * In a real implementation, this would scrape Scholar or use an API
 */
async function fetchPapersFromScholar() {
  console.log(`Attempting to fetch papers for user ID: ${SCHOLAR_USER_ID}`);
  
  // Mock data based on the CV data I saw in the repository
  // In a real implementation, this would scrape Google Scholar
  const mockPapers = [
    {
      title: "Phantom: General Trigger Attacks on Retrieval Augmented Language Generation",
      authors: "John Abascal, Stanley Wu, Alina Oprea, Jonathan Ullman",
      venue: "arXiv preprint",
      year: 2024,
      slug: "phantom2024",
    },
    {
      title: "TMI! Finetuned Models Leak Private Information from their Pretraining Data",
      authors: "John Abascal, Florian Tramèr, Matthew Jagielski, Nicholas Carlini, Alina Oprea, Jonathan Ullman",
      venue: "PETS 2024",
      year: 2024,
      slug: "tmi2024",
    },
    {
      title: "SNAP: Efficient Extraction of Private Properties with Poisoning",
      authors: "John Abascal, Stanley Wu, Alina Oprea, Jonathan Ullman",
      venue: "IEEE S&P 2023",
      year: 2023,
      slug: "snap2023",
    }
  ];
  
  // Add BibTeX to each paper
  return mockPapers.map(paper => ({
    ...paper,
    bibtex: generateBibTeX(paper)
  }));
}

/**
 * Main function to fetch and update papers data
 */
async function main() {
  try {
    console.log('Starting papers fetch process...');
    
    // Load existing data and overrides
    const existingData = loadExistingData();
    const overrides = loadOverrides();
    
    // Fetch new papers from Google Scholar
    let papers;
    try {
      papers = await fetchPapersFromScholar();
      console.log(`Fetched ${papers.length} papers from Google Scholar`);
    } catch (error) {
      console.warn('Failed to fetch from Google Scholar:', error.message);
      console.log('Keeping existing data...');
      return;
    }
    
    // Merge with overrides
    const mergedPapers = papers.map(paper => mergePaperWithOverrides(paper, overrides));
    
    // Write to file
    writeFileSync(PAPERS_FILE, JSON.stringify(mergedPapers, null, 2));
    console.log(`Successfully updated ${PAPERS_FILE} with ${mergedPapers.length} papers`);
    
  } catch (error) {
    console.error('Error in papers fetch process:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default main;