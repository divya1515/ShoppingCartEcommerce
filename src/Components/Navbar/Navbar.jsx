import React, { useState , useContext } from 'react'
import ProductContext from '../../Context/ProductContext';
import logo from '../../../Logo.jpg'
import { Link, NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
function Navbar() {
    const [isActive, setisActive] = useState('/')
    const {count}=useContext(ProductContext)
    return (
        <>
            <div className='flex h-24 justify-between bg-slate-900 text-white p-2 text-lg'>
                <img src={logo} alt="LOGO" className='w-36' />
                <div className="flex justify-between p-7 w-1/4">
                    <NavLink
                        to="/"
                        className={`${isActive == '/' ? 'text-teal-200' : 'text-white'}`}
                        onClick={() => setisActive('/')}
                    >Store</NavLink>
                    <NavLink
                        to="/About"
                        className={`${isActive == '/About' ? 'text-teal-200' : 'text-white'}`}
                        onClick={() => setisActive('/About')}

                    >About</NavLink>

                    <NavLink
                        to="/Cart"
                        className={`flex items-center ${isActive == '/Cart' ? 'text-teal-200' : ''}`}
                        onClick={() => setisActive('/Cart')}
                    >
                       
                        <div className="relative">
                        <FaShoppingCart size={27}/>
                            {count !== 0 && (
            <div className="absolute top-0 right-0 h-5 w-5 bg-green-500 rounded-full flex items-center justify-center text-white text-s">
                {count}
            </div>)} Cart </div>
                                  
                        </NavLink>
                </div>
            </div>
        </>
    )
}

export default Navbar