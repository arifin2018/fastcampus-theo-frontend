const ProductCard = () => {
    return (
        <div className="p-4 border rounded-md flex flex-col gap-4 md:max-w-96 md:max-h-96">
            <div className="aspect-square w-full overflow-hidden">
                <img className="w-full" src="https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljl41ov0wv6g1f@resize_w450_nl.webp" alt="product" />
            </div>

            <div>
            <p className="text-md">Dark blue t-shirt</p>
            <p className="text-xl font-semibold">Rp 100.000</p>
            <p className="text-muted-foreground text-sm">In Stock: 10</p>
            </div>
        </div>
    )
}

export default ProductCard