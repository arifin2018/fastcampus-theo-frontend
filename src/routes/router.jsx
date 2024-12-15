import App from "@/App"
import Footer from "@/components/pribadi/Footer"
import Header from "@/components/pribadi/Header"
import Home from "@/pages/Home"
import Login from "@/pages/Login"
import NotFound from "@/pages/NotFound"
import ProductDetailPage from "@/pages/ProductDetailPage"
import { BrowserRouter, Routes, Route} from "react-router";

const router = () =>{
    return(
        <BrowserRouter>
            <header className="h-14 border-b-4">
                <Header/>
            </header>
            <main>
                <section className="max-w-full max-auto p-4 pt-8 h-full">
                    <div className="max-auto flex flex-col items-center justify-self-center text-center max-w-3xl">
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/Product/:id" state="../../db.json" element={<ProductDetailPage />}  />
                            <Route path="/login" element={<Login />} />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </section>
            </main>
            <footer className="h-14 border-t-4 flex items-center justify-between font-bold px-10 mt-10">
                <Footer/>
            </footer>
        </BrowserRouter>
    )
}

export default router