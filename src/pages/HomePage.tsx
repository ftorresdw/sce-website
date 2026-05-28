import { Link } from 'react-router-dom'
import { AboutSection } from '../components/AboutSection'
import { ServicesSection } from '../components/ServicesSection'
import { ValuesPillars } from '../components/ValuesPillars'
import { site } from '../content/site'

export function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[min(100vh,900px)] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={site.hero.image}
            alt="Universal Epic Universe entrance at night"
            className="size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
        <div className="container-page py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Electrifying the <span className="text-sce-orange">{site.hero.highlightPhrase}</span> Iconic Entertainment
              Destinations
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">{site.hero.subhead}</p>
            <div className="mt-10">
              <a className="link-accent" href={site.hero.primaryCta.href}>
                {site.hero.primaryCta.label}
              </a>
            </div>
          </div>
        </div>
      </section>

      <AboutSection showLearnMore />

      <section id="portfolio" className="section section-light border-t border-black/5">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Our Portfolio</p>
          <h2 className="mt-3 text-5xl font-black leading-[0.95] tracking-tight text-slate-950">
            Powering <span className="text-sce-orange">Iconic</span> Projects
          </h2>
          <p className="muted-light mt-3 max-w-2xl text-sm">{site.portfolio.intro}</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-12">
            <article className="relative overflow-hidden rounded-3xl bg-slate-900 text-white lg:col-span-12">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582550751520-8b6d3a2d9961?auto=format&fit=crop&w=2400&q=60')] bg-cover bg-center opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
              <div className="relative p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sce-orange">
                  {site.portfolio.items[0].category}
                </p>
                <h3 className="mt-2 text-3xl font-black">{site.portfolio.items[0].title}</h3>
                <p className="mt-3 max-w-xl text-sm text-white/85">{site.portfolio.items[0].description}</p>
                <div className="mt-6 w-full max-w-2xl rounded-full bg-white/10">
                  <div className="h-3 w-[85%] rounded-full bg-sce-orange" />
                </div>
                <div className="mt-4">
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white"
                    href="#contact"
                  >
                    View Project Details <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </article>

            {site.portfolio.items.slice(1).map((item) => (
              <article
                key={item.title}
                className="relative overflow-hidden rounded-3xl bg-slate-900 text-white lg:col-span-4"
              >
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center opacity-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />
                <div className="relative p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sce-orange">{item.category}</p>
                  <h3 className="mt-1 text-xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/80">{item.description}</p>
                  <div className="mt-4">
                    <a
                      className="inline-flex items-center gap-2 text-sm font-semibold text-sce-orange hover:text-sce-orange-hover"
                      href="#contact"
                    >
                      Learn More <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="values" className="section border-t border-white/10">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sce-orange">Our Values</p>
          <h2 className="mt-3 text-5xl font-black leading-[0.95] tracking-tight text-white">
            Built on <span className="text-sce-orange">Excellence</span>
          </h2>
          <p className="muted mt-4 max-w-2xl text-base leading-relaxed">{site.values.intro}</p>

          <ValuesPillars excludeSafe />

          <div className="mt-10 overflow-hidden rounded-2xl bg-gradient-to-r from-sce-orange to-sce-orange-hover">
            <div className="px-6 py-6 text-center">
              <div className="text-4xl font-black text-white">30+</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection />

      <section id="contact" className="section border-t border-white/10">
        <div className="container-page">
          <div className="card overflow-hidden">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-sm font-semibold text-sce-orange">Get In Touch</p>
                <h2 className="h2 mt-3">{site.contact.title}</h2>
                <p className="muted mt-4 max-w-2xl text-base leading-relaxed">{site.contact.intro}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link to="/contact" className="btn-primary">
                    {site.contact.cta.label}
                  </Link>
                  <a className="btn-ghost" href="#portfolio">
                    View Our Projects
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-sce-orange/20 via-sce-orange/5 to-transparent p-6">
                  <div className="text-sm font-semibold text-white">Ready to start?</div>
                  <p className="mt-2 text-sm text-slate-200">
                    Visit our contact page to share project details with our team.
                  </p>
                  <Link to="/contact" className="mt-4 inline-flex text-sm font-semibold text-sce-orange hover:underline">
                    Go to Contact Form →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
