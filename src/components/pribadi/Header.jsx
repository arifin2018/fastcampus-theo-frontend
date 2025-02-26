import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { IoCart,IoHeart } from "react-icons/io5";
import { Separator } from "../ui/separator";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Header = () => {

    const dispatch = useDispatch()
    const getUserStore = useSelector(state => state.user)
    useEffect(() => {
        console.log(getUserStore);
    }, [getUserStore]);


    const LogoutButton = (e)=>{
        console.log("arifin");
        console.log(e);

        localStorage.removeItem("current-user")

        dispatch({
            type:"SET_USER_LOGOUT"
        })
    }

    return (
        <>
            <div className="flex justify-between px-6 py-2 items-center">
                <Link to="home">
                    <p className="text-2xl font-bold hover:cursor-pointer">FastCampusCommerce</p>
                </Link>
                <Input placeholder="search anything..." className="max-w-[600px]"/>
                <div className="flex space-x-4 items-center justify-center">
                    <div className="flex flex-x-2">
                        <Button variant="ghost" className="p-2">
                            <Link to="cart">
                                <IoCart className="h-6 w-6"/>
                            </Link>
                        </Button>
                        <Button variant="ghost" className="p-2">
                            <IoHeart className="h-6 w-6"/>
                        </Button>
                    </div>
                    <Separator orientation="vertical" className="h-10 p-auto"/>
                    {
                        getUserStore?.Username != "" ? 
                        <>
                        <p className="text-center">Hello,{getUserStore?.Username}</p>
                        <Button className="bg-red-400" onClick={LogoutButton}>Logout</Button>
                        </>
                        : 
                        <>
                        <Link to="login">
                            <Button>
                                Log in
                            </Button>
                        </Link>
                        <Button variant="outline">Sign Up</Button>
                        </>
                    }
                </div>
            </div>

        </>
    )
}
export default Header