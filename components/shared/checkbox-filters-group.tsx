import React from "react"
import { FilterChecboxProps } from "./filter-checkbox"

type Item = FilterChecboxProps

interface Props {
    title: string
    items: Item[]
    defaultItems?: Item[]
    limit?: number
    serchInputPlaceholder?: string
    onChange?: (values: string[]) => void
    defaultValue?: string[]
    className?: string
}

export const CheckboxFilterGroup: React.FC<Props> = ({
    title,
    items,
    defaultItems,
    limit = 5,
    serchInputPlaceholder = "Поиск...",
    className,
    onChange,
    defaultValue,
}) => {
    return <div className={className}></div>
}
