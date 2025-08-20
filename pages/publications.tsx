import fs from 'fs';
import path from 'path';
import styles from '@/styles/PublicationsPage.module.css';

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  cited_by: number;
  scholar_url: string;
  pdf_url?: string;
  video_url?: string;
  code_url?: string;
  abstract: string;
  custom_description?: string;
  featured?: boolean;
  slug: string;
}

interface PublicationsData {
  publications: Publication[];
  count: number;
  last_updated: string;
  scholar_id: string;
}

interface PublicationsPageProps {
  publicationsData: PublicationsData;
}

const PublicationsPage = ({ publicationsData }: PublicationsPageProps) => {
  const { publications, count, last_updated } = publicationsData;

  const formatDate = (isoDate: string) => {
    try {
      return new Date(isoDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return 'Unknown';
    }
  };

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Publications</h1>
      <p className={styles.pageSubtitle}>
        Here are my research publications, automatically synced from Google Scholar.
        <br />
        <small>Last updated: {formatDate(last_updated)} • {count} publications</small>
      </p>

      <div className={styles.container}>
        {publications.length === 0 ? (
          <div className={styles.placeholder}>
            <p>No publications found.</p>
          </div>
        ) : (
          publications.map((pub) => (
            <div key={pub.slug} className={styles.publicationItem}>
              <h2 className={styles.publicationTitle}>{pub.title}</h2>
              
              <div className={styles.publicationAuthors}>
                {pub.authors}
              </div>
              
              <div className={styles.publicationVenue}>
                {pub.venue} • {pub.year}
                {pub.cited_by > 0 && (
                  <span> • Cited by {pub.cited_by}</span>
                )}
              </div>

              {(pub.custom_description || pub.abstract) && (
                <p className={styles.publicationDescription}>
                  {pub.custom_description || pub.abstract}
                </p>
              )}

              <div className={styles.publicationLinks}>
                {pub.pdf_url && (
                  <a
                    href={pub.pdf_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.publicationLink} ${styles.pdfLink}`}
                  >
                    📄 PDF
                  </a>
                )}
                {pub.video_url && (
                  <a
                    href={pub.video_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.publicationLink} ${styles.videoLink}`}
                  >
                    🎥 Video
                  </a>
                )}
                {pub.code_url && (
                  <a
                    href={pub.code_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.publicationLink} ${styles.codeLink}`}
                  >
                    💻 Code
                  </a>
                )}
                {pub.scholar_url && !pub.pdf_url && (
                  <a
                    href={pub.scholar_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.publicationLink} ${styles.scholarLink}`}
                  >
                    🎓 Scholar
                  </a>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    // Try to load final merged publications first
    const finalPath = path.join(process.cwd(), 'data', 'publications_final.json');
    const generatedPath = path.join(process.cwd(), 'data', 'publications_generated.json');
    
    let publicationsData: PublicationsData;
    
    if (fs.existsSync(finalPath)) {
      const fileContents = fs.readFileSync(finalPath, 'utf8');
      publicationsData = JSON.parse(fileContents);
    } else if (fs.existsSync(generatedPath)) {
      const fileContents = fs.readFileSync(generatedPath, 'utf8');
      publicationsData = JSON.parse(fileContents);
    } else {
      // Fallback data if no files exist
      publicationsData = {
        publications: [],
        count: 0,
        last_updated: new Date().toISOString(),
        scholar_id: '3jYQ3FsAAAAJ'
      };
    }

    return {
      props: { 
        title: 'Publications',
        publicationsData 
      },
    };
  } catch (error) {
    console.error('Error loading publications:', error);
    
    // Return fallback data on error
    return {
      props: { 
        title: 'Publications',
        publicationsData: {
          publications: [],
          count: 0,
          last_updated: new Date().toISOString(),
          scholar_id: '3jYQ3FsAAAAJ'
        }
      },
    };
  }
}

export default PublicationsPage;