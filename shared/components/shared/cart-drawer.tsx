'use client'

import React from 'react'
import Link from 'next/link'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/shared/components/ui/sheet'
import { Button } from '../ui'
import { ArrowRight } from 'lucide-react'
import { CartDrawerItem } from './cart-drawer-item'
import { getCartItemDetails } from '@/shared/lib'
import { useMounted } from '@/shared/hooks'
import { useCartStore } from '@/shared/store'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'

interface Props {
    className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
    useMounted()

    const totalAmount = useCartStore((state) => state.totalAmount)
    const fetchCartItems = useCartStore((state) => state.fetchCartItems)
    const items = useCartStore((state) => state.items)

    React.useEffect(() => {
        fetchCartItems()
    }, [])

    const onCLickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        console.log(id, quantity, type)
    }

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
                <SheetDescription className="hidden" />
                <SheetHeader>
                    <SheetTitle>
                        В корзине <span className="font-bold">{items.length} товар</span>
                    </SheetTitle>
                </SheetHeader>

                <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
                    <div className="mb-2">
                        {items.map((item) => (
                            <CartDrawerItem
                                key={item.id}
                                id={item.id}
                                imageUrl={item.imageUrl}
                                details={
                                    item.pizzaSize && item.pizzaType
                                        ? getCartItemDetails(
                                              item.ingredients,
                                              item.pizzaType as PizzaType,
                                              item.pizzaSize as PizzaSize,
                                          )
                                        : ''
                                }
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                                onClickCountButton={() => onCLickCountButton}
                            />
                        ))}
                    </div>
                </div>

                <SheetFooter className="-mx-6 bg-white p-8">
                    <div className="w-full">
                        <div className="flex mb-4">
                            <span className="flex flex-1 text-lg text-neutral-500">
                                Итого
                                <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2"></div>
                            </span>

                            <span className="font-bold text-lg">{totalAmount} ₽</span>
                        </div>

                        <Link href="/cart">
                            <Button type="submit" className="w-full h-12 text-base">
                                Оформить заказ <ArrowRight className="w-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
