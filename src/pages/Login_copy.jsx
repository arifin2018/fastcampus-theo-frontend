import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

const login = () =>{
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")

    const [inputUsernameMessage, setUsernameMessage] = useState("")
    const [inputPasswordMessage, setPasswordMessage] = useState("")

    const [CheckboxShowPassword, setCheckboxShowPassword] = useState(false)

    function handleLogin() {
        const usernameIsValid = Username.length >= 3;
        const passwordIsValid = Password.length >= 8;

        if (!usernameIsValid) {
            alert("Username needs to be 3 characters or more ")
            return 
        }

        if (!passwordIsValid) {
            alert("Password needs to be 8 characters or more ")
            return 
        }
    }

    function handleCheckbox(e) {
        setCheckboxShowPassword(e)
    }

    return(
        <section className="h-[75vh] flex items-center justify-center">
            <form className="w-[35rem] border-2 border-gray-200">
                <Card >
                    <CardHeader>
                        <CardTitle>Welcome to FastCampus</CardTitle>
                        <CardDescription> login page is a page that allows users to access a website or app by entering their username and password</CardDescription>
                    </CardHeader>
                    <CardContent  className="border-y-2 border-gray-300 pt-1">
                        <div className="flex flex-col m-2">
                            <label htmlFor="Username" className="flex items-start w-full font-semibold py-1">Username</label>
                            <input onChange={(e) => {
                                if (e.target.value.length < 3) {
                                    setUsernameMessage("Username needs to be 3 characters or more ")
                                }else{
                                    setUsernameMessage(null)
                                }
                                setUsername(e.target.value)
                            }} className="block w-full border-2 rounded-md border-gray-400 p-1" type="text" id="Username" />
                            <p className="text-sm text-muted-foreground">{inputUsernameMessage}</p>
                        </div>
                        <div className="flex flex-col m-2">
                            <label htmlFor="Password" className="flex items-start w-full font-semibold py-1">Password</label>
                            <input onChange={(e) => {
                                if (e.target.value.length < 8) {
                                    setPasswordMessage("Password needs to be 8 characters or more ")
                                }else{
                                    setPasswordMessage(null)
                                }
                                setPassword(e.target.value)}
                            }  className="block w-full  border-2 rounded-md border-gray-400 p-1" type={CheckboxShowPassword ? "text" : "password"} id="Password" />

                            <p className="text-sm text-muted-foreground">{inputPasswordMessage}</p>
                        </div>
                        <div className="flex items-center gap-3 m-2">
                            <Checkbox onCheckedChange={handleCheckbox} id="showPassword"/>
                            <label htmlFor="showPassword">Show Password</label>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col justify-center pt-2 items-center w-full">
                        <Button type="submit" disabled={Username.length <= 3 || Password.length <= 8} onClick={() => handleLogin()} className="block w-full pt-2">Login</Button>
                        <Button variant="link" className="block w-full pt-2">Sign Up</Button>
                    </CardFooter>
                </Card>
            </form>
        </section>
    )
}

export default login