import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react"
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    Username: z.string().min(1, { message: "Must be 5 or more characters long" }).max(5, { message: "Must be 5 or fewer characters long" }),
    Password: z.string().min(1, { message: "Must be 5 or more characters long" }).max(5, { message: "Must be 5 or fewer characters long" }),
  });

const login = () =>{
    const [CheckboxShowPassword, setCheckboxShowPassword] = useState(false)

    const form434 = useForm({
        defaultValues: {
            Username:'',
            Password:''
        },
        resolver: zodResolver(schema),
        reValidateMode:"onSubmit"
    })
    

    function handleCheckbox(e) {
        setCheckboxShowPassword(e)
    }

    function handleLogin(e){
        console.log(e);
    }

    return(
        <section className="h-[75vh] flex items-center justify-center">
            <Form {...form434}>
                <form onSubmit={form434.handleSubmit(handleLogin)} className="w-[35rem] border-2 border-gray-200">
                    <Card >
                        <CardHeader>
                            <CardTitle>Welcome to FastCampus</CardTitle>
                            <CardDescription> login page is a page that allows users to access a website or app by entering their username and password</CardDescription>
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
                            <div className="flex items-center gap-3 m-2">
                                <Checkbox onCheckedChange={handleCheckbox} id="showPassword"/>
                                <label htmlFor="showPassword">Show Password</label>
                            </div>
                        </CardContent>
                        <CardFooter className="flex flex-col justify-center pt-2 items-center w-full">
                            {/* <Button disabled={!form434.formState.isValid} type="submit" className="block w-full pt-2">Login</Button> */}
                            <Button type="submit" className="block w-full pt-2">Login</Button>
                            <Button variant="link" className="block w-full pt-2">Sign Up</Button>
                        </CardFooter>
                    </Card>
                </form>
            </Form>
        </section>
    )
}

export default login