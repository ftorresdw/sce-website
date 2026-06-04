import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { site } from '../content/site'

function NavLink({
  to,
  label,
  isActive,
  onClick,
  className = '',
}: {
  to: string
  label: string
  isActive?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-sm hover:text-white ${isActive ? 'text-sce-orange' : 'text-slate-200'} ${className}`}
    >
      {label}
    </Link>
  )
}

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const isContactPage = location.pathname === '/contact'
  const { safety } = site.footer
  const { hiringBanner } = site.nav

  const navLinks = [
    { label: 'Service', href: '/#services' },
    ...site.nav.main,
  ]

  function linkTo(href: string) {
    return href.startsWith('#') ? `/${href}` : href
  }

  function isLinkActive(href: string) {
    if (href.startsWith('/')) {
      if (href === '/newsroom') return location.pathname.startsWith('/newsroom')
      return location.pathname === href
    }
    return false
  }

  return (
    <div className="min-h-dvh">
      <div className="sticky top-0 z-50">
        <Link
          to={hiringBanner.href}
          className="flex items-center justify-center gap-2 bg-sce-orange px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-sce-orange-hover"
        >
          <span>{hiringBanner.label}</span>
          <span aria-hidden="true">→</span>
        </Link>

        <header className="border-b border-white/10 bg-black/90 backdrop-blur">
          <div className="container-page flex h-16 items-center justify-between sm:h-20">
            <Link to="/" className="shrink-0" onClick={() => setMobileOpen(false)}>
              <img src={site.brand.logos.white} alt={site.brand.name} className="h-12 w-auto sm:h-16" />
            </Link>

            <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
              <NavLink to="/#services" label="Service" />
              {site.nav.main.map((item) => (
                <NavLink
                  key={item.href}
                  to={linkTo(item.href)}
                  label={item.label}
                  isActive={isLinkActive(item.href)}
                />
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {!isContactPage ? (
                <Link to="/contact" className="btn-primary hidden md:inline-flex">
                  {site.contact.cta.label}
                </Link>
              ) : null}
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? (
                  <span className="text-xl leading-none">×</span>
                ) : (
                  <span className="flex flex-col gap-1.5">
                    <span className="block h-0.5 w-5 bg-white" />
                    <span className="block h-0.5 w-5 bg-white" />
                    <span className="block h-0.5 w-5 bg-white" />
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 md:hidden" id="mobile-nav">
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <nav
            className="absolute right-0 top-0 flex h-full w-[min(100%,320px)] flex-col bg-[#141820] px-6 pb-8 pt-28 shadow-2xl"
            aria-label="Mobile navigation"
          >
            <div className="space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={linkTo(item.href)}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 space-y-3 border-t border-white/10 pt-6">
              <Link
                to={hiringBanner.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg bg-sce-orange px-4 py-3 text-center text-sm font-semibold text-white"
              >
                {hiringBanner.label}
              </Link>
              {!isContactPage ? (
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full justify-center rounded-lg py-3"
                >
                  {site.contact.cta.label}
                </Link>
              ) : null}
            </div>
          </nav>
        </div>
      ) : null}

      <Outlet />

      <footer className="border-t border-white/10 bg-[#0b0f1a]">
        <div className="border-b border-white/10 bg-[#141820]">
          <div className="container-page py-3 sm:py-3.5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="min-w-0 border-sce-orange sm:border-l-2 sm:pl-3">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-sce-orange">
                    {safety.title}
                  </span>
                  <span className="text-xs font-medium text-slate-300">{safety.headline}</span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">{safety.items.join(' · ')}</p>
              </div>
              <div className="flex shrink-0 items-center gap-4 sm:gap-5">
                {safety.highlights.map((h) => (
                  <div key={h.label} className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-sce-orange">{h.value}</span>
                    <span className="text-[10px] uppercase tracking-wide text-slate-500">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container-page py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <img src={site.brand.logos.full} alt={site.brand.name} className="h-24 w-auto sm:h-28" />
              <p className="mt-4 text-sm text-slate-400">{site.footer.tagline}</p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
              <a href="/#portfolio" className="hover:text-white">
                Portfolio
              </a>
              <Link to="/newsroom" className="hover:text-white">
                Newsroom
              </Link>
              <a href="/#services" className="hover:text-white">
                Services
              </a>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
              <Link to="/careers" className="hover:text-white">
                Careers
              </Link>
            </nav>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
