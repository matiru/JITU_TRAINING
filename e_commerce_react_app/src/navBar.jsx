import React ,{useEffect,useState}from "react";




const NavBar = () => {

const [nav_items, setnav_items] = useState([])



useEffect(() => {
    (async()=>{
          await fetch("https://fakestoreapi.com/products/categories")
          .then(res=>res.json()
          .then(res=>setnav_items(res)))
    })()

}, [])








return(

    <div className="nav">
    <div className="icon">
    <h1>  GM</h1>
    </div>
    <div className="navbar">
        {nav_items.map(item=><li key={item}>{item}</li>)}

    </div>
    <div className="cart">
          {/* <i className="far fa-cart-plus "></i> */}
          <button>cart</button>
          <span className="counter">0</span>
    </div>
    <div className="menu">
          <i className="fas fa-bars"></i>
    </div>
</div>


)


}

export default NavBar