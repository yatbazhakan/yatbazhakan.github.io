import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      {/* Sidebar Profile */}
      <aside className={styles.sidebar}>
        <div className={styles.profilePic}>
          <Image 
            src="/assets/img/prof_pic.jpg" 
            alt="Dr. Hakan Yekta Yatbaz" 
            width={300} 
            height={300} 
            priority
          />
        </div>
        <div className={styles.profileInfo}>
          <h1>Dr. Hakan Yekta Yatbaz</h1>
          <h2>Lecturer in Autonomous Systems</h2>
          <h2 style={{ fontSize: '1rem', marginTop: '-0.2rem' }}>Queen&apos;s University Belfast</h2>
        </div>
        
        <div className={styles.contactLinks}>
          <a href="mailto:yatbazhakan@gmail.com">
            <span role="img" aria-label="email" style={{ marginRight: '8px' }}>📧</span> yatbazhakan@gmail.com
          </a>
          <a href="https://scholar.google.com/citations?user=5Q596f4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="scholar" style={{ marginRight: '8px' }}>🎓</span> Google Scholar
          </a>
          <a href="https://www.linkedin.com/in/hakanyektayatbaz" target="_blank" rel="noopener noreferrer">
            <span role="img" aria-label="linkedin" style={{ marginRight: '8px' }}>💼</span> LinkedIn
          </a>
        </div>
      </aside>

      {/* Main Content Feed */}
      <div className={styles.mainContent}>
        
        <section id="about">
          <h2 className={styles.sectionTitle}>About Me</h2>
          <div className={styles.textContent}>
            <p>
              I am a Lecturer (Assistant Professor) in AI and autonomous systems at the <strong>School of Electronics, Electrical Engineering and Computer Science (EEECS), Queen&apos;s University Belfast</strong>. My research centers on building safe, reliable, and secure artificial intelligence for intelligent transport systems, with a particular focus on two core pillars:
            </p>
            <ul>
              <li><strong>Run-time Monitoring & Introspection:</strong> Developing mechanisms to assess and ensure the reliability of perception modules (e.g., LiDAR-based 3D object detection) under uncertainties and adverse conditions.</li>
              <li><strong>Safe & Resilient Cooperative Autonomy:</strong> Building verifiable and interoperable frameworks for Connected and Automated Vehicles (CAVs) in real-world environments.</li>
            </ul>
            <p>
              Prior to joining QUB, I was a Postdoctoral Research Fellow at <strong>WMG, University of Warwick</strong>, where I worked on EU-funded projects (such as <em>EVENTS</em> and <em>Hi-Drive</em>) to integrate self-assessment and perception frameworks into real-world automated driving pipelines. I completed my Ph.D. in Engineering from the University of Warwick (supervised by Dr. Roger Woodman and Prof. Mehrdad Dianati).
            </p>
            <p>
              I hold a Master&apos;s and Bachelor&apos;s degree in Computer Engineering from Middle East Technical University (METU NCC).
            </p>
            <p style={{ marginTop: '1rem', fontStyle: 'italic', background: 'var(--bg-secondary)', padding: '1rem', borderRadius: 'var(--radius-sm)' }}>
              <strong>Prospective Students:</strong> I am actively looking for self-motivated PhD students and researchers interested in safe and reliable AI for autonomous systems. Please feel free to drop me an email!
            </p>
          </div>
        </section>

        <section id="news">
          <h2 className={styles.sectionTitle}>Recent News</h2>
          <ul className={styles.newsList}>
            <li className={styles.newsItem}>
              <span className={styles.newsDate}>Sept 2025</span>
              <span>Started as a Lecturer in Autonomous Systems at Queen&apos;s University Belfast!</span>
            </li>
            <li className={styles.newsItem}>
              <span className={styles.newsDate}>Feb 2025</span>
              <span>Started as a Postdoctoral Research Fellow at WMG, University of Warwick.</span>
            </li>
            <li className={styles.newsItem}>
              <span className={styles.newsDate}>Oct 2024</span>
              <span>Submitted PhD Thesis: <em>Run-time monitoring of perception module in automated driving systems</em>.</span>
            </li>
          </ul>
        </section>

        <section id="research">
          <h2 className={styles.sectionTitle}>Selected Publications</h2>
          <div className={styles.publicationList}>
            <div className={styles.pubItem}>
              <h3>Multi-Layer Self-Assessment with Filtering for 3D Object Detection in Autonomous Vehicles</h3>
              <p>H. Y. Yatbaz, K. Koufos, M. Dianati, R. Woodman</p>
              <p><em>ACM Transactions on Intelligent Systems and Technology (TIST)</em>, 2026</p>
              <div className={styles.pubLinks}>
                <a href="https://dl.acm.org/doi/10.1145/3776551" target="_blank" rel="noopener noreferrer">[Paper]</a>
              </div>
            </div>

            <div className={styles.pubItem}>
              <h3>Integrity Monitoring of 3D Object Detection in Automated Driving Systems using Raw Activation Patterns and Spatial Filtering</h3>
              <p>H. Y. Yatbaz, M. Dianati, K. Koufos, R. Woodman</p>
              <p><em>IEEE International Conference on Intelligent Transportation Systems (ITSC)</em>, 2024</p>
              <div className={styles.pubLinks}>
                <a href="https://doi.org/10.1109/ITSC58415.2024.10920125" target="_blank" rel="noopener noreferrer">[Paper]</a>
              </div>
            </div>

            <div className={styles.pubItem}>
              <h3>Run-Time Introspection of 2D Object Detection in Automated Driving Systems Using Learning Representations</h3>
              <p>H. Y. Yatbaz, M. Dianati, K. Koufos, R. Woodman</p>
              <p><em>IEEE Transactions on Intelligent Vehicles</em>, 2024</p>
              <div className={styles.pubLinks}>
                <a href="https://doi.org/10.1109/TIV.2024.3385531" target="_blank" rel="noopener noreferrer">[Paper]</a>
              </div>
            </div>
            
            <div style={{ marginTop: '1rem' }}>
              <Link href="/publications" className={styles.moreLink}>
                View Full Publication List &rarr;
              </Link>
            </div>
          </div>
        </section>

        <section id="services">
          <h2 className={styles.sectionTitle}>Academic Services</h2>
          <div className={styles.textContent}>
            <p><strong>Journal Reviewer:</strong> IEEE Transactions on Fuzzy Systems, IEEE Sensors Journal, Springer Scientific Reports, Springer Signal, Image and Video Processing.</p>
            <p><strong>Memberships:</strong> IEEE</p>
          </div>
        </section>

      </div>
    </main>
  );
}
