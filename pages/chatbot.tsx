import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Chatbot = () => {
  // Show loading state while redirecting
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      color: 'rgba(255, 255, 255, 0.7)' 
    }}>
      Redirecting to about content...
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Chatbot' },
  };
}

export default Chatbot;
