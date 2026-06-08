import React from 'react'
import { WhiteBlock, CheckoutItem } from '@/shared/components/shared'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'
import { getCartItemDetails } from '@/shared/lib'
import { CartStateItem } from '@/shared/lib/get-cart-details'

interface Props {
    items: CartStateItem[]
    onCLickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void
    removeCartItem: (id: number) => void
    className?: string
}

export const CheckoutCart: React.FC<Props> = ({
    className,
    items,
    onCLickCountButton,
    removeCartItem,
}) => {
    return (
        <WhiteBlock title="1. Корзина" className={className}>
            <div className="flex flex-col gap-5">
                {items.map((item) => (
                    <CheckoutItem
                        key={item.id}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        details={getCartItemDetails(
                            item.ingredients,
                            item.pizzaType as PizzaType,
                            item.pizzaSize as PizzaSize,
                        )}
                        disabled={item.disabled}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        onClickCountButton={(type) =>
                            onCLickCountButton(item.id, item.quantity, type)
                        }
                        onClickRemove={() => removeCartItem(item.id)}
                    />
                ))}
            </div>
        </WhiteBlock>
    )
}
