import React from 'react'

import { GroupVariants, IngredientItem, PizzaImage, Title } from '.'
import { Button } from '@/shared/components/ui'
import { mapPizzaType, PizzaSize, PizzaType, pizzaTypes } from '@/shared/constants/pizza'
import { Ingredient, ProductItem } from '@/shared/lib/generated/prisma/client'
import { cn } from '@/shared/lib/utils'
import { calcTotalPizzaPrice, getPizzaDetails } from '@/shared/lib'
import { usePizzaOptions } from '@/shared/hooks'

interface Props {
    imageUrl: string
    name: string
    ingredients: Ingredient[]
    items: ProductItem[]
    onClickAddCart?: VoidFunction
    className?: string
}

export const ChoosePizzaForm: React.FC<Props> = ({
    imageUrl,
    name,
    ingredients,
    items,
    onClickAddCart,
    className,
}) => {
    const { size, type, availableSizes, setSize, setType, selectedIngredients, addIngredient } =
        usePizzaOptions(items)

    const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients)

    const textDetails = getPizzaDetails(size, type, selectedIngredients)

    const handleClickAdd = () => {
        onClickAddCart?.()
        console.log({
            size,
            type,
            ingredients: selectedIngredients,
        })
    }

    return (
        <div className={cn('flex flex-1', className)}>
            <PizzaImage imageUrl={imageUrl} size={size} />

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />

                <p className="text-gray-400">{textDetails}</p>

                <div className="flex flex-col gap-4 mt-5">
                    <GroupVariants
                        items={availableSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />

                    <GroupVariants
                        items={pizzaTypes}
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                    />
                </div>

                <div className="bg-gray-50 p-5 rounded-md h-[420px] overflow-auto scrollbar mt-5">
                    <div className="grid grid-cols-3 gap-3">
                        {ingredients.map((item) => (
                            <IngredientItem
                                key={item.id}
                                imageUrl={item.imageUrl}
                                name={item.name}
                                price={item.price}
                                active={selectedIngredients.has(item.id)}
                                onClick={() => addIngredient(item.id)}
                            />
                        ))}
                    </div>
                </div>

                <Button
                    onClick={handleClickAdd}
                    className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10"
                >
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    )
}
