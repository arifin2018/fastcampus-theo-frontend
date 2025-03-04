import ProductCard from "@/components/pribadi/ProductCard"
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";

// const productRaw2 = [
//   {
//     name: "T-Shirt",
//     price: 100000,
//     stock: 10,
//     ImageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljl41ov0wv6g1f@resize_w450_nl.webp"
//   },
//   {
//     name: "T-Shirt2",
//     price: 1002000,
//     stock: 10,
//     ImageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljl41ov0wv6g1f@resize_w450_nl.webp"
//   }
// ]

const Home = () =>{
    const [loading, setloading] = useState(false)
    const [productRaw, setProductRaw] = useState([])


    const productFetchData = async () =>{
        try {
            setloading(true)
            const response = await axiosInstance.get("/product")
            setProductRaw(response.data) 
        } finally{
            setloading(false)
        }
    }
    useEffect(() => {
        productFetchData()
    },[]);

    const product = productRaw.map((product) => {
        return (
            <ProductCard key={product.name} id={product.id} ImageUrl={product.ImageUrl} title={product.name} price={product.price} stock={product.stock}/>
        )
    })
    
    
    return (
        <>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Become a trend-setter with us
            </h1>
            <p className="pt-6 text-lg max-w-prose text-muted-foreground">
                FastCampusCommerce Provides you with the finest clothings and ensures your confidence throughout your days.
            </p>
            {
                loading ? 
                <p>Loading....</p> :
                <div className="grid grid-cols-2 gap-4 h-full">
                    {product}
                </div>
            }
        </>
    )
}


export default Home