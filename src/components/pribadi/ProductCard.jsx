import { Button } from "../ui/button"
import { IoAdd,IoRemove } from "react-icons/io5";

const ProductCard = (props) => {
    const {ImageUrl,title,price,stock} = props
    return (
        <div className="p-4 border rounded-md flex flex-col gap-4 md:max-w-96 max-h-96 min-h-80">
            <div className="aspect-square w-full overflow-hidden">
                {/* <img className="w-full" src="https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljl41ov0wv6g1f@resize_w450_nl.webp" alt="product" /> */}
                <img className="w-full" src={ImageUrl} alt="product" />
            </div>

            <div>
                <p className="text-md">{title}</p>
                <p className="text-xl font-semibold">Rp {price.toLocaleString('id-ID')}</p>
                <p className="text-muted-foreground text-sm">In Stock: {stock}</p>
            </div>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <Button variant="ghost" size="icon">
                        <IoRemove />
                    </Button>
                    <p className="text-lg font-bold">0</p>
                    <Button variant="ghost" size="icon">
                        <IoAdd />
                    </Button>
                </div>
                <Button onClick={() => console.log("add to cart")} className="w-full">Add to cart</Button>
            </div>

        </div>
    )
}

export default ProductCard