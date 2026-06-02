'use client'

import React from 'react'

import { cn } from '@/shared/lib/utils'
import { DialogContent, Dialog } from '@/shared/components/ui/dialog'
import { useRouter } from 'next/navigation'
import { ChoosePizzaForm, ChooseProductForm, VisuallyHiddenBlock } from '../index'
import { ProductWithRelations } from '@/@types/prisma'
import { useCartStore } from '@/shared/store'
import { toast } from 'react-hot-toast'

interface Props {
    product: ProductWithRelations
    className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter()
    const firstItem = product.items[0]
    const isPizzaForm = Boolean(firstItem.pizzaType)
    const addCartItem = useCartStore((state) => state.addCartItem)
    const loading = useCartStore((state) => state.loading)

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id

            await addCartItem({
                productItemId: itemId,
                ingredients,
            })

            toast.success(`${product.name} добавлен в корзину`)
            router.back()
        } catch (error) {
            console.error(error)
            toast.error('Не удалось добавить товар в корзину')
        }
    }

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    'p-0! w-[1060px]! max-w-[1060px]! min-h-[500px]! bg-white overflow-hidden',
                    className,
                )}
            >
                <VisuallyHiddenBlock />

                {isPizzaForm ? (
                    <ChoosePizzaForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        ingredients={product.ingredient}
                        items={product.items}
                        onSubmit={onSubmit}
                        loading={loading}
                    />
                ) : (
                    <ChooseProductForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        price={firstItem.price}
                        onSubmit={onSubmit}
                        loading={loading}
                    />
                )}
            </DialogContent>
        </Dialog>
    )
}
