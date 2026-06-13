import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { site, type Service } from '../content'
import { ServiceModal } from './ServiceModal'

function serviceFromHash(hash: string): Service | null {
  const id = hash.replace(/^#service-/, '')
  if (!id) return null
  return site.services.items.find((s) => s.id === id) ?? null
}

export function ServicesSection() {
  const location = useLocation()
  const [activeService, setActiveService] = useState<Service | null>(null)

  useEffect(() => {
    const service = serviceFromHash(location.hash)
    setActiveService(service)
  }, [location.hash])

  function openService(service: Service) {
    setActiveService(service)
    window.history.replaceState(null, '', `#service-${service.id}`)
  }

  function closeModal() {
    setActiveService(null)
    if (location.hash.startsWith('#service-')) {
      window.history.replaceState(null, '', `${location.pathname}#services`)
    }
  }

  return (
    <section id="services" className="section border-t border-white/10">
      <div className="container-page">
        <p className="text-sm font-semibold text-sce-orange">Our Services</p>
        <h2 className="h2 mt-3">{site.services.title}</h2>
        <p className="muted mt-4 max-w-2xl text-base leading-relaxed">{site.services.intro}</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.services.items.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={() => openService(service)}
              className="group flex min-h-[140px] items-center justify-center rounded-2xl border border-white/10 bg-[#1a1d24] px-6 py-10 text-center transition hover:border-sce-orange/40 hover:bg-[#22262f] focus:outline-none focus-visible:ring-2 focus-visible:ring-sce-orange focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f1a]"
            >
              <span className="text-xl font-light tracking-wide text-white transition group-hover:text-sce-orange sm:text-2xl">
                {service.title}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">Select a service to learn more</p>
      </div>

      {activeService ? <ServiceModal service={activeService} onClose={closeModal} /> : null}
    </section>
  )
}
