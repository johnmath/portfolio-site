import styles from '@/styles/PublicationsPage.module.css';

const PublicationsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Publications</h1>
      <p className={styles.pageSubtitle}>
        Here are my research publications, automatically synced from Google Scholar.
      </p>

      <div className={styles.container}>
        {/* Publications will be populated here via data fetching */}
        <div className={styles.placeholder}>
          <p>Loading publications...</p>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Publications' },
  };
}

export default PublicationsPage;