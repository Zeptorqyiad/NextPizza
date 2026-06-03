import React, { Suspense } from 'react'

import { Title, TopBar, Container, Filters } from '@/shared/components/shared'
import { ProductsGroupList } from '@/shared/components/shared/products-group-list'
import { findPizzas, GetSearchParams } from '@/shared/lib/find-pizzas'

export default async function Home({ searchParams }: { searchParams: Promise<GetSearchParams> }) {
    const resolvedParams = await searchParams
    const categories = await findPizzas(resolvedParams)

    return (
        <React.Fragment>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar categories={categories.filter((category) => category.products.length > 0)} />

            <Container className="mt-10 pb-[80px]">
                <div className="flex gap-15">
                    <div className="w-[250px]">
                        <Suspense>
                            <Filters />
                        </Suspense>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {categories.map(
                                (category) =>
                                    category.products.length > 0 && (
                                        <ProductsGroupList
                                            key={category.id}
                                            title={category.name}
                                            categoryId={category.id}
                                            items={category.products}
                                        />
                                    ),
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}
