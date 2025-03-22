import { SigninPage } from "@/components/guards/SigninPage"
import Cart from "@/components/pribadi/cart"
import { Separator } from "@/components/ui/separator"
import { useSelector } from "react-redux";

export const Carts = () => {
    const carts = useSelector(state => state.cart);
    return (
        <SigninPage>
            <main className="min-h-[78vh] max-w-screen-lg mx-auto w-full">
                <h1 className="text-3xl font-bold flex justify-start">My Cart</h1>
                <Separator/>

                <div className="flex flex-col gap-4 mt-4">
                    {
                        carts.data.map(
                            (cart,index) => (
                                <div className="" key={index}>
                                    <Cart id={cart.id} userId={cart.userId} productId={cart.productId} product={cart.product} quantity={cart.quantity}/>
                                </div>
                            )
                        )
                    }
                </div>
            </main>
        </SigninPage>
    )
}