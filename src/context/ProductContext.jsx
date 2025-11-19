import  {createContext,useState} from 'react'
import { useEffect } from 'react';

 export const  Context=createContext(null)
const ProductContext = (props) => {

const [data, setData] = useState([


]); 




  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("recipes")) || []);
  },[]);

  return (
    <Context.Provider value={{data,setData}}>{props.children}</Context.Provider>
  )
}

export default ProductContext