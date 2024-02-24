import React, { useState, useEffect } from 'react'
import ProductCard from '../ProductCard';
function Store() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        ; (async () => {
            const res = await fetch('https://fakestoreapi.com/products');
            const data = await res.json();
            setproducts(data)
           
        })()
    }, [])
    return (
        <>
            <div className='text-blue-950 text-3xl font-medium text-center px-2'>STORE</div>
            <div className='mx-10 my-6 '>
                <input
                    type="text"
                    className="border-none outline-none p-2 rounded-md shadow-md"
                    placeholder="Search Product"
                />
                <div className='mx-10 my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>

                    {products.map(product=>{
                        return(
                            <ProductCard key={product.id} product={product}/>
                        )
                    })}
                   
                </div>
               

            </div>
        </>
    )
}

export default Store