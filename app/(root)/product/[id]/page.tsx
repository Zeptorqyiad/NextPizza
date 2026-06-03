import { notFound } from 'next/navigation'

import { Container, ChoosePizzaForm, ChooseProductForm } from '@/shared/components/shared'
import { prisma } from '@/prisma/prisma-client'
import { useCartStore } from '@/shared/store'
import { toast } from 'react-hot-toast'
import { router } from 'next/client'

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
            {isPizzaForm ? (
                
            ) : (
                
            )}
        </Container>
    )
}
