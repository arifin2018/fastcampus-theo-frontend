
import {  } from "react-router";
import { useEffect } from "react"
import { useNavigate,useParams } from "react-router";
import { axiosInstance } from "@/lib/axios";


function EditProductPage(){
    let navigate = useNavigate();
    const {productID} = useParams();


    const DeleteDataSingleProduct = async() => {
        try {
            await axiosInstance.delete(`product/${productID}`)
        } catch (error) {
            console.log("error");
            console.log(error);
        }
    }

    useEffect(()=>{
        DeleteDataSingleProduct()
        navigate("/admin/products");
    },[])

}

export default EditProductPage