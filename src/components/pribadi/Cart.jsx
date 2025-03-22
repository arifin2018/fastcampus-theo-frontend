import { Button } from "@/components/ui/button"
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";
import { axiosInstance } from "@/lib/axios";
import { useDispatch } from "react-redux";
import { useState } from "react";
// import { useEffect } from "react";
// import { useSelector } from "react-redux";

export default function Cart(props) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(props.quantity);


    function increaseQuantity() {
        setQuantity(quantity+1)
    }

    function decreaseQuantity() {
        if (quantity >= 2) {
            setQuantity(quantity-1)
        }
    }


    async function removeCart(){
        try {
            await axiosInstance.delete(`carts/${props.id}`)
            dispatch({ 
                type: "REMOVE_CART", 
                payload: props.id 
            });
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="flex">
            <div className="w-4/12 px-4">
                <img src={props.imageUrl} alt={props.imageUrl} className="w-full" />
            </div>

            <div className="flex flex-col justify-center w-full">
                <div className="flex justify-center flex-col">
                    <p>{props.title}</p>
                    <p className="font-bold">Rp. {props.price}</p>
                </div>
                <div className="flex justify-center gap-4">
                    <Button variants="ghost" size="icon" onClick={decreaseQuantity}>
                        <IoIosRemove />
                    </Button>
                    <p className="flex items-center">{quantity}</p>
                    <Button variants="ghost" size="icon" onClick={increaseQuantity}>
                        <IoIosAdd />
                    </Button>
                </div>
                <div className="flex justify-around">
                    <div className="flex gap-3 items-center">
                        <FcCheckmark className="h-6 w-6"/>
                        <span>Available</span>
                    </div>
                    <div>
                        <Button variant="ghost" onClick={removeCart}>
                            <span className="text-red-500">Remove Item</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}