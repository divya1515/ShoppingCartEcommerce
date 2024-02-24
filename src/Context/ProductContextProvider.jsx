import React, { useEffect, useState } from 'react'
import ProductContext from './ProductContext'

const ProductContextProvider=({children})=>{
    const [count, setcount] = useState(0);
    const [quant,setquant]=useState([]);
    const [cart, setToCart] = useState([]);
//      cart [{
//          product,
//          quantity
//     },
// {

// }]
//     const setToCart = (product, quantity) => {
//     setCart([...cart, { product, quantity }]);
//   };
console.log(cart)
    return(
        <ProductContext.Provider value={{count,setcount,cart,setToCart,quant,setquant}}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider