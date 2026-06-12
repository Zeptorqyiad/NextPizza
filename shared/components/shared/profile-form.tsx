'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { signOut } from 'next-auth/react'

import { User } from '@/shared/lib/generated/prisma/client'
import { formRegisterSchema, TFormRegisterValues } from './modals/auth-modal/forms/schemas'

import { Container, Title, FormInput } from '@/shared/components/shared'
import { Button } from '@/shared/components/ui'
import { updateUserInfo } from '@/app/actions';

interface Props {
    data: User
}

export const ProfileForm: React.FC<Props> = ({ data }) => {
    const form = useForm({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
            fullName: data.fullName,
            email: data.email,
            password: '',
            confirmPassword: '',
        },
    })

    const onSubmit = async (data: TFormRegisterValues) => {
        try {
            await updateUserInfo({
                email: data.email,
                fullName: data.fullName,
                password: data.password,
            })

            toast.error('Данные обновлены', {
                icon: '✅',
            })
        } catch (error) {
            console.log(error)
            return toast.error('Ошибка при обновлении данных', {
                icon: '❌',
            })
        }
    }

    const onClickSignOut = () => {
        signOut({
            callbackUrl: '/',
        })
    }

    return (
        <Container className="my-10">
            <Title text={`Личные данные | #${data.id}`} size="md" className="font-bold" />

            <FormProvider {...form}>
                <form
                    className="flex flex-col gap-5 w-96 mt-10"
                    onSubmit={form.handleSubmit(onSubmit)}
                >
                    <FormInput name="email" label="E-mail" required />
                    <FormInput name="fullName" label="Полное имя" required />

                    <FormInput type="password" name="password" label="Новый пароль" required />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        label="Повторите пароль"
                        required
                    />

                    <Button
                        onClick={onClickSignOut}
                        variant="secondary"
                        disabled={form.formState.isSubmitting}
                        className="text-base"
                        type="button"
                    >
                        Выйти
                    </Button>
                </form>
            </FormProvider>
        </Container>
    )
}
