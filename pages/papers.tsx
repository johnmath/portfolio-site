import { useState } from 'react';
import { GetStaticProps } from 'next';
import { VscChevronDown, VscChevronRight, VscCopy } from 'react-icons/vsc';

import { Paper } from '@/types/papers';
import styles from '@/styles/PapersPage.module.css';

interface PapersPageProps {
  papers: Paper[];
}

const PapersPage = ({ papers }: PapersPageProps) => {
  const [expandedAbstracts, setExpandedAbstracts] = useState<Set<string>>(new Set());
  const [expandedNotes, setExpandedNotes] = useState<Set<string>>(new Set());
  const [copiedBibtex, setCopiedBibtex] = useState<string | null>(null);

  const toggleAbstract = (slug: string) => {
    const newExpanded = new Set(expandedAbstracts);
    if (newExpanded.has(slug)) {
      newExpanded.delete(slug);
    } else {
      newExpanded.add(slug);
    }
    setExpandedAbstracts(newExpanded);
  };

  const toggleNotes = (slug: string) => {
    const newExpanded = new Set(expandedNotes);
    if (newExpanded.has(slug)) {
      newExpanded.delete(slug);
    } else {
      newExpanded.add(slug);
    }
    setExpandedNotes(newExpanded);
  };

  const copyBibtex = async (bibtex: string, slug: string) => {
    try {
      await navigator.clipboard.writeText(bibtex);
      setCopiedBibtex(slug);
      setTimeout(() => setCopiedBibtex(null), 2000);
    } catch (err) {
      console.error('Failed to copy BibTeX:', err);
    }
  };

  // Sort papers: year desc primary, then custom_order desc, then title asc
  const sortedPapers = [...papers].sort((a, b) => {
    // Year desc (primary)
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    
    // custom_order desc (secondary)
    const aOrder = a.custom_order ?? 0;
    const bOrder = b.custom_order ?? 0;
    if (aOrder !== bOrder) {
      return bOrder - aOrder;
    }
    
    // title asc (tertiary)
    return a.title.localeCompare(b.title);
  });

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Papers</h1>
      <p className={styles.pageSubtitle}>
        My research publications in machine learning security, privacy, and related areas.
      </p>

      <div className={styles.container}>
        {sortedPapers.map((paper) => (
          <div key={paper.slug || paper.title} className={styles.paperCard}>
            {/* Featured badge */}
            {paper.featured && (
              <div className={styles.featuredBadge}>Featured</div>
            )}

            {/* Title */}
            <h3 className={styles.title}>
              {paper.custom_title || paper.title}
            </h3>

            {/* Authors */}
            <p className={styles.authors}>{paper.authors}</p>

            {/* Venue and Year */}
            <p className={styles.venue}>
              {paper.custom_venue || paper.venue} • {paper.year}
            </p>

            {/* Badges */}
            <div className={styles.badges}>
              <span className={styles.badge}>
                {paper.custom_venue || paper.venue}
              </span>
              
              {paper.doi && (
                <a
                  href={`https://doi.org/${paper.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.badge} ${styles.linkBadge}`}
                >
                  DOI
                </a>
              )}
              
              {paper.arxiv_id && (
                <a
                  href={`https://arxiv.org/abs/${paper.arxiv_id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.badge} ${styles.linkBadge}`}
                >
                  arXiv
                </a>
              )}
              
              {paper.tags && paper.tags.map((tag) => (
                <span key={tag} className={`${styles.badge} ${styles.tagBadge}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Links Row */}
            <div className={styles.links}>
              {paper.pdf_url && (
                <a
                  href={paper.pdf_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  PDF
                </a>
              )}
              
              {paper.code_url && (
                <a
                  href={paper.code_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Code
                </a>
              )}
              
              {paper.video_url && (
                <a
                  href={paper.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Video
                </a>
              )}
            </div>

            {/* BibTeX Button */}
            <div className={styles.bibtexSection}>
              <button
                onClick={() => copyBibtex(paper.bibtex, paper.slug || paper.title)}
                className={styles.bibtexButton}
              >
                <VscCopy />
                {copiedBibtex === (paper.slug || paper.title) ? 'Copied!' : 'Copy BibTeX'}
              </button>
            </div>

            {/* Abstract (Collapsible, default collapsed) */}
            {paper.abstract && (
              <div className={styles.collapsibleSection}>
                <button
                  onClick={() => toggleAbstract(paper.slug || paper.title)}
                  className={styles.collapsibleHeader}
                >
                  {expandedAbstracts.has(paper.slug || paper.title) ? (
                    <VscChevronDown className={styles.chevron} />
                  ) : (
                    <VscChevronRight className={styles.chevron} />
                  )}
                  Abstract
                </button>
                {expandedAbstracts.has(paper.slug || paper.title) && (
                  <div className={styles.collapsibleContent}>
                    <p>{paper.abstract}</p>
                  </div>
                )}
              </div>
            )}

            {/* Notes (Collapsible, only if notes present) */}
            {paper.notes && (
              <div className={styles.collapsibleSection}>
                <button
                  onClick={() => toggleNotes(paper.slug || paper.title)}
                  className={styles.collapsibleHeader}
                >
                  {expandedNotes.has(paper.slug || paper.title) ? (
                    <VscChevronDown className={styles.chevron} />
                  ) : (
                    <VscChevronRight className={styles.chevron} />
                  )}
                  Notes
                </button>
                {expandedNotes.has(paper.slug || paper.title) && (
                  <div className={styles.collapsibleContent}>
                    <p>{paper.notes}</p>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    // Import papers data at build time
    const papersData = await import('@/data/papers.json');
    const papers = papersData.default;

    return {
      props: { 
        title: 'Papers',
        papers 
      },
    };
  } catch (error) {
    console.error('Error loading papers data:', error);
    return {
      props: { 
        title: 'Papers',
        papers: [] 
      },
    };
  }
};

export default PapersPage;