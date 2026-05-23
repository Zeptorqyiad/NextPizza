import {
    Container,
    ProductImage,
    Title,
    GroupVariants,
} from "@/components/shared"
import { prisma } from "@/prisma/prisma-client"
import { notFound } from "next/navigation"

export default async function ProductModalPage({
    params: { name },
}: {
    params: { name: string }
}) {
    const product = await prisma.product.findFirst({
        where: { name: String(name) },
    })

    if (!product) {
        return notFound()
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <ProductImage
                    imageUrl={product.imageUrl}
                    size={30}
                    className=""
                />

                <div className="w-[490px] bg-[#FCFCFC] p-7">
                    <Title
                        text={product.name}
                        size="md"
                        className="font-extrabold mb-1"
                    />

                    <p className="text-gray-400">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Mollitia similique ducimus assumenda accusantium
                        alias, nemo excepturi veritatis fuga perferendis minus
                        deleniti quibusdam soluta veniam dolores perspiciatis
                        possimus, ipsam quod? Quod.
                    </p>
                </div>

                <GroupVariants
                    items={[
                        {
                            name: "Маленькая",
                            value: "1",
                        },
                        { name: "Средняя", value: "2" },
                        { name: "Большая", value: "3" },
                    ]}
                />
            </div>
        </Container>
    )
}
