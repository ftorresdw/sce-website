import type { BlogPost } from '../content'

function linkify(text: string) {
  const urlPattern = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlPattern)
  return parts.map((part, index) =>
    part.startsWith('http') ? (
      <a key={index} href={part} className="text-sce-orange hover:underline" target="_blank" rel="noreferrer">
        {part}
      </a>
    ) : (
      <span key={index}>{part}</span>
    ),
  )
}

export function BlogPostBody({ body }: { body: BlogPost['body'] }) {
  return (
    <div className="space-y-5 text-base leading-relaxed text-slate-700">
      {body.map((block, index) => {
        if (block.type === 'list') {
          return (
            <ul key={index} className="list-disc space-y-2 pl-6">
              {block.content.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }
        return <p key={index}>{linkify(block.content)}</p>
      })}
    </div>
  )
}
