import { useRouter, useSearchParams } from "next/navigation"
import { Filters } from "./use-filters"
import React from "react"
import qs from "qs"

export const useQueryFilters = (filters: Filters) => {
    const router = useRouter()
    const searchParams = useSearchParams()

    React.useEffect(() => {
        const params = {
            ...filters.prices,
            pizzaTypes: Array.from(filters.pizzaTypes),
            sizes: Array.from(filters.sizes),
            ingredients: Array.from(filters.selectedIngredients),
        }
        const query = qs.stringify(params, {
            arrayFormat: "comma",
        })

        const newUrl = `?${query}`

        if (newUrl === `?${searchParams.toString()}`) return

        router.push(newUrl, {
            scroll: false,
        })
    }, [filters, router, searchParams])
}
