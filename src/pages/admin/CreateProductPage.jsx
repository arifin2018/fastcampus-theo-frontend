import ProductForm from "@/components/forms/ProductForm"
import AdminLayout from "@/components/layouts/adminLayout"


function CreateProductPage(){
    
// url,redirectNavigate,cardTitle,cardDescription
    return (
        <AdminLayout>
            <ProductForm url="/product" redirectNavigate="/admin/products" cardTitle="Add a new product" cardDescription ="Card Description"/>
        </AdminLayout>
    )
}

export default CreateProductPage