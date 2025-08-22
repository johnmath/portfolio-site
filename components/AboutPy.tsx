import Image from 'next/image';
import styles from '@/styles/AboutPy.module.css';

// Research interests as exportable array for easy editing
export const researchInterests = [
  'Privacy in Machine Learning',
  'Adversarial Machine Learning',
  'Differential Privacy',
  'LLM Security and Safety'
];

// Links dictionary for embedding in code
const links = {
  'ullman': 'https://www.ccs.neu.edu/home/jullman/',
  'oprea': 'https://www.ccs.neu.edu/home/alina/',
  'kercheval': 'https://www.math.fsu.edu/~kercheva/',
  'crock': 'https://www.sc.fsu.edu/people?uid=ndc08',
  'intuit': 'https://www.intuit.com/',
  'newsci': 'https://labs.newsci.ai/',
  'linkedin': 'https://about.linkedin.com/',
  'google': 'https://about.google/'
};

const AboutPy = () => {
  const renderCodeLine = (content: React.ReactNode, lineNum: number, key?: string) => (
    <div key={key || `line-${lineNum}`} className={styles.codeLine}>
      {content}
    </div>
  );

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {Array.from({ length: 30 }, (_, i) => (
                  <div key={i + 1} className={styles.lineNumber}>
                    {i + 1}
                  </div>
                ))}
              </div>
              <div className={styles.codeEditor}>
                {renderCodeLine(
                  <>
                    <span className={styles.keyword}>import</span>{' '}
                    <span className={styles.module}>PIL</span>
                  </>,
                  1
                )}
                {renderCodeLine(
                  <>
                    <span className={styles.variable}>img</span>{' '}
                    <span className={styles.operator}>=</span>{' '}
                    <span className={styles.module}>PIL</span>
                    <span className={styles.operator}>.</span>
                    <span className={styles.attribute}>Image</span>
                    <span className={styles.operator}>.</span>
                    <span className={styles.function}>open</span>
                    <span className={styles.operator}>(</span>
                    <span className={styles.string}>&apos;john.png&apos;</span>
                    <span className={styles.operator}>)</span>
                  </>,
                  2
                )}
                {renderCodeLine('', 3)}
                {renderCodeLine(
                  <>
                    <span className={styles.comment}># Links to collaborators and institutions</span>
                  </>,
                  4
                )}
                {renderCodeLine(
                  <>
                    <span className={styles.variable}>links</span>{' '}
                    <span className={styles.operator}>=</span>{' '}
                    <span className={styles.operator}>{'{'}</span>
                  </>,
                  5
                )}
                {renderCodeLine(
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.string}>&apos;ullman&apos;</span>
                    <span className={styles.operator}>:</span>{' '}
                    <a href={links.ullman} target="_blank" rel="noopener noreferrer" className={styles.linkString}>
                      &apos;https://www.ccs.neu.edu/home/jullman/&apos;
                    </a>
                    <span className={styles.operator}>,</span>
                  </>,
                  6
                )}
                {renderCodeLine(
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.string}>&apos;oprea&apos;</span>
                    <span className={styles.operator}>:</span>{' '}
                    <a href={links.oprea} target="_blank" rel="noopener noreferrer" className={styles.linkString}>
                      &apos;https://www.ccs.neu.edu/home/alina/&apos;
                    </a>
                    <span className={styles.operator}>,</span>
                  </>,
                  7
                )}
                {renderCodeLine(
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.string}>&apos;linkedin&apos;</span>
                    <span className={styles.operator}>:</span>{' '}
                    <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkString}>
                      &apos;https://about.linkedin.com/&apos;
                    </a>
                    <span className={styles.operator}>,</span>
                  </>,
                  8
                )}
                {renderCodeLine(
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.string}>&apos;google&apos;</span>
                    <span className={styles.operator}>:</span>{' '}
                    <a href={links.google} target="_blank" rel="noopener noreferrer" className={styles.linkString}>
                      &apos;https://about.google/&apos;
                    </a>
                    <span className={styles.operator}>,</span>
                  </>,
                  9
                )}
                {renderCodeLine(
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.string}>&apos;intuit&apos;</span>
                    <span className={styles.operator}>:</span>{' '}
                    <a href={links.intuit} target="_blank" rel="noopener noreferrer" className={styles.linkString}>
                      &apos;https://www.intuit.com/&apos;
                    </a>
                    <span className={styles.operator}>,</span>
                  </>,
                  10
                )}
                {renderCodeLine(
                  <>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className={styles.string}>&apos;newsci&apos;</span>
                    <span className={styles.operator}>:</span>{' '}
                    <a href={links.newsci} target="_blank" rel="noopener noreferrer" className={styles.linkString}>
                      &apos;https://labs.newsci.ai/&apos;
                    </a>
                  </>,
                  11
                )}
                {renderCodeLine(
                  <>
                    <span className={styles.operator}>{'}'}</span>
                  </>,
                  12
                )}
                {renderCodeLine('', 13)}
                {renderCodeLine(
                  <>
                    <span className={styles.variable}>research_interests</span>{' '}
                    <span className={styles.operator}>=</span>{' '}
                    <span className={styles.operator}>[</span>
                  </>,
                  14
                )}
                {researchInterests.map((interest, index) => (
                  renderCodeLine(
                    <>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span className={styles.string}>&apos;{interest}&apos;</span>
                      {index < researchInterests.length - 1 && <span className={styles.operator}>,</span>}
                    </>,
                    15 + index,
                    `research-${index}`
                  )
                ))}
                {renderCodeLine(
                  <>
                    <span className={styles.operator}>]</span>
                  </>,
                  15 + researchInterests.length
                )}
                {renderCodeLine('', 15 + researchInterests.length + 1)}
                {renderCodeLine(
                  <>
                    <span className={styles.comment}># Bio: Fourth-year PhD student at Northeastern University,</span>
                  </>,
                  15 + researchInterests.length + 2
                )}
                {renderCodeLine(
                  <>
                    <span className={styles.comment}># advised by Jonathan Ullman and Alina Oprea.</span>
                  </>,
                  15 + researchInterests.length + 3
                )}
                {renderCodeLine(
                  <>
                    <span className={styles.comment}># Previously at LinkedIn, Google, Intuit, NewSci Labs.</span>
                  </>,
                  15 + researchInterests.length + 4
                )}
                {renderCodeLine(
                  <>
                    <span className={styles.comment}># Exploring privacy in ML and machine unlearning 🔒</span>
                  </>,
                  15 + researchInterests.length + 5
                )}
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.profilePane}>
          <div className={styles.profileSection}>
            <Image
              src="/me.png"
              alt="Portrait of John Abascal"
              width={200}
              height={200}
              className={styles.profileImage}
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.title}>John Abascal</h1>
              <p className={styles.subtitle}>Computer Science PhD Student at Northeastern University</p>
              <p className={styles.address}>177 Huntington<br />Boston, MA 02115</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPy;
