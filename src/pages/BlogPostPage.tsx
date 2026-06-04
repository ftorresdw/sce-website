import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { BlogPostBody } from '../components/BlogPostBody'
import { formatPostDate, getPostBySlug, newsroom } from '../content/newsroom'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : undefined

  useEffect(() => {
    document.title = post ? `${post.title} | Service Complete Electric` : 'Newsroom | Service Complete Electric'
  }, [post])

  if (!post) {
    return <Navigate to="/newsroom" replace />
  }

  const related = newsroom.posts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 3)

  return (
    <main>
      <section className="border-b border-white/10 bg-[#0b0f1a] py-12 sm:py-16">
        <div className="container-page">
          <Link to="/newsroom" className="text-sm font-semibold text-sce-orange hover:text-sce-orange-hover">
            ← Back to Newsroom
          </Link>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                to={`/newsroom?tag=${encodeURIComponent(tag)}`}
                className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-sce-orange hover:bg-white/15"
              >
                {tag}
              </Link>
            ))}
          </div>
          <time className="mt-4 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            {formatPostDate(post.date)}
          </time>
          <h1 className="mt-3 max-w-4xl text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      <section className="section border-t border-black/5 bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <BlogPostBody body={post.body} />

            <aside className="mt-12 space-y-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-900">
                  {newsroom.about.title}
                </h2>
                <p className="muted-light mt-3 text-sm leading-relaxed">{newsroom.about.body}</p>
              </div>
              <div className="border-t border-slate-200 pt-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-900">
                  {newsroom.mediaContact.title}
                </h2>
                <p className="muted-light mt-3 text-sm leading-relaxed">
                  {newsroom.mediaContact.name}
                  <br />
                  {newsroom.mediaContact.company}
                  <br />
                  <a href={`mailto:${newsroom.mediaContact.email}`} className="text-sce-orange hover:underline">
                    {newsroom.mediaContact.email}
                  </a>
                  <br />
                  <a href={`tel:${newsroom.mediaContact.phone}`} className="text-sce-orange hover:underline">
                    {newsroom.mediaContact.phone}
                  </a>
                </p>
              </div>
            </aside>
          </div>

          {related.length > 0 ? (
            <div className="mx-auto mt-16 max-w-5xl border-t border-slate-200 pt-12">
              <h2 className="text-2xl font-black text-slate-950">More from the Newsroom</h2>
              <ul className="mt-6 space-y-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link to={`/newsroom/${item.slug}`} className="group block rounded-2xl border border-slate-200 p-5 hover:border-sce-orange/30">
                      <time className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                        {formatPostDate(item.date)}
                      </time>
                      <p className="mt-1 font-bold text-slate-900 group-hover:text-sce-orange">{item.title}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  )
}
