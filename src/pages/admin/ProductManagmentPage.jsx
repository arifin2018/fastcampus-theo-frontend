import AdminLayout from "@/components/layouts/adminLayout"
import { Button } from "@/components/ui/button"
import { IoAdd } from "react-icons/io5";
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { useSearchParams } from "react-router";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";



const ProductManagementPage = () =>{
    const [products,setProducts] = useState({
        data:[]
    })
    const [searchParams,setSearchParams] = useSearchParams()
    const [page,setPage] = useState(1)
    const [productSearch,setProductSearch] = useState('')
    const [productSearchTemp,setProductSearchTemp] = useState('')
    const [numberPagination,setNumberPagination] = useState([1])

    function numberPages(number) {
        setPage(number)
    }

    function handleSearchProduct() {
        setProductSearch(productSearchTemp)
        if (productSearchTemp == "") {
            searchParams.delete("name")
            setSearchParams(searchParams)
        }else{
            searchParams.set("name", productSearchTemp)
            setSearchParams(searchParams)
        }
        setPage(1)
    }

    function handleNextPage() {
        setPage(Number(page)+1)
    }

    function handlePreviousPage() {
        if (page > 1) {
            searchParams.set("page", page-1)
            setSearchParams(searchParams)
            setPage(page-1)
        }
    }

    function handleNumberPagination() {
        const number = [];
        let currentPage = page;
        let totalPages = products.last;
        const maxPagesToShow = 3; // Jumlah halaman yang akan ditampilkan di pagination
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2)); // Awal halaman

        // Pastikan pagination tidak melebihi total halaman
        if (startPage + maxPagesToShow - 1 > totalPages) {
            startPage = Math.max(1, totalPages - maxPagesToShow + 1);
        }

        for (let i = startPage; i < startPage + maxPagesToShow && i <= totalPages; i++) {
            number.push(i);
        }

        setNumberPagination(number)
    }

    async function fetchProduct() {
        let response
        try {
            response = await axiosInstance.get("/product",{
                params:{
                    _page:page,
                    _per_page:2,
                    name:productSearch
                }
            })
            setProducts(response.data)
        }finally{
            // console.info(products);
        }
    }

    useEffect(() => {
        if (searchParams.get("page") == null) {
            searchParams.set("page", 1)
        }else{
            searchParams.set("page", Number(searchParams.get("page")))
            setPage(Number(searchParams.get("page")))
        }
    },[])

    useEffect(() => {
        searchParams.set("page", page)
        setSearchParams(searchParams)
        fetchProduct()
    },[page])

    useEffect(() => {
        fetchProduct()
    },[searchParams])

    useEffect(()=>{
        handleNumberPagination()
    },[products])


    return (
        <>
            <AdminLayout
                namePageLayout="Product Management Page"
                sectionNamePageLayout="Manage our store&apos;s product"
                buttonPageLayout={
                <Link to="/admin/create/products">
                    <Button>
                        <IoAdd className="h-6 w-6 mr-2"></IoAdd>
                        Add Product
                    </Button>
                </Link>}
            >
            <div>

            <div className="mb-3">
                <Label>SearchBar</Label>
                <div className="flex">
                    <Input className="w-1/4 h-8 mr-3" onChange={e => setProductSearchTemp(e.target.value)} value={productSearchTemp}></Input>
                    <Button className="h-8" onClick={handleSearchProduct}>Search</Button>
                </div>
            </div>

            <Table className="mb-3">
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
                        products.data.map((product) => {
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
                    {/* <TableCell colSpan={3}>Total</TableCell>
                    <TableCell className="text-right">$2,500.00</TableCell> */}
                    </TableRow>
                </TableFooter>
            </Table>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <Button disabled={page <= 1 }>
                            <PaginationPrevious className="cursor-pointer" onClick={handlePreviousPage}/>
                        </Button>
                    </PaginationItem>
                    <PaginationItem>
                    </PaginationItem>
                    <PaginationItem>
                        {
                            numberPagination.map((number) => (
                                // href={`products?page=${number}`}
                                <PaginationLink key={number} onClick={()=>{
                                    numberPages(number)
                                }} className={`cursor-pointer ${number == page ? 'bg-primary text-white hover:bg-gray-400' : ''}`}>
                                    {number}
                                </PaginationLink>
                            ))
                        }
                    </PaginationItem>
                    <PaginationItem>
                    </PaginationItem>
                    <PaginationItem>
                        <Button disabled={page >= products.last}>
                            <PaginationNext className="cursor-pointer" onClick={handleNextPage}/>
                        </Button>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>

            </div>
            </AdminLayout>
        </>
    )
}

export default ProductManagementPage