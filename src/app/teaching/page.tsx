import styles from '../page.module.css';

export default function Teaching() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} glass-panel`} style={{ padding: '3rem', textAlign: 'left' }}>
        <h1 className="heading-xl animate-fade-up">Teaching</h1>
        <div className="animate-fade-up delay-100" style={{ marginTop: '2rem' }}>
          <p>
            Courses and materials I have taught.
          </p>
        </div>
      </section>
    </main>
  );
}
