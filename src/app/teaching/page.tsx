import styles from '../page.module.css';

export const metadata = {
  title: 'Teaching | Dr. Hakan Yekta Yatbaz',
  description: 'Teaching experience and modules led by Dr. Hakan Yekta Yatbaz at Queen\'s University Belfast and University of Warwick.',
};

export default function Teaching() {
  return (
    <main className={styles.container} style={{ flexDirection: 'column', maxWidth: '800px' }}>
      <section style={{ marginBottom: '2rem' }}>
        <h1 className={styles.sectionTitle} style={{ borderBottom: 'none', marginBottom: '0.5rem', fontSize: '2.5rem' }}>Teaching & Mentorship</h1>
        <p className="animate-fade-up" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Associate Fellow of Advance HE (PR307078) with over 5 years of module design and delivery experience in higher education.
        </p>
      </section>

      <div className="animate-fade-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Current Roles */}
        <div>
          <h2 className={styles.sectionTitle}>Queen&apos;s University Belfast</h2>
          
          <div className={styles.pubItem} style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Module Lead: AI Ethics (MSc)</h3>
              <span style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Summer 2026</span>
            </div>
            <p style={{ marginTop: '0.5rem' }}>
              Designing and developing a comprehensive new Master&apos;s level module focusing on the ethical implications, trustworthiness, and safety protocols of modern Artificial Intelligence systems. The curriculum bridges technical run-time introspection with regulatory frameworks for AI safety.
            </p>
          </div>
        </div>

        {/* Past Roles */}
        <div>
          <h2 className={styles.sectionTitle}>University of Warwick</h2>
          
          <div className={styles.pubItem} style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Graduate Teaching Assistant</h3>
              <span style={{ color: 'var(--text-secondary)' }}>Oct 2020 &mdash; Jul 2025</span>
            </div>
            <p style={{ marginTop: '0.5rem' }}>
              Delivered laboratory sessions, seminars, and marked assignments across multiple undergraduate and postgraduate engineering modules within WMG. Mentored students on capstone projects and provided extensive technical guidance on programming (Python, C++) and machine learning fundamentals.
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}
