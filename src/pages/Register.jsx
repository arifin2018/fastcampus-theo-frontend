import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { axiosInstance } from "@/lib/axios";

const schema = z.object({
    Username: z.string().min(1, { message: "Must be 5 or more characters long" }).max(5, { message: "Must be 5 or fewer characters long" }),
    Password: z.string().min(1, { message: "Must be 5 or more characters long" }).max(5, { message: "Must be 5 or fewer characters long" }),
    RepeatPassword: z.string().min(1, { message: "Must be 5 or more characters long" }).max(5, { message: "Must be 5 or fewer characters long" }),
  }).superRefine(({ RepeatPassword, Password }, ctx) => {
    if (RepeatPassword !== Password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ['RepeatPassword']
      });
    }});

const Register = () =>{
    const [CheckboxShowPassword, setCheckboxShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const form434 = useForm({
        defaultValues: {
            Username:'',
            Password:'',
            RepeatPassword:''
        },
        resolver: zodResolver(schema),
        reValidateMode:"onSubmit"
    })
    

    function handleCheckbox(e) {
        setCheckboxShowPassword(e)
    }

    async function handleRegister(e){
        setLoading(true)
        let checkUserLength = await checkUserAPI(e);
        if (checkUserLength < 1) {
            await registerUserAPI(e);
        }else{
            alert("user already exist")
        }
        setLoading(false)
    }

    async function checkUserAPI(params){
        const {Username} = params
        try {
            const {data} = await axiosInstance.get(`/users?Username=${Username}`)
            return data.length
        } catch (error) {
            console.log(error);
            return 0
        }
    }

    async function registerUserAPI(params) {
        try {
            await axiosInstance.post("/users",params)
        } catch (error) {
            console.info("error registerUserAPI")
            console.log(error);
        }
    }

    return(
        <section className="h-[75vh] flex items-center justify-center">
            <Form {...form434}>
                <fieldset disabled={loading}>
                    <form onSubmit={form434.handleSubmit(handleRegister)} className="w-[35rem] border-2 border-gray-200">
                        <Card >
                            <CardHeader>
                                <CardTitle>Welcome to FastCampus</CardTitle>
                                <CardDescription> Register page is a page that allows users to access a website or app by entering their username and password</CardDescription>
                            </CardHeader>
                            <CardContent  className="border-y-2 border-gray-300 pt-1">
                                <div className="flex flex-col m-2">
                                    <FormField
                                        control={form434.control}
                                        name="Username"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className="flex items-start w-full font-semibold py-1">Username</FormLabel>
                                            <FormControl>
                                                <Input className="block w-full border-2 rounded-md border-gray-400 p-1" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col m-2">
                                    <FormField
                                        control={form434.control}
                                        name="Password"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className="flex items-start w-full font-semibold py-1">Password</FormLabel>
                                            <FormControl>
                                                <Input className="block w-full border-2 rounded-md border-gray-400 p-1" type={CheckboxShowPassword ? "text" : "password"}  {...field} />
                                            </FormControl>
                                            <FormMessage className="text-orange-500">{form434.errors?.message}</FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex flex-col m-2">
                                    <FormField
                                        control={form434.control}
                                        name="RepeatPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                            <FormLabel className="flex items-start w-full font-semibold py-1">Repeat Password</FormLabel>
                                            <FormControl>
                                                <Input className="block w-full border-2 rounded-md border-gray-400 p-1" type={CheckboxShowPassword ? "text" : "password"}  {...field} />
                                            </FormControl>
                                            <FormMessage className="text-orange-500">{form434.errors?.message}</FormMessage>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="flex items-center gap-3 m-2">
                                    <Checkbox onCheckedChange={handleCheckbox} id="showPassword"/>
                                    <label htmlFor="showPassword">Show Password</label>
                                </div>
                            </CardContent>
                            <CardFooter className="flex flex-col justify-center pt-2 items-center w-full">
                                <Button disabled={loading} type="submit" className="block w-full pt-2">Register</Button>
                                <Button variant="link" className="block w-full pt-2">Login</Button>
                            </CardFooter>
                        </Card>
                    </form>
                </fieldset>
            </Form>
        </section>
    )
}

export default Register