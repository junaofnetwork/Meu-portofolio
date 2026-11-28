import { projects } from '../data.js'

function ProjectLinks({ project }) {
  const hasLinks = project.demo || project.repo
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      {project.demo ? (
        <a
          href={project.demo}
          className="btn-primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver demo
        </a>
      ) : null}
      {project.repo ? (
        <a
          href={project.repo}
          className="btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver código
        </a>
      ) : null}
      {project.privateRepo && !hasLinks ? (
        <p className="text-sm text-muted">
          Repositório privado — posso demonstrar no processo seletivo.
        </p>
      ) : null}
      {project.privateRepo && project.demo && !project.repo ? (
        <p className="text-sm text-muted">Repositório privado.</p>
      ) : null}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projetos" className="section">
      <div className="container-page">
        <h2 className="section-title">Projetos</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Casos com o contexto, o que eu construí e a stack. Projetos privados não têm link do repositório.
        </p>

        <ul className="mt-10 space-y-8">
          {projects.map((project) => (
            <li
              key={project.id}
              className="rounded-xl border border-line bg-card p-5 shadow-sm sm:p-7"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
                {project.privateRepo ? (
                  <span className="rounded-full border border-line bg-paper px-2.5 py-0.5 text-xs font-medium text-muted">
                    Repositório privado
                  </span>
                ) : null}
              </div>

              <div className="mt-5 grid gap-6 lg:grid-cols-[1fr_16rem]">
                <div className="space-y-4 text-sm leading-relaxed sm:text-base">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Contexto
                    </h4>
                    <p className="mt-1 text-ink/90">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted">
                      O que eu fiz
                    </h4>
                    <p className="mt-1 text-ink/90">{project.built}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-muted">
                      Stack
                    </h4>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full bg-paper px-2.5 py-1 text-xs font-medium text-ink sm:text-sm"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <ProjectLinks project={project} />
                </div>

                {project.image ? (
                  <img
                    src={project.image}
                    alt={`Captura de tela do projeto ${project.title}`}
                    className="h-40 w-full rounded-lg object-cover lg:h-full"
                    loading="lazy"
                  />
                ) : (
                  <div
                    className="flex min-h-[9rem] items-center justify-center rounded-lg border border-dashed border-line bg-paper px-4 text-center text-sm text-muted"
                    aria-hidden="true"
                  >
                    Print em breve
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
