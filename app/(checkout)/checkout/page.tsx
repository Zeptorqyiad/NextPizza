'use client'

import React from 'react'
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-hot-toast'

import {
    CheckoutSidebar,
    Container,
    Title,
    CheckoutCart,
    CheckoutPersonalForm,
    CheckoutAddressForm,
} from '@/shared/components'
import { useCart } from '@/shared/hooks'
import { checkoutFormSchema, CheckoutFormValues } from '@/shared/constants'
import { createOrder } from '@/app/actions'

export default function CheckoutPage() {
    const [submitting, setSubmitting] = React.useState(false)
    const { totalAmount, updateItemQuantity, items, removeCartItem, loading } = useCart()

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: '',
        },
    })

    const onSubmit: SubmitHandler<CheckoutFormValues> = async (data) => {
        try {
            setSubmitting(true)

            await createOrder(data)

            toast.error('Заказ успешно оформлен! Переход на оплату', {
                icon: '✅',
            })
        } catch (error) {
            console.log(error)
            setSubmitting(false)
            
            toast.error('Не удалось создать заказ', {
                icon: '❌',
            })
        }
    }

    const onCLickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1

        updateItemQuantity(id, newQuantity)
    }

    return (
        <Container className="mt-10">
            <Title text="Оформление заказа" className="font-extrabold mb-8 text-[36px]" />

            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="flex gap-10">
                        <div className="flex flex-col gap-10 flex-1 mb-20">
                            <CheckoutCart
                                items={items}
                                onCLickCountButton={onCLickCountButton}
                                removeCartItem={removeCartItem}
                                loading={loading}
                            />

                            <CheckoutPersonalForm
                                className={loading ? 'opacity-40 pointer-events-none' : ''}
                            />

                            <CheckoutAddressForm />
                        </div>

                        <div className="w-[450px]">
                            <CheckoutSidebar
                                totalAmount={totalAmount}
                                loading={loading || submitting}
                                className={loading ? 'opacity-40 pointer-events-none' : ''}
                            />
                        </div>
                    </div>
                </form>
            </FormProvider>
        </Container>
    )
}
