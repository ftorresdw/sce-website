import { useEffect } from 'react'
import { BambooHREmbed } from '../components/BambooHREmbed'
import { careersPage } from '../content/careers'

export function CareersPage() {
  useEffect(() => {
    document.title = careersPage.meta.title
  }, [])

  const { benefits, apply } = careersPage

  return (
    <main>
      <section className="border-b border-white/10 bg-[#0b0f1a] py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sce-orange">Careers</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
            {careersPage.headline}
          </h1>
        </div>
      </section>

      <section className="section section-light border-b border-black/5">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-black text-slate-950">{benefits.title}</h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600">
              {benefits.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {benefits.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-sce-orange" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-bold text-slate-950">{apply.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{apply.body}</p>
              <p className="mt-4 text-sm font-semibold text-slate-950">{apply.hrLabel}</p>
              <p className="mt-2 text-sm text-slate-600">
                <a href={`tel:${apply.phone.replace(/\s/g, '')}`} className="text-sce-orange hover:underline">
                  {apply.phone}
                </a>
                {' | '}
                <a href={`mailto:${apply.email}`} className="text-sce-orange hover:underline">
                  {apply.email}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <h2 className="mb-6 text-2xl font-black text-slate-950">Open Positions</h2>
            <BambooHREmbed />
          </div>
        </div>
      </section>
    </main>
  )
}
