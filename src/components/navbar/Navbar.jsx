import React from 'react';
import CartImage from '../../assets/products/shopping-cart.png';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <a className="btn btn-ghost text-xl text-[#4f39f6]">DigiTools</a>
  </div>
  <div className="navbar-center flex">
    <ul className="menu menu-horizontal px-1">
        <li><a>Products</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>Testimonials</a></li>
        <li><a>FAQ</a></li>
    </ul>
  </div>
  <div className="navbar-end flex items-center gap-2">
    <a href=""><img src={CartImage} alt="" className='w-6 h-6'/></a>
    <a href="">Login</a>
    <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full">Get Started</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;