import {useEffect, useState} from "react"
import { Button } from "../ui/button"
import { IoAdd,IoRemove } from "react-icons/io5";
import { Link } from "react-router";
import { axiosInstance } from "@/lib/axios";
import { useSelector } from "react-redux";
import getCartData from "@/lib/cartCheck";
import { useDispatch } from "react-redux";

const ProductCard = (props) => {
    const {id,ImageUrl,title,price,stock} = props
    const [quantity, setquantity] = useState(0)
    const getUserStore = useSelector(state => state.user)
    const dispatch = useDispatch()

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

    const postToCart = async()=>{
        let stockNow = 0
        const {data} = await axiosInstance.get(`/products/?id=${id}`)
        if (data.length > 0) {
            let stock = data[0].stock
            if (stock < quantity) {
                return alert("stock has running out,please refresh")
            }
        }

        try {
            const dataCart = await axiosInstance.get(`/carts/?userId=${getUserStore.Id ?? 0}&productId=${id}`)
            if (dataCart.data.length > 0 ) {
                dataCart.data[0].quantity += quantity
                await axiosInstance.put(`/carts/${dataCart.data[0].id}`,dataCart.data[0])
            }else{
                await axiosInstance.post("/carts",{
                    userId:getUserStore.Id ?? 0,
                    productId:id,
                    quantity:quantity
                })
            }

            
            if (data.length > 0) {
                let stock = data[0].stock
                stockNow = stock - quantity
                data[0].stock = stockNow
            }
            await axiosInstance.put(`/products/${id}`,data[0])
        } catch (error) {
            console.log(error);
        }
        getCartData(dispatch)
    }

    useEffect(()=>{

    })

    return (
        <div className="p-4 border rounded-md flex flex-col gap-4 md:max-w-96 max-h-[32rem] min-h-80">
            <Link to={"/Product/"+id} className="aspect-square w-full overflow-hidden">
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
                <Button disabled={stock <= 0 || quantity <= 0} onClick={postToCart} className="w-full">{
                    stock > 0 ?  "Add to cart" : "Out of stock"
                }</Button>
            </div>

        </div>
    )
}

export default ProductCard