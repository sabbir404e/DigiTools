import React from 'react';
import CartImage from '../../assets/products/shopping-cart.png';

const Navbar = ({ cartCount }) => {
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
                <div className="navbar-end flex items-center gap-3">
                    {/* Cart icon with live count badge */}
                    <div className="relative">
                        <img src={CartImage} alt="cart" className='w-6 h-6' />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-[#9514fa] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <a href="">Login</a>
                    <a className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full text-white">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;