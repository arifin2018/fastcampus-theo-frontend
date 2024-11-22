import Footer from "./components/pribadi/Footer"
import Header from "./components/pribadi/Header"
import ProductCard from "./components/pribadi/ProductCard"

const productRaw = [
  {
    name: "T-Shirt",
    price: 100000,
    stock: 10,
    ImageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljl41ov0wv6g1f@resize_w450_nl.webp"
  },
  {
    name: "T-Shirt2",
    price: 1002000,
    stock: 20,
    ImageUrl: "https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljl41ov0wv6g1f@resize_w450_nl.webp"
  }
]


function App() {
  const product = productRaw.map((product) => {
    return (
      <ProductCard key={product.name} ImageUrl={product.ImageUrl} title={product.name} price={product.price} stock={product.stock}/>
    )
  })
  // const product = [
  //   <ProductCard key={1} ImageUrl="https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljl41ov0wv6g1f@resize_w450_nl.webp" title="T-Shirt" price={100000} stock="10"/>,
  //   <ProductCard key={2} ImageUrl="https://down-id.img.susercontent.com/file/id-11134207-7qukx-ljl41ov0wv6g1f@resize_w450_nl.webp" title="T-Shirt" price={100000} stock="10"/>
  // ]

  return (
    <>
      <header className="h-14 border-b-4">
        <Header/>
      </header>

      <main>
        <section className="max-w-full max-auto p-4 pt-8 h-full">
          <div className="max-auto flex flex-col items-center justify-self-center text-center max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Become a trend-setter with us
            </h1>
            <p className="pt-6 text-lg max-w-prose text-muted-foreground">
              FastCampusCommerce Provides you with the finest clothings and ensures your confidence throughout your days.
            </p>
            <div className="grid grid-cols-2 gap-4 h-full">
              {product}
            </div>
          </div>
        </section>

      </main>

        <footer className="h-14 border-t-4 flex items-center justify-between font-bold px-10 mt-10">
          <Footer/>
        </footer>
    </>
  )
}

export default App
