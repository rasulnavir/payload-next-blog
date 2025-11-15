import { getArticles } from '@/collections/Articles/fetchers'
import { ArticleCard } from './_components/article-card'

function relationIsObject<T>(relation: number | T): relation is T {
    return typeof relation !== 'number'
}

export default async function BlogIndexPage() {
    const articles = await getArticles()
    console.log(articles[0])

    if (!articles.length) {
        return <p>No articles found</p>
    }

    return (
        <div className="grid grid-cols-3 gap-4 w-full">
            {articles.map(
                ({
                    id,
                    title,
                    slug,
                    contentSummary,
                    coverImage,
                    readTimeInMins,
                    publishedAt,
                    author,
                }) => {
                    if (!relationIsObject(coverImage)) return null
                    if (!relationIsObject(author) || !relationIsObject(author.avatar)) return null

                    return (
                        <ArticleCard
                            key={id}
                            title={title}
                            href={`/blog/${slug}`}
                            summary={contentSummary}
                            readTimeMins={readTimeInMins ?? 0}
                            publishedAt={new Date(publishedAt ?? new Date())}
                            coverImage={coverImage}
                            author={{
                                avatar: author.avatar,
                                name: author.name,
                                role: author.role,
                            }}
                        />
                    )
                },
            )}
        </div>
    )
}
