export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer style={{
      padding: '2rem 5vw',
      marginTop: 'auto',
      borderTop: '1px solid var(--border-color)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      background: 'var(--bg-secondary)',
      color: 'var(--text-secondary)',
      fontSize: '0.9rem',
      fontFamily: 'var(--font-inter)'
    }}>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <a href="https://github.com/yatbazhakan" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://scholar.google.com/citations?user=n6YwGq4AAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a>
        <a href="https://www.linkedin.com/in/hakan-yekta-yatbaz-984403164/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>© {year} Dr. Hakan Yekta Yatbaz. All rights reserved.</p>
      <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>Redesigned with Next.js & Vanilla CSS.</p>
    </footer>
  );
}
