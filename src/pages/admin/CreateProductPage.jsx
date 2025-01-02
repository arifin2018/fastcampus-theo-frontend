import AdminLayout from "@/components/layouts/adminLayout"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const schema = z.object({
    name: z.string().min(3, { message: "Must be 3 or more characters long" }),
    price: z.number().int({ message: 'Required' }),
    stock: z.number().min(1, { message: 'Required' }),
    product_image: z.string().url({ message: "Invalid url" })
});
function CreateProductPage(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues: {
            name: "",
            product_image: "",
            stock: 0,
            price: 0
        },
    });

    const onSubmit = (data) => {console.log(data)}

    return (
        <AdminLayout>
            <h1>Create Product Page</h1>
            <div>
                <Card className="w-1/3">
                    <CardHeader>
                        <CardTitle>Add a new product</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="gap-3 flex">
                            <div className="flex flex-col gap-3 w-full">
                                <div className="flex flex-col gap-1">
                                    <label className="font-bold">Name</label>
                                    <input {...register('name')} className="border-2 border-gray-300 p-2 rounded-lg"/>
                                    <span className="text-red-400">
                                        {errors.name?.message && <p>{errors.name?.message}</p>}
                                    </span>
                                    <span className="text-gray-500">Product name minimum 3 character</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="font-bold">Price</label>
                                    <input type="number" {...register('price', { valueAsNumber: true })} className="border-2 border-zinc-300 p-2 rounded-lg"/>
                                    <span className="text-red-400">{errors.price?.message && <p>{errors.price?.message}</p>}</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="font-bold">Stock</label>
                                    <input type="number" {...register('stock', { valueAsNumber: true })} className="border-2 border-zinc-300 p-2 rounded-lg"/>
                                    <span className="text-red-400">
                                        {errors.stock?.message && <p>{errors.stock?.message}</p>}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="font-bold">Product Image</label>
                                    <input {...register('product_image')} className="border-2 border-zinc-300 p-2 rounded-lg"/>
                                    <span className="text-red-400">
                                        {errors.product_image?.message && <p>{errors.product_image?.message}</p>}
                                    </span>
                                    <span className="text-gray-500">Please use image valid a url</span>
                                </div>
                                <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Submit</button>
                            </div>
                            {/* <input type="number" {...register('age', { valueAsNumber: true })} className="border-2 border-zinc-600"/>
                            {errors.age?.message && <p>{errors.age?.message}</p>} 
                            <input type="submit" />*/}
                        </form>
                    </CardContent>
                    <CardFooter>
                        <p>Card Footer</p>
                    </CardFooter>
                </Card>
            </div>
        </AdminLayout>
    )
}

export default CreateProductPage