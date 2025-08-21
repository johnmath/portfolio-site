import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/logos/html_icon.svg" filename="about.py" path="/" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab icon="/logos/markdown_icon.svg" filename="publications.md" path="/publications" />
      <Tab
        icon="/logos/json_icon.svg"
        filename="articles.json"
        path="/articles"
      />
      <Tab
        icon="/logos/markdown_icon.svg"
        filename="github.md"
        path="/github"
      />
      <Tab icon="/logos/md_icon.svg" filename="papers.md" path="/papers" />
      <Tab icon="/logos/github.svg" filename="github" path="https://github.com/johnmath" external />
    </div>
  );
};

export default Tabsbar;
