import ProductForm from "@/components/forms/ProductForm"
import AdminLayout from "@/components/layouts/adminLayout"
import { axiosInstance } from "@/lib/axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function EditProductPage(){
    const {productID} = useParams();

    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [productRaw, setProductRaw] = useState({
        name: "",
        product_image: "",
        stock: 0,
        price: 0
    })

    const getDataFirstForUpdate = async () => {
        try {
            const {data} = await axiosInstance.get(`product/${productID}`)
            setProductRaw({
                ...data,
                product_image: data.ImageUrl
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDataFirstForUpdate()
    },[]);

    useEffect(() => {
        console.log(productRaw);
    },[productRaw]);

    const onSubmit = async (data) => {
        setLoading(true)
        try {
            await axiosInstance.put(`/product/${productID}`,{
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
        <AdminLayout title="Edit Product" description="Add new products">
            <ProductForm loading={loading} productRaw={productRaw} onSubmit={onSubmit}/>
        </AdminLayout>
    )
}

export default EditProductPage