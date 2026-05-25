import { Ingredient, Product, ProductItem } from "@/lib/generated/prisma/client"

export type ProductWithRelations = Product & { items: ProductItem[]; ingredient: Ingredient[] }
