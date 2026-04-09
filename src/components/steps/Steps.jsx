import React from 'react';
import UserIcon from '../../assets/user.png';
import PackageIcon from '../../assets/package.png';
import RocketIcon from '../../assets/rocket.png';

const Steps = () => {
    return (
        <div className='m-20 space-y-7'>

            <div className='space-y-2 flex flex-col items-center'>
                <h2 className='font-bold text-2xl'>Get Started In 3 Steps</h2>
            <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='card-container flex justify-around gap-6'>

                 <div className='card-1 bg-base-300 rounded-xl flex flex-col justify-center items-center'>
                    <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white relative -top-1 -right-35'>01</div>
                    <img src={UserIcon} alt="" className='w-10'/>
                    <h2 className='font-bold text-xl'>Create Account</h2>
                    <p className='p-4'>Sign up for free in seconds. No credit card<br></br> required to get started.</p>
                 </div>

                 <div className='card-2 bg-base-300 rounded-xl flex flex-col justify-center items-center'>
                    <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white relative top-1 -right-32'>02</div>
                    <img src={PackageIcon} alt="" />
                    <h2 className='font-bold text-xl'>Choose Products</h2>
                    <p className='p-4'>Browse our catalog and select the tools<br></br> that fit your needs.</p>
                 </div>

                 <div className='card-3 bg-base-300 rounded-xl flex flex-col justify-center items-center'>
                    <div className='w-10 h-10 rounded-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] flex items-center justify-center text-white relative top-1 -right-32'>03</div>
                    <img src={RocketIcon} alt="" />
                     <h2 className='font-bold text-xl'>Start Creating</h2>
                     <p className='p-4'>Download and start using your premium<br></br> tools immediately.</p>
                 </div>
            </div>

        </div>
    );
};

export default Steps;