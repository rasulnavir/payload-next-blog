import Link from 'next/link'

export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="max-w-3xl w-full mx-auto">
            <Link
                href="/blog"
                aria-label="Back to blog"
                className="inline-flex items-center gap-2 mb-8 no-underline relative after:content-[''] after:absolute after:left-1 after:-bottom-1 after:right-0 after:h-0.5 after:bg-gray-600 after:hidden hover:after:block"
            >
                <ArrowLeftIcon />
                All articles
            </Link>

            {children}
        </div>
    )
}

function ArrowLeftIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
            aria-hidden="true"
        >
            <path d="m12 19-7-7 7-7" />
            <path d="M19 12H5" />
        </svg>
    )
}
