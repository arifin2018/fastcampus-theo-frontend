import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useEffect } from "react";

function ProductForm(props) {
    const schema = z.object({
        name: z.string().min(3, { message: "Must be 3 or more characters long" }),
        price: z.number().int({ message: 'Required' }),
        stock: z.number().min(1, { message: 'Required' }),
        product_image: z.string().url({ message: "Invalid url" })
    });

    const {
        productRaw,
        onSubmit,
        loading
    } = props

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        resolver: zodResolver(schema),
        defaultValues:productRaw,
    });

    useEffect(() => {
        reset(productRaw);
    },[productRaw]);


    return (
        <div>
            <Card className="w-1/3">
                <CardHeader>
                    <CardTitle>{productRaw.cardTitle}</CardTitle>
                    <CardDescription>{productRaw.cardDescription}</CardDescription>
                </CardHeader>
                <CardContent>
                    {/* <form onSubmit={handleSubmit(props.onSubmit)} className="gap-3 flex"> */}
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
                            <button disabled={loading} type="submit" className={`bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded disabled:bg-gray-300`}>Submit add new product</button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    
    )
}

export default ProductForm