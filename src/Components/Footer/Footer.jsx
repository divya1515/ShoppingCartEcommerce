import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <div className="flex flex-col bg-slate-900 my-8 items-center py-2">
                <div className="items-center text-white">Online Shopping</div>
                <hr className="my-4 w-full mx-4" />
                <div className="flex items-center text-white">
                    <FaInstagram className="px-2"/>
                    <FaFacebook className="px-2"/>
                    <FaTwitter  className="px-2"/>
                </div>
                <div className="text-slate-300 items-center py-2">
                    <div className="py-1">Terms and Conditions  Privacy Policy</div>
                    <div className="py-1">Made by Divya Kaushik</div>
                    <div className="py-1">Copyright @2024</div>
                </div>
            </div>
        </>
    )
}

export default Footer