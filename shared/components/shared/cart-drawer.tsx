'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/shared/components/ui/sheet'
import { cn } from '@/shared/lib/utils'
import { getCartItemDetails } from '@/shared/lib'
import { useCart, useMounted } from '@/shared/hooks'
import { PizzaSize, PizzaType } from '@/shared/constants/pizza'

import { Button } from '../ui'
import { Title } from './title'
import { CartDrawerItem } from './cart-drawer-item'

interface Props {
    className?: string
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
    useMounted()

    const [redirecting, setRedirecting] = React.useState(false)
    const { totalAmount, updateItemQuantity, items, removeCartItem } = useCart()

    const countItem = items.length
    let resultCountItem = ''

    if (!countItem) {
        resultCountItem = '0 товаров'
    } else if (countItem === 1) {
        resultCountItem = '1 товар'
    } else {
        resultCountItem = `${countItem} товара`
    }

    const onCLickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1

        updateItemQuantity(id, newQuantity)
    }

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
                <SheetTitle className="sr-only">Корзина</SheetTitle>
                <SheetDescription className="hidden" />

                <div
                    className={cn(
                        'flex flex-col h-full',
                        !totalAmount && 'justify-center',
                        className,
                    )}
                >
                    {totalAmount > 0 && (
                        <SheetHeader>
                            <SheetTitle>
                                В корзине <span className="font-bold">{resultCountItem}</span>
                            </SheetTitle>
                        </SheetHeader>
                    )}

                    {!totalAmount && (
                        <div className="flex flex-col items-center justify-center w-72 mx-auto">
                            <Image
                                src="/assets/images/empty-box.png"
                                alt="Empty cart"
                                width={120}
                                height={120}
                            />
                            <Title
                                size="sm"
                                text="Корзина пустая"
                                className="text-center font-bold my-2"
                            />
                            <p className="text-center text-neutral-500 mb-5">
                                Добавьте хотя бы одну пиццу, чтобы совершить заказ
                            </p>

                            <SheetClose asChild>
                                <div>
                                    <Button className="w-56 h-12 text-base" size="lg">
                                        <ArrowLeft className="w-5 mr-2" />
                                        Вернуться назад
                                    </Button>
                                </div>
                            </SheetClose>
                        </div>
                    )}

                    {totalAmount > 0 && (
                        <React.Fragment>
                            <div className="-mx-6 mt-5 overflow-auto scrollbar flex-1">
                                {items.map((item) => (
                                    <div key={item.id} className="mb-2">
                                        <CartDrawerItem
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
                                    </div>
                                ))}
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

                                    <Link href="/checkout">
                                        <Button
                                            onClick={() => setRedirecting(true)}
                                            loading={redirecting}
                                            type="submit"
                                            className="w-full h-12 text-base"
                                        >
                                            Оформить заказ <ArrowRight className="w-5 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </SheetFooter>
                        </React.Fragment>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    )
}
