'use client'

import React from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'
import { zodResolver } from '@hookform/resolvers/zod'

import { FormProvider, useForm } from 'react-hook-form'
import { formRegisterSchema, TFormRegisterValues } from './schemas'
import { Button, FormInput, Title } from '@/shared/components'
import { registerUser } from '@/app/actions';

interface Props {
    onClose?: VoidFunction
}

export const RegisterForm: React.FC<Props> = ({ onClose }) => {
    const form = useForm<TFormRegisterValues>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            email: '',
            password: '',
            fullName: '',
            confirmPassword: '',
        },
    })

    const onSubmit = async (data: TFormRegisterValues) => {
        try {
            await registerUser({
                email: data.email,
                fullName: data.fullName,
                password: data.password,
            })

            toast.success('Регистрация успешна', {
                icon: '✅',
            })

            onClose?.()
        } catch (error) {
            console.log('error [REGISTER]', error)
            toast.error('Неверный E-mail или пароль', {
                icon: '❌',
            })
        }
    }

    return (
        <FormProvider {...form}>
            <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)}>
                <FormInput name="email" label="E-Mail" required />
                <FormInput name="fullName" label="Полное имя" required />
                <FormInput name="password" label="Пароль" type="password" required />
                <FormInput
                    name="confirmPassword"
                    label="Подтвердите пароль"
                    type="password"
                    required
                />

                <Button
                    loading={form.formState.isSubmitting}
                    className="h-12 text-base"
                    type="submit"
                >
                    Зарегистрироваться
                </Button>
            </form>
        </FormProvider>
    )
}
