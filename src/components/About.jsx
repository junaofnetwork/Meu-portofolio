import { aboutParagraphs, profile } from '../data.js'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container-page">
        <h2 className="section-title">Sobre</h2>
        <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-ink/90">
          {aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {profile.education.map((item) => (
            <li key={item.name} className="rounded-lg border border-line bg-card p-4">
              <p className="text-sm text-muted">{item.label}</p>
              <p className="mt-1 font-medium text-ink">
                {item.role}
                {item.status ? ` — ${item.status}` : ''}
                {' na '}
                <a
                  href={item.url}
                  className="text-accent underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </a>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
