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
              <span className={styles.comment}># about.py - John Abascal's Profile Script</span>
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
              <span className={styles.variable}>name</span> = <span className={styles.string}>"John Abascal"</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>title</span> = <span className={styles.string}>"Computer Science PhD Student at Northeastern University"</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>location</span> = <span className={styles.string}>"177 Huntington, Boston, MA 02115"</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.comment}># Load profile image</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>profile_img</span> = <span className={styles.module}>Image</span>.<span className={styles.function}>open</span>(<span className={styles.string}>"/me.png"</span>)
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.comment}># Biography</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>bio</span> = <span className={styles.string}>"I am a fourth-year Computer Science PhD Student at "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"Northeastern University, where I am advised by "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"<a href="https://www.ccs.neu.edu/home/jullman/" target="_blank" rel="noopener noreferrer" className={styles.link}>Jonathan Ullman</a> and <a href="https://www.ccs.neu.edu/home/alina/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alina Oprea</a>. "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"I completed my B.S. in Pure Mathematics at Florida State University "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"and conducted my undergraduate honors thesis under the guidance of "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"<a href="https://www.math.fsu.edu/~kercheva/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alec Kercheval</a> and <a href="https://www.sc.fsu.edu/people?uid=ndc08" target="_blank" rel="noopener noreferrer" className={styles.link}>Nathan Crock</a>."</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.variable}>experience</span> = <span className={styles.string}>"I have also held industry positions in both software "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"engineering and data science at <a href="https://www.intuit.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Intuit</a> and "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"<a href="https://labs.newsci.ai/" target="_blank" rel="noopener noreferrer" className={styles.link}>NewSci Labs</a>, respectively. During the summers of 2023 and 2024, "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"I was an Applied Research Intern on <a href="https://about.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn's</a> Data Privacy "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"team, where I worked on empirically measuring privacy leakage in "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"analytics and LLMs. This semester, I am a Student Researcher at "</span> + \
            </div>
            <div className={styles.line}>
              <span className={styles.string}>"<a href="https://about.google/" target="_blank" rel="noopener noreferrer" className={styles.link}>Google</a>, exploring open problems in machine unlearning 🔒"</span>
            </div>
            <div className={styles.line}></div>
            <div className={styles.line}>
              <span className={styles.comment}># Research interests</span>
            </div>
            <div className={styles.line}>
              <span className={styles.variable}>research_interests</span> = [
            </div>
            <div className={styles.line}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Privacy in Machine Learning"</span>,
            </div>
            <div className={styles.line}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Adversarial Machine Learning"</span>,
            </div>
            <div className={styles.line}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Differential Privacy"</span>,
            </div>
            <div className={styles.line}>
              &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"LLM Security and Safety"</span>
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
              <span className={styles.function}>print</span>(<span className={styles.string}>"Research Interests:"</span>, <span className={styles.variable}>research_interests</span>)
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
