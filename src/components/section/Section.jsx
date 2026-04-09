import React from 'react';
import PlayImage from '../../assets/Play.png';
import BannerImage from '../../assets/banner.png';
import Group5Image from '../../assets/Group 5.png';

const Section = () => {
    return (
        <div className='section-container max-w-[1600px] h-[760] flex mx-auto justify-around mt-44 mb-44'>
            <div className='w-[640px]'>
               <button className='flex items-center text-[#4f39f6] bg-[#e1e7ff] p-1 rounded-full'><img src={Group5Image} alt="" />New: AI-Powered Tools Available</button>
               <h2 className='font-bold text-[40px]'>Supercharge Your<br></br> Digital Workflow</h2>
               <p className='mb-8 mt-4'>Access premium AI tools, design assets, templates, and productivity<br></br>
                software—all in one place. Start creating faster today.<br></br>

                Explore Products</p>
                <div className='flex gap-4'>
                <button className='btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full'>Explore Products</button>
                 <button className='flex items-center btn bg-shadow rounded-full'><img src={PlayImage} alt="" />Watch Demo</button>
                </div>
            </div>
                
            <div>
                <img src={BannerImage} alt="" />
            </div>
        </div>
    );
};

export default Section;