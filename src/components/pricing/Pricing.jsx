import React from 'react';
import { MdOutlineDone } from "react-icons/md";

const Pricing = () => {
    return (
        <div>
            <div className='flex flex-col mx-auto m-10'>
                        <div className='m-10 flex flex-col mx-auto'>
                            <h2 className='font-bold text-4xl'>Simple, Transparent Pricing</h2>
                            <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                        </div>
            
                       <div className='pricing-card grid grid-cols-3 gap-4 mx-auto'>
                           
                            
                        <div  className='cart-start bg-base-300 shadow-sm p-4 space-y-2 rounded-lg'>
                          <h3 className='font-bold text-2xl'>Starter</h3>
                          <p>Perfect for getting started</p>
                          <h2 className='font-bold text-2xl'>$0/Month</h2>
                          
                            <ul className='mb-22'>
                                <li className='flex items-center'><MdOutlineDone /> Access to 10 free tools</li>
                                <li className='flex items-center'><MdOutlineDone /> Basic templates</li>
                                <li className='flex items-center'><MdOutlineDone /> Community support</li>
                                <li className='flex items-center'><MdOutlineDone /> 1 project per month</li>
                            </ul>
                          
                          <button className='btn w-full flex justify-center items-center  bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full'>Get Started Free</button>
                        </div>
                        

                         
                            <div  className='cart-start bg-linear-to-r from-[#4f39f6] to-[#9514fa] shadow-sm p-4 space-y-2 rounded-lg'>
                          <h4 className='bg-amber-200 text-amber-600 w-25 p-[1px] rounded-full relative -top-8 -right-14'>Most Popular</h4>
                          <h3 className='font-bold text-white text-2xl'>Pro</h3>
                          <p className='text-white'>Best for professionals</p>
                          <h2 className='font-bold text-2xl text-white'>$29/Mo</h2>
                          
                            <ul>
                                <li className='flex items-center text-white'><MdOutlineDone /> Access to all premium tools</li>
                                <li className='flex items-center text-white'><MdOutlineDone /> Unlimited templates</li>
                                <li className='flex items-center text-white'><MdOutlineDone /> Priority support</li>
                                <li className='flex items-center text-white'><MdOutlineDone /> Unlimited projects</li>
                                <li className='flex items-center text-white'><MdOutlineDone /> Cloud sync</li>
                                <li className='flex items-center text-white'><MdOutlineDone /> Advanced analytics</li>
                            </ul>
                          
                          <button className='btn text-blue-700 w-full flex justify-center items-center bg-shadow-sm  rounded-full'>Start Pro Trial</button>
                        </div>
                        

                         
                            <div  className='cart-start bg-base-300 shadow-sm p-4 space-y-2 rounded-lg'>
                          <h3 className='font-bold text-2xl'>Enterprise</h3>
                          <p>For teams and businesses</p>
                          <h2 className='font-bold text-2xl'>$99/Month</h2>
                          
                            <ul className='mb-10'>
                                <li className='flex items-center'><MdOutlineDone /> Everything in Pro</li>
                                <li className='flex items-center'><MdOutlineDone /> Team collaboration</li>
                                <li className='flex items-center'><MdOutlineDone /> Custom integrations</li>
                                <li className='flex items-center'><MdOutlineDone /> Dedicated support</li>
                                <li className='flex items-center'><MdOutlineDone /> SLA gurantee</li>
                                <li className='flex items-center'><MdOutlineDone /> Custom branding</li>
                            </ul>
                          
                          <button className='btn w-full flex justify-center items-center  bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full'>Contact Sales</button>
                        </div>
                        
                       </div>
                        
                    </div>
        </div>
    );
};

export default Pricing;