'use client'

import React from 'react'
import { toast } from 'react-hot-toast'

import { ProductWithRelations } from '@/@types/prisma'
import { useCartStore } from '@/shared/store'
import { ChoosePizzaForm, ChooseProductForm } from './index'

interface Props {
    product: ProductWithRelations
    onSubmit?: VoidFunction
    className?: string
}

export const ProductForm: React.FC<Props> = ({ product, onSubmit: _onSubmit, className }) => {
    const addCartItem = useCartStore((state) => state.addCartItem)
    const loading = useCartStore((state) => state.loading)

    const firstItem = product.items[0]
    const isPizzaForm = Boolean(firstItem.pizzaType)

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id

            await addCartItem({
                productItemId: itemId,
                ingredients,
            })

            toast.success(`${product.name} добавлен в корзину`)

            _onSubmit?.()
        } catch (error) {
            console.error(error)
            toast.error('Не удалось добавить товар в корзину')
        }
    }

    if (isPizzaForm) {
        return (
            <ChoosePizzaForm
                imageUrl={product.imageUrl}
                name={product.name}
                ingredients={product.ingredient}
                items={product.items}
                onSubmit={onSubmit}
                loading={loading}
            />
        )
    }

    return (
        <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            price={firstItem.price}
            onSubmit={onSubmit}
            loading={loading}
        />
    )
}
