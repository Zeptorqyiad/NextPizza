import { Ingredient, Product, ProductItem } from "@/shared/lib/generated/prisma/client"

export type ProductWithRelations = Product & { items: ProductItem[]; ingredient: Ingredient[] }
