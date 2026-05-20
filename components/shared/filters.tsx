"use client"

import React from "react"
import {
    FilterCheckbox,
    RangeSlider,
    Title,
    CheckboxFilterGroup,
} from "@/components/shared"
import { Input } from "../ui"
import { useFilterIngredients } from "@/hooks/useFilterIngredients"
import { fromBase62 } from "shadcn/preset"

interface Props {
    className?: string
}

interface PriceProps {
    priceFrom: number
    priceTo: number
}

export const Filters: React.FC<Props> = ({ className }) => {
    const { ingredients, loading, onAddId, selectedIds } =
        useFilterIngredients()
    const [prices, setPrices] = React.useState<PriceProps>({
        priceFrom: 0,
        priceTo: 1000,
    })

    const items = ingredients.map((item) => ({
        value: String(item.id),
        text: item.name,
    }))

    const updatePrice = (name: keyof PriceProps, value: number) => {
        setPrices({
            ...prices,
            [name]: value,
        })
    }

    return (
        <div className={className}>
            <Title
                text="Фильтрация"
                size="sm"
                className="mb-5 font-extrabold pb-4 border-b border-b-neutral-100"
            />

            <CheckboxFilterGroup
                title="Размеры"
                name="sizes"
                className="mb-5"
                title="Размеры"
                onClickCheckbox={toggleSizes}
                items={[
                    { text: "20см", value: "20" },
                    { text: "30см", value: "30" },
                    { text: "40см", value: "40" },
                ]}
            />

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex gap-3 mb-5">
                    <Input
                        type="number"
                        placeholder="0"
                        min={0}
                        max={1000}
                        value={String(prices.priceFrom)}
                        onChange={(e) =>
                            updatePrice("priceFrom", Number(e.target.value))
                        }
                    />
                    <Input
                        type="number"
                        placeholder="1000"
                        min={100}
                        max={1000}
                        value={String(prices.priceTo)}
                        onChange={(e) =>
                            updatePrice("priceTo", Number(e.target.value))
                        }
                    />
                </div>

                <RangeSlider
                    min={0}
                    max={1000}
                    step={10}
                    value={[prices.priceFrom, prices.priceTo]}
                    onValueChange={([priceFrom, priceTo]) =>
                        setPrices({ priceFrom, priceTo })
                    }
                />
            </div>

            <CheckboxFilterGroup
                title="Ингридиенты"
                className="mt-5"
                limit={6}
                defaultItems={items.slice(0, 6)}
                items={items}
                loading={loading}
                onClickCheckbox={onAddId}
                selectedIds={selectedIds}
                name={"ingridients"}
            />
        </div>
    )
}
