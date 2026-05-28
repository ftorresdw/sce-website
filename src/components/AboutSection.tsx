import { Link } from 'react-router-dom'
import { site } from '../content/site'

type AboutSectionProps = {
  showLearnMore?: boolean
  showWorkWithUs?: boolean
  className?: string
}

const [transformers, classroom, construction, simpsons] = site.about.gallery

export function AboutSection({ showLearnMore = false, showWorkWithUs = true, className = '' }: AboutSectionProps) {
  return (
    <section id="about" className={`section section-light ${className}`}>
      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">About Us</p>
          <h2 className="mt-3 text-5xl font-black leading-[0.95] tracking-tight text-slate-950">
            Central Florida&apos;s <span className="text-sce-orange">Premier</span> Electrical Contractor
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700">
            {site.about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {(showWorkWithUs || showLearnMore) && (
            <div className="mt-7 flex flex-wrap gap-3">
              {showWorkWithUs && (
                <a className="btn-primary rounded-xl px-5 py-2.5" href="/#contact">
                  Work With Us
                </a>
              )}
              {showLearnMore && (
                <Link
                  to="/about"
                  className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Learn More
                </Link>
              )}
            </div>
          )}

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {site.about.stats.map((stat) => (
              <div key={stat.value} className="flex items-start gap-3">
                <div className="mt-0.5 grid size-10 place-items-center rounded-xl bg-sce-orange-light text-sce-orange">
                  <div className="size-2.5 rounded-full bg-sce-orange/60" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-950">{stat.value}</div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <img
                src={transformers.src}
                alt={transformers.alt}
                className="aspect-[3/4] size-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <img
                src={classroom.src}
                alt={classroom.alt}
                className="aspect-[4/3] size-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <img
                src={construction.src}
                alt={construction.alt}
                className="aspect-[4/3] size-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="overflow-hidden rounded-3xl bg-slate-100">
              <img
                src={simpsons.src}
                alt={simpsons.alt}
                className="aspect-[3/4] size-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
