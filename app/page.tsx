import {
    Title,
    TopBar,
    Container,
    Filters,
    ProductCard,
} from "@/components/shared"
import { ProductsGroupList } from "@/components/shared/products-group-list"
import Image from "next/image"
import React from "react"

export default function Home() {
    return (
        <React.Fragment>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold" />
            </Container>

            <TopBar />

            <Container className="mt-10 pb-[80px]">
                <div className="flex gap-15">
                    {/* Фильтрация */}
                    <div className="w-[250px]">
                        <Filters />
                    </div>

                    {/* Список товаров */}
                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            <ProductsGroupList
                                title="Пиццы"
                                items={[
                                    {
                                        id: 1,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 4,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 5,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 6,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 7,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 8,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 9,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                ]}
                                categoryId={0}
                            />
                            <ProductsGroupList
                                title="Комбо"
                                items={[
                                    {
                                        id: 1,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 4,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 5,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 6,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 7,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 8,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 9,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                ]}
                                categoryId={1}
                            />
                            <ProductsGroupList
                                title="Закуски"
                                items={[
                                    {
                                        id: 1,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 2,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 3,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 4,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 5,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 6,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 7,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 8,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                    {
                                        id: 9,
                                        name: "Чизбургер-пицца",
                                        imageUrl:
                                            "https://media.dodostatic.net/image/r:292x292/0198bf24170179679a7872f2ddf16d18.avif",
                                        price: 550,
                                        items: [{ price: 550 }],
                                    },
                                ]}
                                categoryId={2}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}
