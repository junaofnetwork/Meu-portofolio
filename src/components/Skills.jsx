import { stack } from '../data.js'

export default function Skills() {
  return (
    <section id="stack" className="section border-y border-line bg-white/60">
      <div className="container-page">
        <h2 className="section-title">Stack</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Tecnologias que já usei de fato nos projetos listados neste site e nos repositórios públicos.
        </p>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {stack.map((group) => (
            <div key={group.group}>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
                {group.group}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-card px-3 py-1 text-sm text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
