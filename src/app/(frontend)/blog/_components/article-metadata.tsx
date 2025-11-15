import { Media } from '@/payload-types'
import Image from 'next/image'

export function ArticleMetadata({
    data,
    intent,
    className,
}: {
    data: {
        author: { avatar: Media; name: string; role: string }
        publishedAt: Date
        readTimeMins: number
    }
    intent: 'card' | 'post'
    className?: string
}) {
    const { author, publishedAt, readTimeMins } = data

    return (
        <div className={`mt-4 flex items-center justify-between ${className}`}>
            {/* author */}
            <div className={`flex items-center ${intent === 'card' ? 'gap-2' : 'gap-3'}`}>
                {/* author avatar */}
                <Image
                    src={author.avatar.url ?? ''}
                    alt={`${author.name}'s avatar`}
                    width={40}
                    height={40}
                    className={`rounded-full ${intent === 'card' ? 'size-10' : 'size-11'}`}
                    sizes="40px"
                />

                {/* author name, role */}
                <div
                    className={`flex flex-col leading-none ${intent === 'card' ? 'text-sm gap-1.5' : 'text-base gap-2'}`}
                >
                    <p className="font-bold">{author.name}</p>
                    <p className="text-dimmed">{author.role}</p>
                </div>
            </div>

            {/* date, read time */}
            <div
                className={`flex flex-col text-right ${intent === 'card' ? 'text-sm gap-1.5' : 'text-base gap-2'}`}
            >
                <time dateTime={new Date(publishedAt).toISOString()} className="leading-none">
                    {publishedAt.toLocaleString('en-GB', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                    })}
                </time>
                <p className="text-dimmed leading-none ">{readTimeMins} minutes read</p>
            </div>
        </div>
    )
}
