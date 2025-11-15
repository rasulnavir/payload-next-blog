import { ArticleCardSkeleton } from './_components/article-card'

export default function BlogIndexPageLoading() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, index) => (
                <ArticleCardSkeleton key={index} />
            ))}
        </div>
    )
}
