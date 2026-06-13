import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  formatPostDate,
  getAllTags,
  getPostsByTag,
  newsroom,
  type BlogTag,
} from '../content'

const ALL_TAG = 'All'

function isBlogTag(value: string | null): value is BlogTag {
  return value !== null && getAllTags().includes(value as BlogTag)
}

export function NewsroomPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const tagParam = searchParams.get('tag')
  const activeTag = isBlogTag(tagParam) ? tagParam : null
  const [activeFilter, setActiveFilter] = useState<string>(activeTag ?? ALL_TAG)

  useEffect(() => {
    document.title = `${newsroom.title} | Service Complete Electric`
  }, [])

  useEffect(() => {
    setActiveFilter(activeTag ?? ALL_TAG)
  }, [activeTag])

  const posts = useMemo(() => getPostsByTag(activeTag), [activeTag])
  const tags = [ALL_TAG, ...getAllTags()]

  function selectTag(tag: string) {
    setActiveFilter(tag)
    if (tag === ALL_TAG) {
      setSearchParams({})
      return
    }
    setSearchParams({ tag })
  }

  return (
    <main>
      <section className="border-b border-white/10 bg-[#0b0f1a] py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sce-orange">{newsroom.title}</p>
          <h1 className="mt-3 max-w-3xl text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl">
            Company <span className="text-sce-orange">News</span> & Updates
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-300">{newsroom.intro}</p>
        </div>
      </section>

      <section className="section border-t border-black/5 bg-white">
        <div className="container-page">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter posts by tag">
            {tags.map((tag) => {
              const isActive = activeFilter === tag
              return (
                <button
                  key={tag}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => selectTag(tag)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-sce-orange text-white'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-sce-orange/40 hover:text-sce-orange'
                  }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>

          {posts.length === 0 ? (
            <p className="muted-light mt-10 text-sm">No posts found for this tag.</p>
          ) : (
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-sce-orange/30 hover:shadow-md"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          to={`/newsroom?tag=${encodeURIComponent(tag)}`}
                          className="rounded-full bg-sce-orange-light px-3 py-1 text-xs font-bold text-sce-orange hover:bg-sce-orange/10"
                        >
                          {tag}
                        </Link>
                      ))}
                    </div>
                    <time className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {formatPostDate(post.date)}
                    </time>
                    <h2 className="mt-2 text-xl font-black leading-snug text-slate-950">
                      <Link to={`/newsroom/${post.slug}`} className="hover:text-sce-orange">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="muted-light mt-3 flex-1 text-sm leading-relaxed">{post.excerpt}</p>
                    <Link
                      to={`/newsroom/${post.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sce-orange hover:text-sce-orange-hover"
                    >
                      Read more <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
