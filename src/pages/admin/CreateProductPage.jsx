import ProductForm from "@/components/forms/ProductForm"
import AdminLayout from "@/components/layouts/adminLayout"
import { axiosInstance } from "@/lib/axios"
import { useState } from "react";
import { useNavigate } from "react-router";


function CreateProductPage(){

    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [productRaw, setProductRaw] = useState({
        name: "",
        product_image: "",
        stock: 0,
        price: 0
    })


    const onSubmit = async (data) => {
        // setLoading(true)
        try {
            await axiosInstance.post(`/product`,{
                name:data.name,
                price:data.price,
                stock:data.stock,
                ImageUrl:data.product_image
            })
        } catch (error) {
            console.log(error);
        } finally{
            setLoading(false)
            navigate("/admin/products");
        }
    }
    return (
        <AdminLayout>
            <ProductForm loading={loading} productRaw={productRaw} onSubmit={onSubmit}/>
        </AdminLayout>
    )
}

export default CreateProductPage