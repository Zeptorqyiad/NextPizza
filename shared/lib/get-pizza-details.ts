import { mapPizzaType, PizzaSize, PizzaType } from '../constants/pizza'

export const getPizzaDetails = (
    size: PizzaSize,
    type: PizzaType,
    selectedIngredients: Set<number>,
) => {
    const isSelectedIngredients =
        selectedIngredients.size > 0 ? `, выбранных ингредиентов: ${selectedIngredients.size}` : ''

    return `${size} см, ${mapPizzaType[type]} тесто${isSelectedIngredients}`
}
