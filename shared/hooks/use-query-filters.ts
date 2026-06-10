'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'
import qs from 'qs'

import { Filters } from './use-filters'

export const useQueryFilters = (filters: Filters) => {
    const isMounted = React.useRef(false)
    const router = useRouter()
    const searchParams = useSearchParams()

    React.useEffect(() => {
        if (isMounted) {
            const params = {
                ...filters.prices,
                pizzaTypes: Array.from(filters.pizzaTypes),
                sizes: Array.from(filters.sizes),
                ingredients: Array.from(filters.selectedIngredients),
            }
            const query = qs.stringify(params, {
                arrayFormat: 'comma',
            })

            const newUrl = `?${query}`

            if (newUrl === `?${searchParams.toString()}`) return

            router.push(newUrl, {
                scroll: false,
            })
        }

        isMounted.current = true
    }, [filters])
}
