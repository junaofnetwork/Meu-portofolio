import { profile } from '../data.js'

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="container-page flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="flex flex-col gap-1 sm:items-end">
          {profile.email ? (
            <a href={`mailto:${profile.email}`} className="hover:text-ink">
              {profile.email}
            </a>
          ) : null}
          <span>{profile.location}</span>
        </p>
      </div>
    </footer>
  )
}
