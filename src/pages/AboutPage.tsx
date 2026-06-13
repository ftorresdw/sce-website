import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { AboutSection } from '../components/AboutSection'
import { AwardsShowcase } from '../components/AwardsShowcase'
import { ValuesPillars } from '../components/ValuesPillars'
import { aboutPage } from '../content'

export function AboutPage() {
  useEffect(() => {
    document.title = aboutPage.meta.title
  }, [])

  return (
    <main>
      <section className="border-b border-white/10 bg-[#0b0f1a] py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sce-orange">About Us</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
            {aboutPage.intro.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{aboutPage.intro.mission}</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-sce-orange to-sce-orange-hover py-6">
        <div className="container-page">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutPage.recognitionBar.map((item) => (
              <div key={item.label} className="text-center text-white">
                <div className="text-lg font-black sm:text-xl">{item.label}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90">
                  {item.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSection
        eyebrow="Our Story"
        useCapabilities
        showWorkWithUs={false}
        className="border-t border-black/5"
      />

      <section id="awards" className="section border-t border-white/10 bg-[#0b0f1a]">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sce-orange">Awards</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">{aboutPage.awards.title}</h2>
          <p className="muted mt-4 max-w-2xl text-base leading-relaxed">{aboutPage.awards.intro}</p>

          <div className="mt-10">
            <AwardsShowcase />
          </div>

          <p className="muted mt-8 text-sm">
            For the latest press releases and honors, visit the{' '}
            <Link to="/newsroom" className="text-sce-orange hover:text-sce-orange-hover">
              Newsroom
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="mission" className="section section-light border-t border-black/5">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{aboutPage.mission.title}</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Devoted to Being <span className="text-sce-orange">Exceptional</span>
          </h2>
          <p className="muted-light mt-4 max-w-3xl text-base leading-relaxed">{aboutPage.mission.body}</p>

          <ValuesPillars variant="light" excludeSafe />
        </div>
      </section>

      <section id="leadership" className="section section-light border-t border-black/5">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Our Team</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{aboutPage.leadership.title}</h2>
          <p className="muted-light mt-4 max-w-2xl">{aboutPage.leadership.intro}</p>

          <div className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {aboutPage.leadership.members.map((member) => (
              <article key={member.id} className="flex flex-col items-center text-center">
                <div className="size-44 overflow-hidden rounded-full sm:size-52 lg:size-56">
                  <img src={member.image} alt={member.name} className="size-full object-cover object-top" />
                </div>
                <h3 className="mt-5 text-lg font-black uppercase tracking-wide text-sce-orange sm:text-xl">
                  {member.name}
                </h3>
                <p className="mt-1 text-base font-medium text-sce-orange">{member.role}</p>
                <p className="muted-light mt-3 max-w-xs text-sm leading-relaxed">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="credentials" className="section border-t border-black/5 bg-slate-50">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Trust & Standards</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            {aboutPage.credentials.title}
          </h2>
          <p className="muted-light mt-4 max-w-2xl">{aboutPage.credentials.intro}</p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-lg font-bold text-slate-950">Certifications</h3>
              <ul className="mt-5 space-y-4">
                {aboutPage.credentials.certifications.map((cert) => (
                  <li key={cert.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                    <p className="font-semibold text-slate-950">{cert.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{cert.description}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-950">Associations</h3>
              <ul className="mt-5 space-y-4">
                {aboutPage.credentials.associations.map((assoc) => (
                  <li
                    key={assoc.name}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800"
                  >
                    <span className="size-2 shrink-0 rounded-full bg-sce-orange" aria-hidden="true" />
                    {assoc.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-white/10 bg-[#0b0f1a]">
        <div className="container-page">
          <div className="card mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{aboutPage.cta.title}</h2>
            <p className="muted mt-4 text-base leading-relaxed">{aboutPage.cta.intro}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to={aboutPage.cta.primary.href} className="btn-primary">
                {aboutPage.cta.primary.label}
              </Link>
              <a href={aboutPage.cta.secondary.href} className="btn-ghost">
                {aboutPage.cta.secondary.label}
              </a>
              <Link to={aboutPage.cta.tertiary.href} className="link-accent">
                {aboutPage.cta.tertiary.label}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
