import { Button } from "@/components/ui/button"
import { IoIosRemove } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { FcCheckmark } from "react-icons/fc";

export default function Cart() {
    return (
        <>
            <div className="w-10/12 px-4">
                <img src="https://placehold.co/600x400" alt="https://placehold.co/600x400" className="w-full" />
            </div>

            <div className="flex flex-col justify-center w-full">
                <div className="flex justify-center flex-col">
                    <p>600x400</p>
                    <p className="font-bold">Rp. 200000</p>
                </div>
                <div className="flex justify-center gap-4">
                    <Button variants="ghost" size="icon">
                        <IoIosRemove />
                    </Button>
                    <p className="flex items-center">1</p>
                    <Button variants="ghost" size="icon">
                        <IoIosAdd />
                    </Button>
                </div>
                <div className="flex justify-around">
                    <div className="flex gap-3 items-center">
                        <FcCheckmark className="h-6 w-6"/>
                        <span>Available</span>
                    </div>
                    <div>
                        <Button variant="ghost">
                            <span className="text-red-500">Remove Item</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}