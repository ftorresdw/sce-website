import { site } from '../content'

type ValuesPillarsProps = {
  variant?: 'dark' | 'light'
  excludeSafe?: boolean
}

export function ValuesPillars({ variant = 'dark', excludeSafe = false }: ValuesPillarsProps) {
  const isDark = variant === 'dark'
  const pillars = excludeSafe ? site.values.pillars.filter((p) => p.title !== 'Safe') : site.values.pillars

  return (
    <div className={`mt-10 grid gap-6 ${pillars.length === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
      {pillars.map((pillar) => (
        <article
          key={pillar.title}
          className={[
            'overflow-hidden rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.12)]',
            isDark ? 'border border-white/10 bg-[#10131b]' : 'border border-slate-200 bg-white',
          ].join(' ')}
        >
          <div
            className={[
              'flex items-center gap-3 px-6 py-4',
              pillar.theme === 'blue' ? 'bg-[#1f5fff]' : '',
              pillar.theme === 'orange' ? 'bg-sce-orange' : '',
              pillar.theme === 'purple' ? 'bg-[#a855f7]' : '',
            ].join(' ')}
          >
            <div className="grid size-9 place-items-center rounded-xl bg-black/25">
              <div className="size-2.5 rounded-full bg-white/85" />
            </div>
            <h3 className="text-lg font-black text-white">{pillar.title}</h3>
          </div>
          <div className="px-6 pb-6 pt-5">
            <p className={`text-sm leading-relaxed ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
              {pillar.description}
            </p>
            <ul className={`mt-5 space-y-2 text-sm ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
              {pillar.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 inline-block size-2.5 rounded-full bg-sce-orange" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  )
}
