import styles from '../page.module.css';

export default function About() {
  return (
    <main className={styles.main}>
      <section className={`${styles.hero} glass-panel`} style={{ padding: '3rem', textAlign: 'left', maxWidth: '800px', width: '100%' }}>
        <h1 className="heading-xl animate-fade-up" style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>Dr. Hakan Yekta Yatbaz</h1>
        <p className="animate-fade-up delay-100" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Lecturer (Assistant Professor) in Autonomous Systems
        </p>

        <div className="animate-fade-up delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Research Snapshot & Interests */}
          <div>
            <h2 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem' }}>Biography & Research Profile</h2>
            <p>
              I am a Lecturer in AI and autonomous systems at Queen&apos;s University Belfast, focusing on safe perception and run-time monitoring of neural network-based object detection. I hold a PhD in Engineering from the University of Warwick and have contributed to extensive Horizon Europe and international collaborative projects on intelligent systems and AI safety. My experience encompasses presenting research and writing deliverables within multi-partner consortia, as well as over 5 years of undergraduate and postgraduate teaching (Associate Fellow of AdvanceHE).
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem', marginTop: '1rem' }}>Experience</h2>
            
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong>Lecturer in Autonomous Systems</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Sept 2025 -- Present</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>EEECS, Queen&apos;s University Belfast</div>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li>Researcher in the Connected and Autonomous Systems group, focusing on run-time AI/perception safety and monitoring.</li>
                <li>Designing and developing a new MSc module: <em>AI Ethics</em> (Summer delivery).</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong>Postdoctoral Research Fellow</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Feb 2025 -- Sept 2025</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>WMG, University of Warwick</div>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li>Led the development of self-assessment functionality for 2D/3D object detection models operating under adverse conditions (EU project &quot;EVENTS&quot;).</li>
                <li>Conducted research on run-time introspection mechanisms leveraging early-layer neural activations in LiDAR-based 3D object detectors.</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong>Research Assistant (Part-time)</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Dec 2020 -- Feb 2025</span>
              </div>
              <div style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>WMG, University of Warwick</div>
              <ul style={{ paddingLeft: '1.5rem', fontSize: '0.95rem' }}>
                <li>Simulated autonomous tram for Coventry VLR using CARLA, LiDAR maps, and YOLOv5.</li>
                <li>Developed 5G-based remote operation with UI for monitoring and control.</li>
                <li>Built early/late fusion mechanisms on point clouds and 3D detection via CenterPoint for Hi-Drive EU project.</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem', marginTop: '1rem' }}>Education</h2>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong>PhD in Engineering</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Oct 2020 -- Jul 2025</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>University of Warwick (WMG), Coventry, UK</div>
              <div style={{ fontSize: '0.95rem', marginTop: '0.25rem' }}>
                <strong>Thesis:</strong> Run-time monitoring of perception module in automated driving systems.<br/>
                <em>Fully funded by WMG Studentship.</em>
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong>MSc in Computer Engineering</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Sep 2018 -- Aug 2020</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>Middle East Technical University (METU NCC), Turkey</div>
              <div style={{ fontSize: '0.95rem', marginTop: '0.25rem' }}>
                <strong>Thesis:</strong> Lightweight input representation and convolutional neural network architecture for hierarchical anomaly detection on e-health applications. (GPA: 3.88/4.0)
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                <strong>BSc in Computer Engineering</strong>
                <span style={{ color: 'var(--text-secondary)' }}>Sep 2013 -- Jun 2018</span>
              </div>
              <div style={{ color: 'var(--text-secondary)' }}>Middle East Technical University (METU NCC), Turkey</div>
              <div style={{ fontSize: '0.95rem', marginTop: '0.25rem' }}>
                <strong>Project:</strong> An android application using P2P communication for emergency localisation. (GPA: 3.62/4.0, Ranked 2nd/39)
              </div>
            </div>
          </div>

          {/* Selected Grants & Projects */}
          <div>
            <h2 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem', marginTop: '1rem' }}>Selected Grants & Projects</h2>
            <ul style={{ paddingLeft: '1.5rem', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <li><strong>TAITAN:</strong> Trustworthy AI for ResilienT and Interoperable Cooperative AutoNomy for CCAM Applications (Horizon Europe, £5M budget - In waiting list). Contributed to proposal writing.</li>
              <li><strong>EVENTS:</strong> Reliable In-Vehicle Perception & Decision-Making. Horizon Europe project building resilient systems for CAVs.</li>
              <li><strong>Hi-Drive:</strong> Advancing SAE Level 4 automated driving systems across diverse driving scenarios (Horizon 2020).</li>
              <li><strong>5G-CAT:</strong> 5G Connected Autonomous Tram. Remote fleet monitoring and drive-by-wire control over a 5G network.</li>
            </ul>
          </div>

          {/* Skills & Activities */}
          <div>
            <h2 style={{ borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1rem', marginTop: '1rem' }}>Skills & Qualifications</h2>
            <div style={{ fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <p><strong>Programming & Tools:</strong> Python, C++, C, SQL, PyTorch, OpenMMLab, ultralytics, ROS, ROS2, Autoware, TensorRT, CARLA, Qt.</p>
              <p><strong>Specialization:</strong> Object Detection, Runtime Monitoring, Sensor Fusion, Safe AI.</p>
              <p><strong>Academic Activities:</strong> Reviewer for IEEE Transactions on Fuzzy Systems, IEEE Sensors Journal, Springer Scientific Reports.</p>
              <p><strong>Teaching:</strong> Associate Fellow of Advance HE (PR307078). 5+ years experience as Graduate Teaching Assistant and Module Contributor.</p>
            </div>
          </div>
        </div>

        <div className="animate-fade-up delay-300" style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-md)' }}>
          <h3>Contact Info</h3>
          <p style={{ marginBottom: '1rem' }}>
            <a href="mailto:yatbazhakan@gmail.com" style={{ color: 'var(--accent-color)', fontWeight: 500 }}>yatbazhakan@gmail.com</a>
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://www.linkedin.com/in/hakanyektayatbaz" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>LinkedIn</a>
            <a href="https://scholar.google.com/citations?user=5Q596f4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Google Scholar</a>
          </div>
        </div>
      </section>
    </main>
  );
}
