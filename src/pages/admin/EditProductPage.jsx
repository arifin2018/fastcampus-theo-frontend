import ProductForm from "@/components/forms/ProductForm"
import AdminLayout from "@/components/layouts/adminLayout"
import { useEffect } from "react";
import { useParams } from "react-router";

function EditProductPage(){
    const {productID} = useParams();

    useEffect(()=>{
        console.log(productID);
    },[])

    return (
        <AdminLayout title="Edit Product" description="Add new products">
            <ProductForm url="/product" redirectNavigate="/admin/products" cardTitle="Edit Add a new product" cardDescription ="Card Description" urlGetDataUpdate={`product/${productID}`}/>
        </AdminLayout>
    )
}

export default EditProductPage