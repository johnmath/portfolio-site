import Chatbot from '@/components/Chatbot';

import styles from '@/styles/Chatbot.module.css';

const ChatbotPage = () => {
  // Show loading state while redirecting
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <Chatbot />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Chatbot' },
  };
}

export default ChatbotPage;
