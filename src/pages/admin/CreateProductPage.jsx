import AdminLayout from "@/components/layouts/adminLayout"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    name: z.string().min(1, { message: 'Required' }),
    age: z.number().min(1),
  });
function CreateProductPage(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <AdminLayout>
            <h1>Create Product Page</h1>
            <div>
                <form onSubmit={handleSubmit((d) => console.log(d))} className="gap-3 flex">
                    <input {...register('name')} className="border-2 border-zinc-600"/>
                    {errors.name?.message && <p>{errors.name?.message}</p>}
                    <input type="number" {...register('age', { valueAsNumber: true })} className="border-2 border-zinc-600"/>
                    {errors.age?.message && <p>{errors.age?.message}</p>}
                    <input type="submit" />
                </form>
            </div>
        </AdminLayout>
    )
}

export default CreateProductPage