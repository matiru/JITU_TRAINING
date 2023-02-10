import React ,{useEffect,useState}from "react";
import './App.css'
import NavBar from './navBar'
import './main.css'
import Products from './products'

function App() {

const[products,setProducts] = useState([])

const getProducts = async()=>{
  let products = await fetch ("https://fakestoreapi.com/products")
  .then(res=>res.json());
  return products;

}
useEffect(() =>{
  ( function (){
   getProducts().then(res=>setProducts(res))


  } )() 

  console.log(products)

},[])

  return (
    <div className="App">


      <NavBar />
      <Products products={products}/>

    </div>
  )
}

export default App
