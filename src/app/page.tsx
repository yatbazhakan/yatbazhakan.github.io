import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className="animate-fade-up">
          <h1 className="heading-xl">
            Dr. Hakan Yekta Yatbaz
          </h1>
          <p className={styles.subtitle}>
            Lecturer (Assistant Professor) in Autonomous Systems at Queen&apos;s University Belfast
          </p>
          <div style={{ height: '4px', width: '60px', background: 'var(--accent-color)', margin: '1.5rem 0', borderRadius: '2px' }}></div>
        </div>
        
        <p className={`${styles.description} animate-fade-up delay-100`}>
          My research focuses on safe and resilient artificial intelligence for intelligent transport, with an emphasis on run-time monitoring, introspection, and uncertainty quantification in LiDAR-based 3D object detection.
        </p>
        
        <div className={`${styles.ctaContainer} animate-fade-up delay-200`}>
          <a href="/about" className={styles.btnPrimary}>
            Read Full Biography
          </a>
          <a href="/publications" className={styles.btnSecondary}>
            View Publications
          </a>
        </div>
      </section>
    </main>
  );
}
