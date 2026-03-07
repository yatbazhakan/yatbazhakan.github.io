import styles from '../page.module.css';

export const metadata = {
  title: 'Supervision | Dr. Hakan Yekta Yatbaz',
  description: 'Student supervision and mentorship by Dr. Hakan Yekta Yatbaz.',
};

export default function Supervision() {
  return (
    <main className={styles.container} style={{ flexDirection: 'column', maxWidth: '800px' }}>
      <section style={{ marginBottom: '2rem' }}>
        <h1 className={styles.sectionTitle} style={{ borderBottom: 'none', marginBottom: '0.5rem', fontSize: '2.5rem' }}>Student Supervision</h1>
        <p className="animate-fade-up" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Mentoring and supporting students in their academic and research journeys.
        </p>
      </section>

      <div className="animate-fade-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Past Roles */}
        <div>
          <h2 className={styles.sectionTitle}>Queen&apos;s University Belfast</h2>
          
          <div className={styles.pubItem} style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>BSc Computer Science (Graduation Projects)</h3>
              <span style={{ color: 'var(--text-secondary)' }}>Current</span>
            </div>
            <p style={{ marginTop: '0.5rem' }}>
              Currently in a supporting role (unofficial supervisor) for 3 BSc Computer Science students covering their Graduation Projects.
            </p>
            
            <ul style={{ marginTop: '1rem', listStyleType: 'disc', paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <strong>Joel Anderson:</strong> <em>Development of an AI driven web application assisting students with exam preparation</em>
              </li>
              <li>
                <strong>Yu-Zhi Wong:</strong> <em>Feature Lens: A Tool for Visualising and Comparing Neural Representations in Object Detection</em>
              </li>
              <li>
                <strong>Jamal Salimov:</strong> <em>Vision Introspector: A GUI Tool for Analysing Object Detection in Driving Images</em>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </main>
  );
}
