import { useEffect } from 'react'
import { ContactForm } from '../components/ContactForm'
import { contactPage } from '../content/contact'
import { site } from '../content/site'

export function ContactPage() {
  useEffect(() => {
    document.title = contactPage.meta.title
  }, [])

  return (
    <main>
      <section className="border-b border-white/10 bg-[#0b0f1a] py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sce-orange">Contact Us</p>
          <h1 className="mt-3 max-w-2xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
            {contactPage.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">{contactPage.intro}</p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h2 className="text-lg font-bold text-slate-950">{site.brand.name}</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Central Florida&apos;s premier electrical contractor for hospitality, entertainment, and commercial
                  projects.
                </p>
                <div className="mt-6 space-y-3 text-sm">
                  <p>
                    <span className="font-semibold text-slate-950">Email:</span>{' '}
                    <a href="mailto:info@sceflorida.com" className="text-sce-orange hover:underline">
                      info@sceflorida.com
                    </a>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
