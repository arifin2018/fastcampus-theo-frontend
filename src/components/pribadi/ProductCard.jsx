import {useEffect, useState} from "react"
import { Button } from "../ui/button"
import { IoAdd,IoRemove } from "react-icons/io5";
import { Link } from "react-router";

const ProductCard = (props) => {
    const {id,ImageUrl,title,price,stock} = props
    const [quantity, setquantity] = useState(0)

    function incrementQuantity() {
        if (quantity < stock) {
            setquantity(quantity + 1)
        }
    }
    
    function decrementQuantity() {
        if (quantity > 0) {
            setquantity(quantity - 1)
        }
    }

    useEffect(()=>{
    })

    return (
        <div className="p-4 border rounded-md flex flex-col gap-4 md:max-w-96 max-h-[32rem] min-h-80">
            <Link to={"/Product/"+id} className="aspect-square w-full overflow-hidden">
                {/* <img className="w-full" src="https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljl41ov0wv6g1f@resize_w450_nl.webp" alt="product" /> */}
                <img className="w-full" src={ImageUrl} alt="product" />
            </Link>

            <Link to={"/Product/"+id}>
                <p className="text-md">{title}</p>
                <p className="text-xl font-semibold">Rp {price.toLocaleString('id-ID')}</p>
                <p className="text-muted-foreground text-sm">In Stock: {stock}</p>
            </Link>

            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <Button disabled={quantity <= 0} onClick={decrementQuantity} variant="ghost" size="icon">
                        <IoRemove />
                    </Button>
                    <p className="text-lg font-bold">{quantity}</p>
                    <Button disabled={quantity >= stock} onClick={incrementQuantity} variant="ghost" size="icon">
                        <IoAdd />
                    </Button>
                </div>
                <Button disabled={stock <= 0} onClick={() => console.log("add to cart")} className="w-full">{
                    stock > 0 ?  "Add to cart" : "Out of stock"
                }</Button>
            </div>

        </div>
    )
}

export default ProductCard