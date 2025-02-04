
import { useLocation } from "react-router";
import { useEffect } from "react"
import { useNavigate } from "react-router";
import { axiosInstance } from "@/lib/axios";


function EditProductPage(){
    let navigate = useNavigate();
    const location = useLocation();
    const data = location.state;



    const DeleteDataSingleProduct = async(id) => {
        try {
            await axiosInstance.delete(`product/${id}`)
        } catch (error) {
            console.log("error");
            console.log(error);
        }
    }

    useEffect(()=>{
        console.log(data);
        
        const deleteConfirm = confirm("are you sure?")
        if (deleteConfirm) {
            data.forEach(element => {
                DeleteDataSingleProduct(element)
            });
        }
        navigate("/admin/products");
    },[])

}

export default EditProductPage