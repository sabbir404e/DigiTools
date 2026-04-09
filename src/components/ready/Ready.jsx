import React from 'react';

const Ready = () => {
    return (
        <div className='h-80 bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex flex-col justify-center items-center space-y-5'>

            <div>
                <h2 className='font-bold text-2xl text-white'>Ready to Transform Your Workflow?</h2>
            </div>

            <div>
                <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter.<br></br> Start your free trial today.</p>
            </div>

            <div className='flex gap-5'>
               <button className='text-xl border border-base-300 p-2 rounded-full text-[#4f39f6] bg-base-100'>Explore Products</button>
               <button className='text-xl border border-base-300 p-2 text-white rounded-full'>View Pricing</button>
            </div>

            <div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>

        </div>
    );
};

export default Ready;