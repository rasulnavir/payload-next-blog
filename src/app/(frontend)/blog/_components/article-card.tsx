import Image from 'next/image'
import Link from 'next/link'
import { ArticleMetadata } from './article-metadata'

type ArticleCardProps = {
    href: string
    title: string
    summary: string
    coverImage: string
    publishedAt: Date
    readTimeMins: number
    author: {
        avatar: string
        name: string
        role: string
    }
}

export function ArticleCard({
    href,
    title,
    summary,
    coverImage,
    publishedAt,
    readTimeMins,
    author,
}: ArticleCardProps) {
    return (
        <Link href={href} aria-label={`Read article: "${title}"`} className="block">
            <article className="rounded-md border border-gray-700 overflow-hidden">
                {/* cover image */}
                <Image
                    src={coverImage}
                    alt={`Cover image for "${title}"`}
                    width={600}
                    height={300}
                    className="max-h-[300px] object-cover object-center"
                />

                {/* content */}
                <div className="p-3">
                    <header>
                        {/* title */}
                        <h2 className="font-bold text-lg">{title}</h2>
                        {/* summary */}
                        <p className="mt-2">{summary}</p>
                    </header>

                    <ArticleMetadata intent="card" data={{ author, publishedAt, readTimeMins }} />
                </div>
            </article>
        </Link>
    )
}

export function ArticleCardSkeleton() {
    return <div className="rounded-md h-[350px] animate-pulse bg-gray-700" />
}
