import { useParams } from "react-router-dom"
import { assets, products } from "../../assets/assets"
import { useShopContext } from "../../hooks/useShopContext"
import { ImageGallery } from "./X022"
import { Title3 } from "./°"
import { useEffect, useState } from "react"

function SamTv() {
    const { formatPrice } = useShopContext()
    const { id } = useParams()

    const [product, setProduct] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

    const listDesc = [
        "Powers the best 8K AI TV experience from Samsung, driving enhanced picture, sound, and experiences.",
        "See your content transformed into stunning 8K resolution for our sharpest and smoothest picture",
        "Say goodbye to cluttered cables. Connect your set-top box and other devices wirelessly to your TV.",
        "Get virtually no glare so all you see is the content on screen, even in bright rooms",
        "Enjoy fluid visuals at blisteringly fast speeds, at up to 4K 240Hz."
    ]

    useEffect(() => {
        const found = products.find((p) => p.id === id)
        setProduct(found)
        if (found?.sizes?.length) {
            setSelectedSize(found.sizes[0])
        }
    }, [id])

    if (!product || !selectedSize) return <div className="p-4 text-gray-600">Product not found.</div>

    return (
        <>
            <Title3
                total={selectedSize.price}
                savings={selectedSize.normal ? selectedSize.normal - selectedSize.price : 0}
                name={product.name}
                size={selectedSize.size}
                storage={256}
            />

            <div className="w-full gap-1 mt-4 h-[550px] flex justify-between pl-10 relative">
                <ImageGallery images={product.images} />

                <div className="flex-2 flex flex-col mt-4 h-full overflow-y-auto hide-scrollbar">
                    <H2 text="Key Features" />
                    <div className="w-full mb-1 flex gap-1 mt-2">
                        {[
                            { name: "NQ8 AI Gen3 Processor", src: assets.logo.s1s12s },
                            { name: "8K AI UpScaling Pro", src: assets.logo.s1s12s1 },
                            { name: "Wireless Connected", src: assets.logo.sjs },
                            { name: "Glare Free", src: assets.logo.shhsj }
                        ].map((f, i) => (
                            <div key={i} className="text-gray-500 flex flex-col w-1/4 items-center">
                                <img src={f.src} alt={f.name} className="w-12" />
                                <span>{f.name}</span>
                            </div>
                        ))}
                    </div>

                    <ul className="list-disc list-inside space-y-2 text-gray-700 md:ml-4 md:mr-2">
                        {listDesc.map((desc, i) => (
                            <li key={i}>{desc}</li>
                        ))}
                    </ul>

                    <H2 text="Size" />
                    <div className="w-full p-4 flex flex-wrap relative gap-2">
                        {product.sizes.map((e, i) => {
                            const isActive = selectedSize.size === e.size
                            return (
                                <div
                                    key={i}
                                    onClick={() => setSelectedSize(e)}
                                    className={`w-60 h-30 rounded-2xl border p-2 flex items-center justify-center flex-col cursor-pointer transition-all
                                        ${isActive ? "border-blue-600 bg-blue-50" : "border-gray-300 hover:border-gray-500"}`}
                                >
                                    <h1 className="text-xl md:text-2xl font-bold">{e.size}</h1>
                                    <div className="flex gap-1">
                                        <h2 className="text-xl font-semibold">{formatPrice(e.price)}</h2>
                                        {e.normal && (
                                            <h2 className="text-xl text-gray-500 line-through">{formatPrice(e.normal)}</h2>
                                        )}
                                    </div>
                                    {e.normal && (
                                        <h3 className="text-[#fc640ce0] font-bold">
                                            Saved {formatPrice(Math.floor(e.normal - e.price))}
                                        </h3>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    <H2 text="Trade-in" />
                    <p>
                        Samsung trade-in value up to{" "}
                        <span className="text-orange-500 font-semibold">{formatPrice(50)}</span>
                    </p>

                    <button
                        onClick={() => alert("Added to cart")}
                        className="w-96 p-4 mt-4 ml-8 cursor-pointer rounded-4xl bg-blue-700 text-white font-bold"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </>
    )
}

const H2 = ({ text }) => (
    <h2 className="text-xl md:text-2xl font-bold mt-4">{text}</h2>
)

export default SamTv
