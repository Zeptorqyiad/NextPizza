import {
    Cart,
    CartItem,
    Ingredient,
    Product,
    ProductItem,
} from '@/shared/lib/generated/prisma/client'

export type CartItemDTO = CartItem & {
    productItem: ProductItem & {
        product: Product
    }
    ingredients: Ingredient[]
}

export interface CartDTO extends Cart {
    items: CartItemDTO[]
}
