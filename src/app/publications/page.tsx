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

  // Group by year
  const groupedPublications = publications.reduce((acc, pub) => {
    const year = pub.year || 'Unknown';
    if (!acc[year]) acc[year] = [];
    acc[year].push(pub);
    return acc;
  }, {} as Record<string, Publication[]>);

  const years = Object.keys(groupedPublications).sort((a, b) => {
    if (a === 'Unknown') return 1;
    if (b === 'Unknown') return -1;
    return parseInt(b) - parseInt(a);
  });

  return (
    <main className={styles.main}>
      <section className={`${styles.hero}`} style={{ padding: '2rem', textAlign: 'left', maxWidth: '1000px', width: '100%' }}>
        <h1 className="heading-xl animate-fade-up" style={{ marginBottom: '3rem' }}>Publications</h1>
        
        <div className="animate-fade-up delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {years.map((year, yearIdx) => (
            <div key={year} style={{ animationDelay: `${yearIdx * 100}ms` }}>
              <h2 style={{ fontSize: '2rem', color: 'var(--text-secondary)', borderBottom: '2px solid var(--border-color)', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                {year}
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {groupedPublications[year].map((pub) => (
                  <div key={pub.id} className="glass-panel" style={{ padding: '1.5rem', borderLeft: '4px solid var(--accent-color)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                      <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', flex: 1, fontSize: '1.2rem', lineHeight: 1.4 }}>{pub.title}</h3>
                      {pub.abbr && (
                        <span style={{ background: 'var(--accent-glow)', color: 'var(--accent-color)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                          {pub.abbr}
                        </span>
                      )}
                    </div>
                    <p style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.05rem', lineHeight: 1.6 }}>
                      {pub.author?.replace(/ and /g, ', ').replace(/\{/g, '').replace(/\}/g, '')}
                    </p>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                      <em>{pub.journal || pub.booktitle}</em>
                      {pub.pages && `, pp. ${pub.pages.replace(/--/g, '-')}`}
                    </p>
                    
                    {/* Placeholder for future PDF/Code links inside BibTeX mapping */}
                    <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                      <span style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 500, cursor: 'pointer' }}>
                        [Cite]
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
