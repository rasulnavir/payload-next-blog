import type { CollectionConfig } from 'payload'
import { generateBlurDataURL, isEligibleForBlurDataURL } from './lib/generate-blur-data-url'

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
        {
            name: 'blurDataUrl',
            type: 'text',
            required: true,
            admin: { hidden: true },
        },
    ],
    upload: true,
    hooks: {
        beforeChange: [
            async ({ operation, data, req }) => {
                if (operation !== 'create') return data
                // 1. check for eligibility
                if (!isEligibleForBlurDataURL(req.file?.mimetype)) return data
                // 2. if it is, generate blur hash
                const base64 = await generateBlurDataURL(req.file?.data)
                if (!base64) return data
                // 3. set it to data.blurDataUrl
                data.blurDataUrl = base64
                console.log(`Generated blur data URL for ${data.filename}`)
                // 4. return data
                return data
            },
        ],
    },
}
