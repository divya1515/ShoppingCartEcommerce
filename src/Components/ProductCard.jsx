import React, { useContext, useEffect, useState } from "react";
import Button from '../Components/Button/Button'
import ProductContext from "../Context/ProductContext";
const ProductCard=React.memo(({product})=>{
    const {count,setcount}=useContext(ProductContext)
    const {cart , setToCart}=useContext(ProductContext)
    const [flg,setflg]=useState(0)
    if (!product) {
        return null; 
    }
    console.log(cart)
    const addtoCart=()=>{
         setcount(count=>count+1);
        
         setToCart([...cart,{product,quantity:1}])
    }
    const addmore=()=>{
        setcount(count=>count+1)
        setToCart(items=>{
            return items.map(item=>{
                if(item.product.id==product.id){
                    return{
                        ...item,
                        quantity:item.quantity+1
                    }
                }
                return item
            })
        })
    }
    // const addmore=()=>{
    //     console.log('Add More...');
    //     setcount(count=>count+1)
    //     setToCart(items=>{
    //         const index=items.findIndex(item=>item.product.id==product.id);
    //         const updateditems=[...items];
    //         updateditems[index].quantity+=1;
    //         return updateditems
    // })
    // }
     useEffect(()=>{
        if (cart.find(item => item.product.id === product.id)) {
            setflg(1);
          } else {
            setflg(0);
          }
     },[cart])
    return(
        <>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl m-2">
          <img src={product.image} alt={product.title} className="w-40 h-40"/>
          <div className="my-6 mx-2 p-2">
          <h2 className="text-xl font-medium text-center px-2">{product.title}</h2>
          <p className="text-lg font-normal">Price : ${product.price}</p>
          { flg!=0 && 
            <Button text="ADD MORE" textColor="text-gray-950" className="border-black
            border-2" bgColor="bg-white" onClick={addmore}/>}
          {flg==0 && <Button text="ADD TO CART" onClick={addtoCart}/>
          }
          </div>
        </div>
        </>
    )
});

export default ProductCard