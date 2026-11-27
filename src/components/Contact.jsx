import { useState } from 'react'
import { profile } from '../data.js'

const initial = { nome: '', email: '', mensagem: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setError('')

    try {
      const body = new FormData()
      body.append('nome', form.nome)
      body.append('email', form.email)
      body.append('mensagem', form.mensagem)

      const response = await fetch(profile.formspree, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body,
      })

      if (!response.ok) {
        throw new Error('Falha no envio')
      }

      setStatus('sent')
      setForm(initial)
    } catch {
      setStatus('error')
      setError('Não foi possível enviar agora. Tente de novo em instantes ou use o LinkedIn.')
    }
  }

  return (
    <section id="contato" className="section border-t border-line bg-white/60">
      <div className="container-page grid gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="section-title">Vamos conversar</h2>
          <p className="mt-3 max-w-md text-muted">
            Se você tem uma vaga de estágio ou quer conhecer melhor algum projeto, me escreva. Respondo por este formulário ou pelas redes ao lado.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li>
              <a
                href={profile.links.github}
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={profile.links.instagram}
                className="text-accent underline-offset-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            {profile.email ? (
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {profile.email}
                </a>
              </li>
            ) : null}
            {profile.whatsapp ? (
              <li>
                <a
                  href={profile.whatsapp}
                  className="text-accent underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
            ) : null}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-xl border border-line bg-card p-5 shadow-sm sm:p-6"
          noValidate
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="nome" className="block text-sm font-medium text-ink">
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                value={form.nome}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-line bg-paper px-3 py-2 text-ink"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={onChange}
                className="mt-1 w-full rounded-md border border-line bg-paper px-3 py-2 text-ink"
              />
            </div>
            <div>
              <label htmlFor="mensagem" className="block text-sm font-medium text-ink">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                required
                value={form.mensagem}
                onChange={onChange}
                className="mt-1 w-full resize-y rounded-md border border-line bg-paper px-3 py-2 text-ink"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn-primary mt-5 w-full sm:w-auto"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
          </button>

          <div className="mt-3 min-h-[1.5rem]" aria-live="polite">
            {status === 'sent' ? (
              <p className="text-sm text-accent">Mensagem enviada. Obrigado pelo contato.</p>
            ) : null}
            {status === 'error' ? <p className="text-sm text-red-700">{error}</p> : null}
          </div>
        </form>
      </div>
    </section>
  )
}
