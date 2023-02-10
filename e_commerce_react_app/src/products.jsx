 import React from "react";
import Product from "./product";



const Products =({products}) =>{
    /// log if products is an array 

    console.log(Array.isArray(products))
    
    return(
        <div className="products">

        
    {products.map(product=>
    <Product key ={product.id} product={product} />)}

        </div>
    )
}

export default Products 