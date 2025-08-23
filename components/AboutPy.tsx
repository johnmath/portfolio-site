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
      <div className={styles.notebookLayout}>
        <div className={styles.notebook}>
          {/* Cell 1: Imports */}
          <div className={styles.notebookCell}>
            <div className={styles.cellHeader}>In [1]:</div>
            <div className={styles.cellContent}>
              <div className={styles.line}>
                <span className={styles.comment}># about.ipynb - John Abascal&apos;s Profile Notebook</span>
              </div>
              <div className={styles.line}>
                <span className={styles.keyword}>from</span> <span className={styles.module}>PIL</span> <span className={styles.keyword}>import</span> <span className={styles.function}>Image</span>
              </div>
              <div className={styles.line}>
                <span className={styles.keyword}>import</span> <span className={styles.module}>webbrowser</span>
              </div>
            </div>
          </div>

          {/* Cell 2: Personal Information */}
          <div className={styles.notebookCell}>
            <div className={styles.cellHeader}>In [2]:</div>
            <div className={styles.cellContent}>
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
              <div className={styles.line}>
                <span className={styles.variable}>profile_img</span>
              </div>
            </div>
            {/* Cell output - Display the image */}
            <div className={styles.cellOutput}>
              <figure className={styles.imageContainer}>
                <Image
                  src="/me.png"
                  alt="Profile image output from PIL"
                  width={200}
                  height={200}
                  className={styles.profileImage}
                />
              </figure>
            </div>
          </div>

          {/* Cell 3: Biography */}
          <div className={styles.notebookCell}>
            <div className={styles.cellHeader}>In [3]:</div>
            <div className={styles.cellContent}>
              <div className={styles.line}>
                <span className={styles.comment}># Biography</span>
              </div>
              <div className={styles.line}>
                <span className={styles.variable}>bio</span> = <span className={styles.string}>&quot;&quot;&quot;</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>I am a fourth-year Computer Science PhD Student at Northeastern University,</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>where I am advised by <a href="https://www.ccs.neu.edu/home/jullman/" target="_blank" rel="noopener noreferrer" className={styles.link}>Jonathan Ullman</a> and <a href="https://www.ccs.neu.edu/home/alina/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alina Oprea</a>.</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>&nbsp;</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>I completed my B.S. in Pure Mathematics at Florida State University and</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>conducted my undergraduate honors thesis under the guidance of</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}><a href="https://www.math.fsu.edu/~kercheva/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alec Kercheval</a> and <a href="https://www.sc.fsu.edu/people?uid=ndc08" target="_blank" rel="noopener noreferrer" className={styles.link}>Nathan Crock</a>.</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>&quot;&quot;&quot;</span>
              </div>
            </div>
          </div>

          {/* Cell 4: Experience */}
          <div className={styles.notebookCell}>
            <div className={styles.cellHeader}>In [4]:</div>
            <div className={styles.cellContent}>
              <div className={styles.line}>
                <span className={styles.variable}>experience</span> = <span className={styles.string}>&quot;&quot;&quot;</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>I have also held industry positions in both software engineering and</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>data science at <a href="https://www.intuit.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>Intuit</a> and <a href="https://labs.newsci.ai/" target="_blank" rel="noopener noreferrer" className={styles.link}>NewSci Labs</a>, respectively.</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>&nbsp;</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>During the summers of 2023 and 2024, I was an Applied Research Intern on</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}><a href="https://about.linkedin.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>LinkedIn&apos;s</a> Data Privacy team, where I worked on empirically measuring</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>privacy leakage in analytics and LLMs.</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>&nbsp;</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>This semester, I am a Student Researcher at <a href="https://about.google/" target="_blank" rel="noopener noreferrer" className={styles.link}>Google</a>,</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>exploring open problems in machine unlearning 🔒</span>
              </div>
              <div className={styles.line}>
                <span className={styles.string}>&quot;&quot;&quot;</span>
              </div>
            </div>
          </div>

          {/* Cell 5: Research Interests */}
          <div className={styles.notebookCell}>
            <div className={styles.cellHeader}>In [5]:</div>
            <div className={styles.cellContent}>
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
            </div>
          </div>

          {/* Cell 6: Display Information */}
          <div className={styles.notebookCell}>
            <div className={styles.cellHeader}>In [6]:</div>
            <div className={styles.cellContent}>
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
                <span className={styles.function}>print</span>(<span className={styles.variable}>location</span>)
              </div>
            </div>
            {/* Cell output - Display the print results */}
            <div className={styles.cellOutput}>
              <div className={styles.printOutput}>
                <div className={styles.outputLine}>John Abascal</div>
                <div className={styles.outputLine}>Computer Science PhD Student at Northeastern University</div>
                <div className={styles.outputLine}>177 Huntington, Boston, MA 02115</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPy;
