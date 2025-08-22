import Image from 'next/image';
import styles from '@/styles/AboutPy.module.css';

// Research interests as exportable array for easy editing
export const researchInterests = [
  'Privacy in Machine Learning',
  'Adversarial Machine Learning',
  'Differential Privacy',
  'LLM Security and Safety'
];

const AboutPy = () => {
  return (
    <main className={styles.container}>
      <div className={styles.editorLayout}>
        {/* Left side - Python code */}
        <div className={styles.codeSection}>
          <div className={styles.code}>
            <div className={styles.line}>
              <span className={styles.comment}># about.py - John Abascal&apos;s Profile Script</span>
            </div>
            <div className={styles.line}>
              <span className={styles.keyword}>from</span> <span className={styles.module}>PIL</span> <span className={styles.keyword}>import</span> <span className={styles.function}>Image</span>
            </div>
            <div className={styles.line}>
              <span className={styles.keyword}>import</span> <span className={styles.module}>webbrowser</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.comment}># Personal information</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>name</span> = <span className={styles.string}>&quot;John Abascal&quot;</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>title</span> = <span className={styles.string}>&quot;Computer Science PhD Student at Northeastern University&quot;</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>location</span> = <span className={styles.string}>&quot;177 Huntington, Boston, MA 02115&quot;</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.comment}># Load profile image</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>profile_img</span> = <span className={styles.module}>Image</span>.<span className={styles.function}>open</span>(<span className={styles.string}>&quot;/me.png&quot;</span>)
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.comment}># Biography</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>bio</span> = <span className={styles.string}>&quot;I am a fourth-year Computer Science PhD Student at &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;Northeastern University, where I am advised by &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;<a href="https://www.ccs.neu.edu/home/jullman/" target="_blank" rel="noopener noreferrer" className={styles.link}>Jonathan Ullman</a> and <a href="https://www.ccs.neu.edu/home/alina/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alina Oprea</a>. &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;I completed my B.S. in Pure Mathematics at Florida State University &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;and conducted my undergraduate honors thesis under the guidance of &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;<a href="https://www.math.fsu.edu/~kercheva/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alec Kercheval</a> and <a href="https://www.sc.fsu.edu/people?uid=ndc08" target="_blank" rel="noopener noreferrer" className={styles.link}>Nathan Crock</a>.&quot;</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.variable}>experience</span> = <span className={styles.string}>&quot;I have also held industry positions in both software &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;engineering and data science at <a href="https://www.intuit.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Intuit</a> and &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;<a href="https://labs.newsci.ai/" target="_blank" rel="noopener noreferrer" className={styles.link}>NewSci Labs</a>, respectively. During the summers of 2023 and 2024, &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;I was an Applied Research Intern on <a href="https://about.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn&apos;s</a> Data Privacy &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;team, where I worked on empirically measuring privacy leakage in &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;analytics and LLMs. This semester, I am a Student Researcher at &quot;</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>&quot;<a href="https://about.google/" target="_blank" rel="noopener noreferrer" className={styles.link}>Google</a>, exploring open problems in machine unlearning 🔒&quot;</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.comment}># Research interests</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>research_interests</span> = [
            </div>
            <div className={styles.line}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>&quot;Privacy in Machine Learning&quot;</span>,
            </div>
            <div className={styles.line}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>&quot;Adversarial Machine Learning&quot;</span>,
            </div>
            <div className={styles.line}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>&quot;Differential Privacy&quot;</span>,
            </div>
            <div className={styles.line}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>&quot;LLM Security and Safety&quot;</span>
            </div>
            <div className={styles.line}>
              ]
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.comment}># Display information</span>
            </div>
            <div className={styles.line}>
              <span className={styles.function}>print</span>(<span className={styles.variable}>name</span>)
            </div>
            <div className={styles.line}>
              <span className={styles.function}>print</span>(<span className={styles.variable}>title</span>)
            </div>
            <div className={styles.line}>
              <span className={styles.function}>print</span>(<span className={styles.variable}>bio</span>)
            </div>
            <div className={styles.line}>
              <span className={styles.function}>print</span>(<span className={styles.variable}>experience</span>)
            </div>
            <div className={styles.line}>
              <span className={styles.function}>print</span>(<span className={styles.string}>&quot;Research Interests:&quot;</span>, <span className={styles.variable}>research_interests</span>)
            </div>
          </div>
        </div>

        {/* Right side - Profile info */}
        <div className={styles.profileSection}>
          <figure className={styles.imageContainer}>
            <Image
              src="/me.png"
              alt="Portrait of John Abascal"
              width={200}
              height={200}
              className={styles.profileImage}
            />
          </figure>
          
          <div className={styles.profileInfo}>
            <h1 className={styles.name}>John Abascal</h1>
            <p className={styles.title}>Computer Science PhD Student at Northeastern University</p>
            <p className={styles.location}>177 Huntington<br />Boston, MA 02115</p>
            
            <div className={styles.bioContent}>
              <div className={styles.bioParagraph}>
                I am a fourth-year Computer Science PhD Student at Northeastern University, where I am 
                advised by <a href="https://www.ccs.neu.edu/home/jullman/" target="_blank" rel="noopener noreferrer" className={styles.link}>Jonathan Ullman</a> and{' '}
                <a href="https://www.ccs.neu.edu/home/alina/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alina Oprea</a>. 
                I completed my B.S. in Pure Mathematics at Florida State University and conducted my 
                undergraduate honors thesis under the guidance of{' '}
                <a href="https://www.math.fsu.edu/~kercheva/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alec Kercheval</a> and{' '}
                <a href="https://www.sc.fsu.edu/people?uid=ndc08" target="_blank" rel="noopener noreferrer" className={styles.link}>Nathan Crock</a>.
              </div>
              
              <div className={styles.bioParagraph}>
                I have also held industry positions in both software engineering and data science at{' '}
                <a href="https://www.intuit.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Intuit</a> and{' '}
                <a href="https://labs.newsci.ai/" target="_blank" rel="noopener noreferrer" className={styles.link}>NewSci Labs</a>, 
                respectively. During the summers of 2023 and 2024, I was an Applied Research Intern on{' '}
                <a href="https://about.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn&apos;s</a> Data Privacy team, 
                where I worked on empirically measuring privacy leakage in analytics and LLMs. This semester, 
                I am a Student Researcher at{' '}
                <a href="https://about.google/" target="_blank" rel="noopener noreferrer" className={styles.link}>Google</a>, 
                exploring open problems in machine unlearning 🔒
              </div>
            </div>

            <div className={styles.researchSection}>
              <h2 className={styles.sectionTitle}>Research Interests</h2>
              <ul className={styles.interestsList}>
                {researchInterests.map((interest, index) => (
                  <li key={index} className={styles.interestItem}>{interest}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPy;
