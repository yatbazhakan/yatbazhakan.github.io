import styles from '../page.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} glass-panel`} style={{ padding: '3rem', textAlign: 'left', maxWidth: '800px' }}>
        <h1 className="heading-xl animate-fade-up" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Dr. Hakan Yekta Yatbaz</h1>
        <p className="animate-fade-up delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Lecturer (Assistant Professor) in Autonomous Systems
        </p>

        <div className="animate-fade-up delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <p>
            I am a Lecturer (Assistant Professor) in Autonomous Systems at the School of Electronics, Electrical Engineering and Computer Science (EEECS), Queen’s University Belfast. My research focuses on safe and resilient artificial intelligence for intelligent transport, with an emphasis on run-time monitoring, introspection, and uncertainty quantification in LiDAR-based 3D object detection. I am particularly interested in developing mechanisms that ensure reliability of perception modules under adverse or uncertain conditions.
          </p>
          <p>
            Previously, I was a Postdoctoral Research Fellow at WMG, University of Warwick, where I worked on several EU-funded projects to design and integrate perception and self-assessment frameworks into real-world automated driving pipelines. I completed my PhD in Engineering at Warwick with a thesis on run-time monitoring of perception in automated driving systems.
          </p>
          <p>
            I hold a master’s and bachelor’s degree in Computer Engineering from Middle East Technical University (Northern Cyprus Campus). During this time, I also contributed to international projects on e-health, IoT, and wireless sensor networks, with outcomes published in IEEE and ACM journals.
          </p>
          <p>
            <strong>I am open to supervising motivated PhD students interested in safe and reliable AI for autonomous systems. Please feel free to contact me via h.yatbaz@qub.ac.uk.</strong>
          </p>
        </div>

        <div className="animate-fade-up delay-300" style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
          <h3>Contact Info</h3>
          <p>Room 01/0006<br/>21 Stranmillis Road<br/>Belfast, Northern Ireland BT9 5AF</p>
        </div>
      </section>
    </main>
  );
}
