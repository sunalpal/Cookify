import { useContext } from "react"
import {Context}from "../context/ProductContext"
import ProductCard from "../components/ProductCard"
const Product = () => {
  const {data}=useContext(Context)

  const render=data.map((prod)=>(
    <ProductCard key={prod.id} product={prod}/>
  ))
  return (
    <div>

      {data.length >0 ? render:"No Product Found"}
    </div>
  )
}

export default Product