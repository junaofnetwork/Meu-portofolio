import { profile } from '../data.js'

export default function Hero() {
  return (
    <section className="border-b border-line bg-paper">
      <div className="container-page grid gap-10 py-14 sm:py-20 md:grid-cols-[auto_1fr] md:items-center">
        <img
          src={profile.photo}
          alt={profile.photoAlt}
          width="160"
          height="160"
          className="h-28 w-28 rounded-full object-cover ring-2 ring-accent sm:h-36 sm:w-36 md:h-40 md:w-40"
        />
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-accent">
            {profile.goal}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg text-muted">
            {profile.title} · {profile.location}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/90">
            {profile.school.role} no {profile.school.name} e {profile.course.role.toLowerCase()} na{' '}
            {profile.course.name}. Aberto a oportunidades de estágio.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projetos" className="btn-primary">
              Ver projetos
            </a>
            <a href="#contato" className="btn-secondary">
              Falar comigo
            </a>
            {profile.cvUrl ? (
              <a href={profile.cvUrl} className="btn-secondary" download>
                Baixar currículo
              </a>
            ) : (
              <span
                className="btn-secondary cursor-default opacity-70"
                title="Adicione o PDF em public/curriculo.pdf"
              >
                Currículo em PDF — em breve
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
