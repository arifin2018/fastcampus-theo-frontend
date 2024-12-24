import AdminLayout from "@/components/layouts/adminLayout"
import { Button } from "@/components/ui/button"
import { IoAdd } from "react-icons/io5";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { IoEllipsisHorizontal } from "react-icons/io5";



const ProductManagementPage = () =>{
    const [products,setProducts] = useState([])


    async function fetchProduct() {

        try {
            const response = await axiosInstance.get("/product")
            setProducts(response.data)
        } finally{
            console.log("arifin");
        }
    }

    useEffect(() => {
        fetchProduct()
    },[])


    return (
        <>
            <AdminLayout
                namePageLayout="Product Management Page"
                sectionNamePageLayout="Manage our store&apos;s product"
                buttonPageLayout={
                <Button>
                    <IoAdd className="h-6 w-6 mr-2"></IoAdd>
                    Add Product
                </Button>}
            >
            <div>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Image url</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        products.map((product) => {
                            return (
                                <TableRow key={product.id}>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.stock}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="icon">
                                            <IoEllipsisHorizontal/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
                <TableFooter>
                    <TableRow>
                    <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
            </div>
            </AdminLayout>
        </>
    )
}

export default ProductManagementPage