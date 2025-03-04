import { SigninPage } from "@/components/guards/SigninPage"
import Cart from "@/components/pribadi/cart"
import { Separator } from "@/components/ui/separator"

export const Carts = () => {
    return (
        <SigninPage>
            <main className="min-h-[78vh] max-w-screen-lg mx-auto w-full">
                <h1 className="text-3xl font-bold flex justify-start">My Cart</h1>
                <Separator/>

                <div className="flex gap-4 mt-4">
                    <Cart/>
                </div>
            </main>
        </SigninPage>
    )
}