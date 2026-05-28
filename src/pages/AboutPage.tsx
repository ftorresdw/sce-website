import { useEffect } from 'react'
import { AboutSection } from '../components/AboutSection'
import { ValuesPillars } from '../components/ValuesPillars'
import { aboutPage, type TeamMember } from '../content/about'
import { site } from '../content/site'

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

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

      <AboutSection showWorkWithUs className="border-t border-black/5" />

      <section id="mission" className="section border-t border-white/10 bg-[#0b0f1a]">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sce-orange">{aboutPage.mission.title}</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Devoted to Being <span className="text-sce-orange">Exceptional</span>
          </h2>
          <p className="muted mt-4 max-w-3xl text-base leading-relaxed">{aboutPage.mission.body}</p>
          <p className="muted mt-4 max-w-3xl text-base leading-relaxed">{site.values.intro}</p>

          <ValuesPillars />
        </div>
      </section>

      <section id="awards" className="section section-light border-t border-black/5">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Awards</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">Awards & Recognitions</h2>
          <p className="muted-light mt-4 max-w-2xl">
            Industry honors recognizing our commitment to safety, quality, and excellence on Central Florida&apos;s most
            iconic projects.
          </p>

          <div className="mt-10 space-y-12">
            {aboutPage.awardsByYear.map((yearGroup) => (
              <div key={yearGroup.year}>
                <h3 className="text-2xl font-black text-sce-orange">{yearGroup.year}</h3>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {yearGroup.awards.map((award, index) => (
                    <article
                      key={`${yearGroup.year}-${index}`}
                      className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-sce-orange/30 hover:shadow-md"
                    >
                      <span className="inline-flex w-fit rounded-full bg-sce-orange-light px-3 py-1 text-xs font-bold text-sce-orange">
                        {yearGroup.year}
                      </span>
                      <h4 className="mt-4 text-base font-bold leading-snug text-slate-950">{award.title}</h4>
                      {award.description ? (
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{award.description}</p>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="section section-light border-t border-black/5">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Our Team</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">{aboutPage.leadership.title}</h2>
          <p className="muted-light mt-4 max-w-2xl">{aboutPage.leadership.intro}</p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {(aboutPage.leadership.members as TeamMember[]).map((member) => (
              <article key={member.id} className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="aspect-[4/5] w-full object-cover" />
                ) : (
                  <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                    <span className="text-4xl font-black text-slate-400">{getInitials(member.name)}</span>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-slate-950">{member.name}</h3>
                  <p className="mt-1 text-sm font-semibold text-sce-orange">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light border-t border-black/5">
        <div className="container-page grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Certifications</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">{aboutPage.certifications.title}</h2>
            <ul className="mt-6 space-y-4">
              {aboutPage.certifications.items.map((cert) => (
                <li key={cert.title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <p className="font-semibold text-slate-950">{cert.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{cert.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Associations</p>
            <h2 className="mt-3 text-3xl font-black text-slate-950">{aboutPage.associations.title}</h2>
            <ul className="mt-6 space-y-3">
              {aboutPage.associations.items.map((name) => (
                <li
                  key={name}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800"
                >
                  <span className="size-2 shrink-0 rounded-full bg-sce-orange" aria-hidden="true" />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
