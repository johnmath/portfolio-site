export interface Paper {
  title: string;
  authors: string;
  venue: string;
  year: number;
  bibtex: string;
  // Fields from overrides
  slug?: string;
  custom_title?: string;
  custom_venue?: string;
  abstract?: string;
  pdf_url?: string;
  code_url?: string;
  video_url?: string;
  doi?: string;
  arxiv_id?: string;
  tags?: string[];
  notes?: string;
  featured?: boolean;
  custom_order?: number;
}

export interface PaperOverride {
  slug: string;
  custom_title?: string;
  custom_venue?: string;
  abstract?: string;
  pdf_url?: string;
  code_url?: string;
  video_url?: string;
  doi?: string;
  arxiv_id?: string;
  tags?: string[];
  notes?: string;
  featured?: boolean;
  custom_order?: number;
}