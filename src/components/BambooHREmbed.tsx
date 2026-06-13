import { useEffect, useRef } from 'react'
import { careersPage } from '../content'
import '../styles/bamboohr.css'

declare global {
  interface Window {
    bamboohr?: unknown
  }
}

const SCRIPT_ID = 'bamboohr-embed-script'

export function BambooHREmbed() {
  const containerRef = useRef<HTMLDivElement>(null)
  const domain = careersPage.bamboohr.domain

  useEffect(() => {
    if (!domain || !containerRef.current) return

    const mount = containerRef.current
    mount.innerHTML = `<div id="BambooHR" data-domain="${domain}"></div>`

    const existing = document.getElementById(SCRIPT_ID)
    if (existing) {
      existing.remove()
    }

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.src = `https://${domain}/js/embed.js`
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      script.remove()
      mount.innerHTML = ''
    }
  }, [domain])

  if (!domain) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <p className="text-sm font-semibold text-slate-700">BambooHR careers embed</p>
        <p className="mt-2 text-sm text-slate-500">
          Set <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">VITE_BAMBOOHR_DOMAIN</code> in your{' '}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">.env</code> file (e.g.{' '}
          <code className="rounded bg-slate-200 px-1.5 py-0.5 text-xs">yourcompany.bamboohr.com</code>) to load open
          positions.
        </p>
        <p className="mt-4 text-xs text-slate-400">
          Styling overrides are applied via <code className="text-slate-500">src/styles/bamboohr.css</code>
        </p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="bamboohr-embed min-h-[400px] rounded-3xl border border-slate-200 bg-white p-6 sm:p-8" />
  )
}
