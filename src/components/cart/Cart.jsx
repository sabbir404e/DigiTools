import React from 'react';

const Cart = () => {
    return (
        <div className='bg-base-300 shadow-sm flex flex-col mx-auto rounded-lg m-10'>
            <h2 className='font-bold p-5'>Your Cart</h2>
            <div>

                <div className='flex justify-around'>
                <div>
                    <img src="" alt="" />
                    <h3 className='font-bold'>AI Writing Pro</h3>
                     <h4>$29</h4>
                </div>
                <div>
                   <button className='btn text-red-500'>Remove</button>
                </div>
                </div>
                
                <div className='flex justify-between p-5'>
                    <div><h4>Total</h4></div>
                    <div><p className='font-bold'>$78</p></div>
                </div>

            </div>
                <div className='p-5'>
                    <button className='btn w-full text-white bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full'>Processed To Checkout</button>
                </div>
             <div>

             </div>
        </div>
    );
};

export default Cart;