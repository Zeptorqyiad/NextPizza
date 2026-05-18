import { Ingredient } from "@/lib/generated/prisma/client"
import { Api } from "@/services/api-client"
import React from "react"
import { useSet } from "react-use"

interface ReturnProps {
    ingredients: Ingredient[]
    loading: boolean
}

export const useFilterIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([])
    const [loading, setLoading] = React.useState(false)
    const [set, { toggle }] = useSet(new Set<string>([]))

    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true)
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchIngredients()
    }, [])

    return { ingredients, loading }
}
