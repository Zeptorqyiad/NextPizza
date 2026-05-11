import { Title, TopBar, Container, Filters } from "@/components/shared"
import Image from "next/image"
import React from "react"

export default function Home() {
    return (
        <React.Fragment>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="mt-10 pb-14">
                <div className="flex gap-15">
                    {/* Фильтрация */}
                    <div className="w-62.5">
                        <Filters />
                    </div>

                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            Список товаров
                            {/* <ProductGroupList title="Пиццы" items={[1, 2, 3, 4, 5]} />
                            <ProductGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}
