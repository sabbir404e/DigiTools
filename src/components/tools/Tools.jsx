import React from 'react';
import WritingImage from '../../assets/products/writing.png';
import { MdOutlineDone } from "react-icons/md";

const Tools = () => {
    return (
        <div className='flex flex-col mx-auto'>
            <div className='m-10 flex flex-col mx-auto'>
                <h2 className='font-bold text-4xl'>Premium Digital Tools</h2>
                <p>Choose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>
                <div className='flex justify-center items-center gap-5 m-5'>
                    <button className='btn w-30 rounded-full  bg-linear-to-r from-[#4f39f6] to-[#9514fa]'>Products</button>
                    <button className='btn w-30 rounded-full'>Cart(0)</button>
                </div>
            </div>

            <div className='cart-container grid grid-cols-3 mx-auto'>
                <div  className='cart-start bg-base-300 shadow-sm p-4 space-y-2'>
              <img src={WritingImage} alt="" className='w-10' />
              <h4 className='bg-amber-200 text-amber-600 w-20 p-[1px] rounded-full relative -top-13 -right-110'>Best Seller</h4>
              <h3 className='font-bold'>AI Writing Pro</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, officiis.</p>
              <h2 className='font-bold'>$29/Mo</h2>
              <p>
                <ul>
                    <li className='flex items-center'><MdOutlineDone />Unlimited AI generations</li>
                    <li className='flex items-center'><MdOutlineDone />50+ writing templates</li>
                    <li className='flex items-center'><MdOutlineDone />Grammer checker</li>
                </ul>
              </p>
              <button className='btn w-full flex justify-center items-center  bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full'>Buy Now</button>
            </div>
            </div>
            
        </div>
    );
};

export default Tools;