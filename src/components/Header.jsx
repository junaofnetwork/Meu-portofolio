import { useEffect, useRef, useState } from 'react'
import { profile } from '../data.js'

const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#stack', label: 'Stack' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const pendingHref = useRef(null)

  const goTo = (event) => {
    const href = event.currentTarget.getAttribute('href')
    if (!href || !href.startsWith('#')) {
      setOpen(false)
      return
    }
    event.preventDefault()
    pendingHref.current = href
    setOpen(false)
  }

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    if (!open && pendingHref.current) {
      const href = pendingHref.current
      pendingHref.current = null
      const target = document.querySelector(href)
      if (target) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
        if (window.location.hash !== href) {
          window.history.pushState(null, '', href)
        }
      }
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a href="#conteudo" className="text-sm font-semibold tracking-tight text-ink">
          {profile.shortName}
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          {profile.cvUrl ? (
            <a href={profile.cvUrl} className="btn-secondary" download>
              Currículo
            </a>
          ) : null}
          <a href="#contato" className="btn-primary">
            Falar comigo
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-line bg-card px-3 py-2 text-sm font-medium text-ink md:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          className="border-t border-line bg-paper px-4 py-4 md:hidden"
          aria-label="Seções (mobile)"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-md px-3 py-3 text-base text-ink hover:bg-white"
                  onClick={goTo}
                >
                  {item.label}
                </a>
              </li>
            ))}
            {profile.cvUrl ? (
              <li>
                <a
                  href={profile.cvUrl}
                  className="block rounded-md px-3 py-3 text-base text-ink hover:bg-white"
                  download
                  onClick={goTo}
                >
                  Currículo (PDF)
                </a>
              </li>
            ) : null}
            <li className="pt-2">
              <a href="#contato" className="btn-primary w-full" onClick={goTo}>
                Falar comigo
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  )
}
