import React, { useContext, useState,useEffect } from 'react'
import ProductContext from '../../Context/ProductContext'
import Button from '../Button/Button'
import Cartitem from '../Cartitem'

function Cart(){
    const {count,setcount,cart,setToCart}=useContext(ProductContext)
    const [checked,setchecked]=useState(false)
    const [payment,setpayment]=useState(0);
    useEffect(()=>{
      let pay=0;
      cart.forEach(element => {
        pay+=element.product.price*element.quantity;
      });
       setpayment(pay)
    },[count])
    const clear=()=>{
      setcount(0);
      setToCart([])
    }
    const paid=()=>{
      setcount(0);
      setToCart([])
      setchecked(check=>!check)
    }
    return (
        <>
          <div className='text-blue-950 text-3xl font-medium text-center px-2'>CART</div>
         {count==0 && <div className='m-5 text-blue-900 flex justify-center'>Your Cart is Empty</div>}
         {checked==true && <div className='text-green-600 font-semibold flex justify-center'>Your checkout is successful</div>}
         {count!=0 && 
         <div className='flex my-6'>
            <div className='flex flex-col space-y-4 px-44 py-2'>
            {cart.map((item,index)=>(
              <Cartitem key={index} item={item}/>
            ))}
            </div>
            <div className='flex flex-col p-8 space-y-4 shadow-xl m-2'>
              <div>Total Items : 
                <div className='font-semibold'>{count}</div></div>
              <div>Total Payment: 
              <div className='font-semibold'>${payment}</div>
              </div>
              <hr/>
              <Button text="CHECKOUT" bgColor="bg-slate-900" textColor='text-white' onClick={paid}/>
              <Button text="CLEAR" bgColor="bg-slate-400" textColor='text-black' onClick={clear}/>
            </div>
        </div>}
        </>
    )
}

export default Cart