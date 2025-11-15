import { ArticleCard } from './_components/article-card'

export default async function BlogIndexPage() {
    return (
        <div className="grid grid-cols-3 gap-4 w-full">
            <ArticleCard
                href="/blog/how-to-create-a-blog-tutorial-no-one-asked-for"
                title="How to Create a Blog Tutorial No One Asked For"
                summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, hic."
                coverImage="https://via.assets.so/img.jpg?w=600&h=300&bg=6b7280&f=png"
                publishedAt={new Date('2025-11-13T20:45:00')}
                readTimeMins={42}
                author={{
                    avatar: 'https://via.assets.so/img.jpg?w=40&h=40&bg=6b7280&f=png',
                    name: 'John Doe',
                    role: 'Staff Writer',
                }}
            />
        </div>
    )
}
