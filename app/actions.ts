'use server'

import { cookies } from 'next/headers'

import { prisma } from '@/prisma/prisma-client'
import { PayOrderTemplate } from '@/shared/components'
import { CheckoutFormValues } from '@/shared/constants'
import { sendEmail } from '@/shared/lib'
import { OrderStatus } from '@/shared/lib/generated/prisma/client'

export async function createOrder(data: CheckoutFormValues) {
    try {
        const cookieStore = await cookies()
        const cartToken = cookieStore.get('cartToken')?.value

        if (!cartToken) {
            throw new Error('cart token not found')
        }

        // Находим корзину по токену
        const userCart = await prisma.cart.findFirst({
            include: {
                user: true,
                items: {
                    include: {
                        ingredients: true,
                        productItem: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
            where: {
                token: cartToken,
            },
        })

        // Если корзина не найдена, возвращаем ошибку
        if (!userCart) {
            throw new Error('Cart not found')
        }

        // Если корзина пустая, возвращаем ошибку
        if (userCart?.totalAmount === 0) {
            throw new Error('Cart is empty')
        }

        // Создаем заказ
        const order = await prisma.order.create({
            data: {
                token: cartToken,
                fullName: data.firstName + ' ' + data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                comment: data.comment,
                totalAmount: userCart.totalAmount,
                status: OrderStatus.PENDING,
                items: JSON.stringify(userCart.items),
            },
        })

        // Очищаем корзину
        await prisma.cart.update({
            where: {
                id: userCart.id,
            },
            data: {
                totalAmount: 0,
            },
        })

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id,
            },
        })

        // TODO Сделать создание ссылки оплаты
        await sendEmail(
            data.email,
            'Next Pizza | Оплатите заказ №' + order.id,
            await PayOrderTemplate({
                orderId: order.id,
                totalAmount: order.totalAmount,
                paymentUrl: 'https://resend.com/docs/send-with-nextjs',
            }),
        )
    } catch (error) {
        console.log('[CreateOrder] Server error', error)
    }
}
