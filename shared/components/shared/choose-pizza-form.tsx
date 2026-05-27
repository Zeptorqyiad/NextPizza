import { cn } from "@/shared/lib/utils"
import React from "react"
import { GroupVariants, IngredientItem, PizzaImage, Title } from "."
import { Button } from "@/shared/components/ui"
import {
    PizzaSize,
    pizzaSizes,
    PizzaType,
    pizzaTypes,
} from "@/shared/constants/pizza"
import { Ingredient } from "@/shared/lib/generated/prisma/client"

interface Props {
    imageUrl: string
    name: string
    ingredients: Ingredient[]
    items?: any[]
    onClickAdd?: VoidFunction
    className?: string
}

export const ChoosePizzaForm: React.FC<Props> = ({
    imageUrl,
    name,
    ingredients,
    items,
    onClickAdd,
    className,
}) => {
    const [size, setSize] = React.useState<PizzaSize>(20)
    const [type, setType] = React.useState<PizzaType>(1)

    const textDetails = "30 см, традиционное тесто 30"
    const totalPrice = 350

    return (
        <div className={cn("flex flex-1")}>
            <PizzaImage imageUrl={imageUrl} size={size} />

            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={name} size="md" className="font-extrabold mb-1" />

                <p className="text-gray-400">{textDetails}</p>

                <div className="flex flex-col gap-4 mt-5">
                    <GroupVariants
                        items={pizzaSizes}
                        value={String(size)}
                        onClick={(value) => setSize(Number(value) as PizzaSize)}
                    />

                    <GroupVariants
                        items={pizzaTypes}
                        value={String(type)}
                        onClick={(value) => setType(Number(value) as PizzaType)}
                    />
                </div>

                <div className="grid grid-cols-3 gap-3">
                    {ingredients.map((item) => (
                        <IngredientItem
                            key={item.id}
                            imageUrl={item.imageUrl}
                            name={item.name}
                            price={item.price}
                            onClick={onClickAdd}
                        />
                    ))}
                </div>

                <Button className="h-[55px] px-10 text-base rounded-[18px] w-full mt-10">
                    Добавить в корзину за {totalPrice} ₽
                </Button>
            </div>
        </div>
    )
}
