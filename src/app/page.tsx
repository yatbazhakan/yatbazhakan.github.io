import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={`${styles.shape} ${styles.shape1}`} />
      <div className={`${styles.shape} ${styles.shape2}`} />

      <section className={styles.hero}>
        <h1 className="heading-xl animate-fade-up">
          Dr. Hakan Yekta Yatbaz
        </h1>
        <p className={`${styles.subtitle} animate-fade-up delay-100`}>
          Researcher, Developer, and Visionary. Bridging the gap between theory and applied science.
        </p>
        
        <div className={`${styles.ctaContainer} animate-fade-up delay-200`}>
          <a href="/about" className={styles.btnPrimary}>
            About Me
          </a>
          <a href="/publications" className={styles.btnSecondary}>
            Publications
          </a>
          <a href="/teaching" className={styles.btnSecondary}>
            Teaching
          </a>
        </div>
      </section>
    </main>
  );
}
