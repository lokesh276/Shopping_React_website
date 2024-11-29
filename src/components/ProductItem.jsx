import { useContext } from "react"
import { ShopContext } from "../context/ShopContext"
import { Link } from "react-router-dom"

function ProductItem({id,image,name,price}) {
    const {currency} =  useContext(ShopContext)
  return (
    <Link className="hover:animate-pulse" to={`/product/${id}`}>
      <div className="hover:transform hover:scale-110 transition-all ease-in-out duration-300 shadow-sm ">
        <img className="rounded-lg" src={image[0]} alt="" />
      </div>
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency} {price}
      </p>
    </Link>
  );
}

export default ProductItem