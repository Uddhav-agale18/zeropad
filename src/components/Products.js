import React from 'react'
import ProductBackground from "../Images/products_images/Rectangle.png"
import zeropadback from "../Images/products_images/zeropadBack.png"

const Products = () => {
  return (
    <div>
      <div
  className="relative w-full h-screen sm:h-[100vh] min-h-[100vh] lg:min-h-[60vh] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${ProductBackground}), url(${zeropadback})` }}
>
</div>

    </div>
  )
}

export default Products
