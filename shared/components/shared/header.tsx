'use client'

import { useSearchParams } from 'next/navigation'
import { toast } from 'react-hot-toast'
import { User } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { CartButton, Container, SearchInput } from '@/shared/components/shared'
import { Button } from '@/shared/components/ui'
import { cn } from '@/shared/lib/utils'

interface Props {
    hasSearch?: boolean
    hasCart?: boolean
    className?: string
}

export const Header: React.FC<Props> = ({ hasSearch = true, hasCart = true, className }) => {
    const searchParams = useSearchParams()

    React.useEffect(() => {
        console.log(searchParams, 999)

        if (searchParams.has('paid')) {
            toast.success('Заказ успешно оплачен! Информация отправлена на почту.')
        }
    }, [])

    return (
        <header className={cn('border-b', className)}>
            <Container className="flex items-center justify-between py-8">
                <Link href="/">
                    <div className="flex items-center gap-4">
                        <Image src="/logo.png" alt="Logo" width={35} height={35} />

                        <div>
                            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
                            <p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>

                {hasSearch && (
                    <div className="mx-10 flex-1">
                        <SearchInput />
                    </div>
                )}

                <div className="flex items-center gap-3">
                    <Button variant="outline" className="flex items-center gap-1">
                        <User size={16} />
                        Войти
                    </Button>

                    {hasCart && <CartButton />}
                </div>
            </Container>
        </header>
    )
}
