import { useEffect } from 'react';
// import { useRouter } from 'next/router';

const Chatbot = () => {
  // Show loading state while redirecting
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Chatbot' },
  };
}

export default Chatbot;
