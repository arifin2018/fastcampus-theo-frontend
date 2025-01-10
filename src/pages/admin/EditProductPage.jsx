import ProductForm from "@/components/forms/ProductForm"
import AdminLayout from "@/components/layouts/adminLayout"

function EditProductPage(){
    return (
        <AdminLayout title="Edit Product" description="Add new products">
            <AdminLayout>
                <ProductForm url="/product" redirectNavigate="/admin/products" cardTitle="Edit Add a new product" cardDescription ="Card Description"/>
            </AdminLayout>
        </AdminLayout>
    )
}

export default EditProductPage