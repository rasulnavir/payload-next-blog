import Image from 'next/image'
import { ArticleMetadata } from '../_components/article-metadata'
import { wait } from 'payload/shared'

const publishedAt = new Date('2025-11-13T20:45:00')

export default async function BlogPostPage() {
    await wait(2000)
    return (
        <div className="prose lg:prose-lg dark:prose-invert">
            {/* title */}
            <h1>How to Create a Blog Tutorial No One Asked For</h1>

            {/* metadata */}
            <ArticleMetadata
                intent="post"
                data={{
                    author: {
                        avatar: 'https://via.assets.so/img.jpg?w=40&h=40&bg=6b7280&f=png',
                        name: 'John Doe',
                        role: 'Staff Writer',
                    },
                    publishedAt,
                    readTimeMins: 42,
                }}
                className="not-prose"
            />

            {/* cover image */}
            <Image
                src="https://via.assets.so/img.jpg?w=600&h=300&bg=6b7280&f=png"
                alt="Cover image"
                width={600}
                height={300}
                className="w-full rounded-md object-center object-cover"
            />

            {/* content */}
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore omnis
                maiores. Illo cum natus magni dicta, officia quibusdam velit enim fugit blanditiis,
                eaque aut minima ipsam aliquam similique qui quis corrupti, atque facere alias neque
                laudantium deleniti sunt! Hic culpa ratione illo obcaecati ab numquam nam dolorem
                eaque perferendis alias facilis harum enim rerum tempora deserunt iure quod nemo
                corporis, exercitationem fugiat soluta ipsam expedita cupiditate. Nihil qui,
                similique quas, quidem ea officia error eaque architecto nulla labore asperiores
                velit quasi aliquid id, distinctio consequatur magnam voluptatum inventore ipsa
                deleniti. Dignissimos natus autem debitis! Qui, sunt reprehenderit. Omnis,
                voluptatibus?
            </p>
        </div>
    )
}
