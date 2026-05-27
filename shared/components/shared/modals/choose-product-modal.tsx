"use client"

import React from "react"
import { cn } from "@/shared/lib/utils"
import { DialogContent, Dialog } from "@/shared/components/ui/dialog"
import { useRouter } from "next/navigation"
import {
    ChoosePizzaForm,
    ChooseProductForm,
    VisuallyHiddenBlock,
} from "../index"
import { ProductWithRelations } from "@/@types/prisma"

interface Props {
    product: ProductWithRelations
    className?: string
}

export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
    const router = useRouter()
    const isPizzaForm = Boolean(product.items[0].pizzaType)

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                    "p-0! w-[1060px]! max-w-[1060px]! min-h-[500px]! bg-white overflow-hidden",
                    className,
                )}
            >
                <VisuallyHiddenBlock />

                {isPizzaForm ? (
                    <ChoosePizzaForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                        ingredients={product.ingredient}
                    />
                ) : (
                    <ChooseProductForm
                        imageUrl={product.imageUrl}
                        name={product.name}
                    />
                )}
            </DialogContent>
        </Dialog>
    )
}
