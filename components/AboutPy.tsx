import Image from 'next/image';
import styles from '@/styles/AboutPy.module.css';
import React from 'react';

export const researchInterests = [
  'Privacy in Machine Learning',
  'Adversarial Machine Learning',
  'Differential Privacy',
  'LLM Security and Safety',
];

const AboutPy = () => {
  const lines: Array<React.ReactElement> = [
    // 1
    <span key={0} className={styles.comment}># about.py</span>,
    // 2
    <span key={1} />,
    // 3
    <span key={2}>
      <span className={styles.kw}>class</span>{' '}
      <span className={styles.className}>JohnAbascal</span>:
    </span>,
    // 4
    <span key={3}>
      {'    '}
      <span className={styles.str}>&quot;&quot;&quot;</span>
    </span>,
    // 5
    <span key={4}>
      {'    '}
      <span className={styles.str}>
        I am a fourth-year Computer Science PhD Student at Northeastern
        University, advised by Jonathan Ullman and Alina Oprea. I completed my
        B.S. in Pure Mathematics at Florida State University, advised by Alec
        Kercheval and Nathan Crock.
      </span>
    </span>,
    // 6
    <span key={5}>
      {'    '}
      <span className={styles.str}>
        Industry: Intuit (Software Engineering), NewSci Labs (Data Science).
        Summers 2023 &amp; 2024: Applied Research Intern at LinkedIn (Data
        Privacy). Currently: Student Researcher at Google working on machine
        unlearning.
      </span>
    </span>,
    // 7
    <span key={6}>
      {'    '}
      <span className={styles.str}>&quot;&quot;&quot;</span>
    </span>,
    // 8
    <span key={7} />,
    // 9
    <span key={8}>
      {'    '}name = <span className={styles.str}>&apos;John Abascal&apos;</span>
    </span>,
    // 10
    <span key={9}>
      {'    '}role ={' '}
      <span className={styles.str}>
        &apos;Computer Science PhD Student at Northeastern University&apos;
      </span>
    </span>,
    // 11
    <span key={10}>
      {'    '}address ={' '}
      <span className={styles.str}>&apos;177 Huntington, Boston, MA 02115&apos;</span>
    </span>,
    // 12
    <span key={11} />,
    // 13
    <span key={12}>
      {'    '}advisors = [
      <span className={styles.str}>&apos;Jonathan Ullman&apos;</span>,{' '}
      <span className={styles.str}>&apos;Alina Oprea&apos;</span>]
    </span>,
    // 14
    <span key={13} />,
    // 15
    <span key={14}>
      {'    '}research_interests = [
    </span>,
    // 16..19
    ...researchInterests.map((ri, idx) => (
      <span key={`interest-${idx}`}>
        {'        '}
        <span className={styles.str}>&apos;{ri}&apos;</span>
        {idx < researchInterests.length - 1 ? ',' : ''}
      </span>
    )),
    // 20
    <span key={15 + researchInterests.length}>
      {'    '}]  # end research_interests
    </span>,
    // 21
    <span key={16 + researchInterests.length} />,
    // 22
    <span key={17 + researchInterests.length}>
      {'    '}links = {'{'}
    </span>,
    // 23..26
    <span key={18 + researchInterests.length}>
      {'        '}
      <span className={styles.str}>&apos;intuit&apos;</span>:&nbsp;
      <span className={styles.str}>&apos;https://www.intuit.com/&apos;</span>,
    </span>,
    <span key={19 + researchInterests.length}>
      {'        '}
      <span className={styles.str}>&apos;newscilabs&apos;</span>:&nbsp;
      <span className={styles.str}>&apos;https://labs.newsci.ai/&apos;</span>,
    </span>,
    <span key={20 + researchInterests.length}>
      {'        '}
      <span className={styles.str}>&apos;linkedin&apos;</span>:&nbsp;
      <span className={styles.str}>&apos;https://about.linkedin.com/&apos;</span>,
    </span>,
    <span key={21 + researchInterests.length}>
      {'        '}
      <span className={styles.str}>&apos;google&apos;</span>:&nbsp;
      <span className={styles.str}>&apos;https://about.google/&apos;</span>
    </span>,
    // 27
    <span key={22 + researchInterests.length}>
      {'    '}
      {'}'}
    </span>,
  ];

  return (
    <main className={styles.container}>
      <div className={styles.layout}>
        <section className={styles.editorPane} aria-label="Python-styled about document">
          {lines.map((node, i) => (
            <div className={styles.codeLine} key={i}>
              <span className={styles.lineNumber} aria-hidden="true">
                {i + 1}
              </span>
              <pre className={styles.code} role="textbox" aria-readonly="true">
                <code>{node}</code>
              </pre>
            </div>
          ))}
        </section>

        <aside className={styles.profilePane}>
          <figure className={styles.profileCard}>
            <Image
              src="/me.png"
              alt="Portrait of John Abascal"
              width={260}
              height={260}
              className={styles.profileImage}
              priority
            />
            <figcaption className={styles.caption}>
              John Abascal
            </figcaption>
          </figure>
        </aside>
      </div>
    </main>
  );
};

export default AboutPy;
