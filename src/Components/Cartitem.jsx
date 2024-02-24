import React, { useState, useEffect, useContext } from 'react'
import ProductContext from '../Context/ProductContext';
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function Cartitem({ item }) {
    const {cart,setToCart,count,setcount}=useContext(ProductContext)
    const words=item.product.title.split(' ');
    const firstTwoWords=words.slice(0,2).join(' ');
    const Add=()=>{
        setcount(count=>count+1)
        setToCart(items=>{
            return items.map(item1=>{
                if(item1.product.id==item.product.id){
                    return{
                        ...item1,
                        quantity:item1.quantity+1
                    }
                }
                return item1
            })
        })
    }
    const Reduce=()=>{
        setcount(count=>count-1);
        setToCart(items=>{
            return items.map(singleitem=>{
                if(singleitem.product.id==item.product.id){
                    return{
                        ...singleitem,
                        quantity:singleitem.quantity-1
                    }
                }
                return singleitem
            })
        })
    }
    const Remove=()=>{
        setcount(count=>count-1)
        setToCart(items=>{
            return items.filter(singleitem=>{
                if(singleitem.product.id!=item.product.id)
                return singleitem
            })
        })
    }
    return (
        <>
            <div className='flex space-x-5 h-28 mx-9 w-fit p-2'>

                <img src={item.product.image} alt={item.product.title} className='w-24 h-24 object-contain mr-4' />
                <div className='flex flex-col space-y-2 p-2'>
                    <div className="text-xl font-medium">{firstTwoWords}</div>
                    <p className="text-lg font-normal">Price : ${item.product.price}</p>
                </div>
                <div className='text-current m-2'>Quantity:{item.quantity}</div>
                <div className='flex'>
                    <IoMdAddCircle className='m-2 text-3xl' onClick={Add}/>
                    {item.quantity != 1 && <IoMdRemoveCircle className='m-2 text-3xl' onClick={Reduce}/>}
                    {item.quantity == 1 && <MdDelete className='m-2 text-3xl' onClick={Remove}/>}
                </div>
            </div>


        </>
    )
}

export default Cartitem