import Footer from "./components/pribadi/Footer"
import Header from "./components/pribadi/Header"
import ProductCard from "./components/pribadi/ProductCard"

function App() {

  return (
    <>
      <header className="h-[6vh] border-b-4">
        <Header/>
      </header>

      <main>
        <section className="max-w-full max-auto px-4 pt-8">
          <div className="max-auto flex flex-col items-center justify-self-center text-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Become a trend-setter with us
            </h1>
            <p className="pt-6 text-lg max-w-prose text-muted-foreground">
              FastCampusCommerce Provides you with the finest clothings and ensures your confidence throughout your days.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </section>

      </main>

        <footer className="h-[6vh] border-t-4 flex items-center justify-between font-bold px-10">
          <Footer/>
        </footer>
    </>
  )
}

export default App
