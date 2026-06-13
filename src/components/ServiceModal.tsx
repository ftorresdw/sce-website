import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { Service } from '../content'

type ServiceModalProps = {
  service: Service
  onClose: () => void
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
      <button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        aria-label="Close dialog"
        onClick={onClose}
      />
      <div className="relative max-h-[min(90vh,720px)] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-[#141820] shadow-2xl">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-white/10 bg-[#141820] px-6 py-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sce-orange">Service</p>
            <h2 id="service-modal-title" className="mt-1 text-2xl font-black text-white sm:text-3xl">
              {service.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-white/15 text-slate-300 transition hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <span className="text-xl leading-none">×</span>
          </button>
        </div>

        <div className="px-6 py-6">
          <p className="text-base leading-relaxed text-slate-200">{service.description}</p>
          {service.details.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-sm leading-relaxed text-slate-400">
              {paragraph}
            </p>
          ))}
          <ul className="mt-6 space-y-2">
            {service.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3 text-sm text-slate-200">
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-sce-orange" aria-hidden="true" />
                {bullet}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="btn-primary rounded-xl px-5 py-2.5" onClick={onClose}>
              Discuss Your Project
            </Link>
            <button type="button" className="btn-ghost rounded-xl px-5 py-2.5" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
