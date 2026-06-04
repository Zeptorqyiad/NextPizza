import { notFound } from 'next/navigation'

import { Container, ProductForm } from '@/shared/components/shared'
import { prisma } from '@/prisma/prisma-client'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    const productId = parseInt(id, 10)
    const product = await prisma.product.findFirst({
        where: { id: productId },
        include: {
            ingredient: true,

            category: {
                include: {
                    products: {
                        include: {
                            items: true,
                        },
                    },
                },
            },

            items: true,
        },
    })

    if (!product) {
        return notFound()
    }

    return (
        <Container className="flex flex-col my-10">
            <ProductForm product={product} />
        </Container>
    )
}
