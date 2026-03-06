import fs from 'fs';
import path from 'path';
import styles from '../page.module.css';

interface Publication {
  id: string;
  type: string;
  title: string;
  author: string;
  journal?: string;
  booktitle?: string;
  year: string;
  pages?: string;
  organization?: string;
  publisher?: string;
  abbr?: string;
  selected?: boolean;
}

function parseBibtex(bibtex: string): Publication[] {
  const entries: Publication[] = [];
  const entryRegex = /@(\w+)\{([^,]+),\s*([\s\S]*?)\n\}/g;
  let match;

  while ((match = entryRegex.exec(bibtex)) !== null) {
    const type = match[1];
    const id = match[2];
    const fieldsStr = match[3];

    const pub: Record<string, string | boolean> = { id, type };
    
    // Simple field parser
    const fieldRegex = /(\w+)\s*=\s*[\{"]([\s\S]*?)[\}"]/g;
    let fieldMatch;
    while ((fieldMatch = fieldRegex.exec(fieldsStr)) !== null) {
      const key = fieldMatch[1].toLowerCase();
      pub[key] = fieldMatch[2].replace(/\s+/g, ' ').trim();
    }

    if (pub.selected === 'true') { pub.selected = true; }
    if (pub.selected === 'false') { pub.selected = false; }
    
    entries.push(pub as unknown as Publication);
  }

  // Sort by year descending
  return entries.sort((a, b) => parseInt(b.year || '0') - parseInt(a.year || '0'));
}

export default async function Publications() {
  const bibPath = path.join(process.cwd(), '_bibliography', 'papers.bib');
  const bibContent = fs.readFileSync(bibPath, 'utf8');
  const publications = parseBibtex(bibContent);

  return (
    <main className={styles.main}>
      <section className={`${styles.hero}`} style={{ padding: '2rem', textAlign: 'left', maxWidth: '1000px', width: '100%' }}>
        <h1 className="heading-xl animate-fade-up" style={{ marginBottom: '2rem' }}>Publications</h1>
        
        <div className="animate-fade-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {publications.map((pub, idx) => (
            <div key={pub.id} className="glass-panel" style={{ padding: '1.5rem', animationDelay: `${200 + idx * 50}ms` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h3 style={{ color: 'var(--accent-color)', marginBottom: '0.5rem', flex: 1 }}>{pub.title}</h3>
                {pub.abbr && (
                  <span style={{ background: 'var(--accent-glow)', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold' }}>
                    {pub.abbr}
                  </span>
                )}
              </div>
              <p style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>
                {pub.author?.replace(/ and /g, ', ').replace(/\{/g, '').replace(/\}/g, '')}
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <em>{pub.journal || pub.booktitle}</em>, {pub.year}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
