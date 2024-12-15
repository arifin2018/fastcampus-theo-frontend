import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IoAdd,IoRemove,IoHeartOutline } from "react-icons/io5";
import { axiosInstance } from "@/lib/axios";


const ProductDetailPage = () => {
  const params = useParams()
  const [loading, setloading] = useState(false)
  const [productRaw, setProductRaw] = useState({
    name: "",
    price: 0,
    stock: 0,
    ImageUrl: ""
  })
  const [quantity, setQuantity]= useState(0)


  const ProductDetailFetchData = async ()=>{
    try {
      setloading(true)
      const response = await axiosInstance.get(`/product/`+params.id)
      setProductRaw(response.data) 
    } finally{
      setloading(false)
    }
  }
  function incrementQuantity() {
    if (quantity < productRaw.stock) {
        setQuantity(quantity + 1)
    }
  }

  function decrementQuantity() {
      if (quantity > 0) {
          setQuantity(quantity - 1)
      }
  }

  useEffect(()=>{
    ProductDetailFetchData()
  },[])

  useEffect(()=>{
    console.log(productRaw);
  },[productRaw])
  
  
  return (
        <main className="min-h-screen max-w-screen-lg px-4 mt-8">
            {loading ? 
              <div>
                <h3>Loading...</h3>
              </div>
            :
              <div className="grid grid-cols-2 gap-8">
                  <img src={productRaw.ImageUrl} alt={productRaw.name} className="w-full" />
                  
                  <div className="flex flex-col gap-1 justify-center">
                    <h1 className="text-xl">{productRaw.name}   {params.id}</h1>
                    <h3 className="text-3xl fond-bold">
                      Rp. {productRaw.price.toLocaleString("id-ID")}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-4">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, voluptates quidem? Necessitatibus voluptatibus praesentium excepturi quod harum corrupti maxime, repellat accusamus unde dolorem eius laboriosam!
                    </p>

                    <div className="flex items-center gap-8 mt-6">
                      <Button variant="ghost" size="icon" onClick={decrementQuantity}>
                          <IoRemove className="h-6 w-6"/>
                      </Button>
                      <p className="text-lg font-bold">{quantity}</p>
                      <Button variant="ghost" size="icon" onClick={incrementQuantity}>
                          <IoAdd className="h-6 w-6"/>
                      </Button>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                      <Button className="w-full" size="lg">
                          Add to cart
                      </Button>
                      <Button size="icon" variant="ghost">
                        <IoHeartOutline className="h-6 w-6"/>
                      </Button>
                    </div>
                  </div>
              </div>
            }
        </main>
    )
}

export default ProductDetailPage