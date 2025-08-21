import Head from 'next/head'
import { papers } from '../data/papers'

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="badge">
      {children}
    </span>
  )
}

export default function PapersPage() {
  return (
    <>
      <Head>
        <title>Papers</title>
        <meta name="description" content="Research papers and publications" />
      </Head>
      <main style={{ padding: '1.25rem 1.5rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Papers</h1>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {papers.map(p => (
            <li key={p.id} style={{ marginBottom: '1.25rem' }}>
              <div style={{ fontSize: '1.05rem', fontWeight: 600 }}>
                {p.title} <span style={{ fontWeight: 400, opacity: 0.7 }}>({p.year})</span>
              </div>
              <div style={{ fontSize: '.9rem', opacity: 0.8, margin: '.15rem 0 .4rem' }}>
                {p.venue}
              </div>
              <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                {p.links.map(l => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="badge"
                    aria-label={`${l.label} link for ${p.title}`}
                  >
                    {l.label}
                  </a>
                ))}
                {p.tags?.map(t => (
                  <span key={t} className="badge" style={{ background: 'var(--badge-accent-bg)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
