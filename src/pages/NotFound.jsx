import { Link } from "react-router";

const NotFound = () =>{
    return (
        <>
            <section className="h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Pages not found</h1>
                <Link to="/home" className="pt-4 border-b-2 text-sm font-boldtracking-tight text-gray-600">back to home</Link>
            </section>
        </>
    )
}


export default NotFound