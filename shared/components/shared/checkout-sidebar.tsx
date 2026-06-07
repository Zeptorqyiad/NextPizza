import React from 'react'
import { ArrowRight, Package, Percent, Truck } from 'lucide-react'

import { WhiteBlock, CheckoutItemDetails } from '@/shared/components/shared'
import { cn } from '@/shared/lib/utils'
import { Button } from '../ui'

interface Props {
    className?: string
    totalAmount: number
}

const VAT = 15
const DELIVERY_PRICE = 250

export const CheckoutSidebar: React.FC<Props> = ({ className, totalAmount }) => {
    const vatPrice = Math.round((totalAmount * VAT) / 100)
    const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE

    return (
        <WhiteBlock className={cn('sticky p-6 top-4', className)}>
            <div className="flex flex-col gap-1">
                <span className="text-xl">Итого:</span>
                <span className="text-[34px] font-extrabold">{totalPrice} ₽</span>
            </div>

            <CheckoutItemDetails
                title={
                    <div className="flex items-center">
                        <Package size={18} className="mr-2 text-gray-400" />
                        Стоимость корзины:
                    </div>
                }
                value={`${totalAmount}`}
            />
            <CheckoutItemDetails
                title={
                    <div className="flex items-center">
                        <Percent size={18} className="mr-2 text-gray-400" />
                        Налоги:
                    </div>
                }
                value={`${vatPrice}`}
            />
            <CheckoutItemDetails
                title={
                    <div className="flex items-center">
                        <Truck size={18} className="mr-2 text-gray-400" />
                        Доставка:
                    </div>
                }
                value={`${DELIVERY_PRICE}`}
            />

            <Button type="submit" className="w-full h-14 rounded-2xl mt-6 text-base font-bold">
                Перейти к оплате
                <ArrowRight className="w-5 ml-2" />
            </Button>
        </WhiteBlock>
    )
}
