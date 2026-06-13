import { useState } from 'react'
import { aboutPage, awardGroups, getAwardYears, type AwardGroup } from '../content'

function formatYears(years: number[]) {
  if (years.length === 1) return String(years[0])
  return years.join(', ')
}

export function AwardsShowcase() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const selected = awardGroups.find((group) => group.id === selectedId)

  function toggle(group: AwardGroup) {
    setSelectedId((current) => (current === group.id ? null : group.id))
  }

  return (
    <div>
      <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 pt-1 snap-x snap-mandatory [scrollbar-width:thin] sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        {awardGroups.map((group) => {
          const isSelected = selectedId === group.id
          const years = getAwardYears(group)

          return (
            <button
              key={group.id}
              type="button"
              onClick={() => toggle(group)}
              aria-expanded={isSelected}
              className={[
                'min-w-[min(100%,280px)] max-w-[320px] shrink-0 snap-start rounded-2xl border p-5 text-left transition',
                isSelected
                  ? 'border-sce-orange bg-white shadow-md'
                  : 'border-slate-200 bg-slate-50/80 text-slate-600 hover:border-slate-300 hover:bg-white',
              ].join(' ')}
            >
              <p
                className={[
                  'text-[11px] font-semibold uppercase tracking-[0.14em]',
                  isSelected ? 'text-sce-orange' : 'text-slate-400',
                ].join(' ')}
              >
                {years.length} {years.length === 1 ? 'year' : 'years'}
              </p>
              <h3
                className={[
                  'mt-3 text-base font-bold leading-snug',
                  isSelected ? 'text-slate-950' : 'text-slate-700',
                ].join(' ')}
              >
                {group.title}
              </h3>
              <p className="mt-3 text-xs text-slate-500">{isSelected ? 'Tap to collapse' : 'Tap for details'}</p>
            </button>
          )
        })}
      </div>

      {selected ? (
        <div className="mt-6 rounded-2xl border border-sce-orange/25 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="text-lg font-bold text-slate-950">{selected.title}</h3>
            <p className="text-sm font-semibold text-sce-orange">
              Awarded: {formatYears(getAwardYears(selected))}
            </p>
          </div>
          <ul className="mt-5 space-y-4">
            {selected.instances.map((instance, index) => (
              <li key={`${instance.year}-${index}`} className="flex gap-4 border-t border-slate-100 pt-4 first:border-t-0 first:pt-0">
                <span className="shrink-0 text-sm font-black text-sce-orange">{instance.year}</span>
                <p className="text-sm leading-relaxed text-slate-600">{instance.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="mt-4 text-sm text-slate-500">{aboutPage.awards.hint}</p>
      )}
    </div>
  )
}
