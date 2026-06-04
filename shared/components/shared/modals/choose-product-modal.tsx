'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

import { cn } from '@/shared/lib/utils'
import { DialogContent, Dialog } from '@/shared/components/ui/dialog'
import { ProductForm, VisuallyHiddenBlock } from '../index'
import { ProductWithRelations } from '@/@types/prisma'

interface Props {
    product: ProductWithRelations
    className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter()

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    'p-0! w-[1060px]! max-w-[1060px]! min-h-[500px]! bg-white overflow-hidden',
                    className,
                )}
            >
                <VisuallyHiddenBlock />

                <ProductForm product={product} onSubmit={() => router.back()} />
            </DialogContent>
        </Dialog>
    )
}
