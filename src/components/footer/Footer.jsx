import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
    return (
<div>
      <footer className="footer sm:footer-horizontal bg-neutral text-base-content items-center justify-around p-10">
  <aside>
   <h1 className='text-bold text-2xl text-white'>DigiTools</h1>
    <p className='text-bold text-white'>
      Premium digital tools for creators,<br></br>professionals, and businesses. Work smarter<br></br>with our suite of powerful tools.
    </p>
  </aside>

  <nav>
    <h6 className="footer-title text-white">Product</h6>
    <a className="link link-hover text-white">Features</a>
    <a className="link link-hover text-white">Pricing</a>
    <a className="link link-hover text-white">Templates</a>
    <a className="link link-hover text-white">Integrations</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Company</h6>
    <a className="link link-hover text-white">About</a>
    <a className="link link-hover text-white">Blog</a>
    <a className="link link-hover text-white">Careers</a>
    <a className="link link-hover text-white">Press</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Resources</h6>
    <a className="link link-hover text-white">Documentation</a>
    <a className="link link-hover text-white">Help Center</a>
    <a className="link link-hover text-white">Community</a>
    <a className="link link-hover text-white">Contact</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Social Links</h6>
    <div className='flex gap-4'>
        <a className="link link-hover text-white"><FaFacebook /></a>
        <a className="link link-hover text-white"><FaInstagram /></a>
        <a className="link link-hover text-white"><BsTwitterX /> </a>
    </div>
  </nav>
</footer>
           
  <div>
        <div className="w-full h-[1px] border"></div>

        <div className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center justify-around p-4">
  <aside className="grid-flow-col items-center">
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <a className="link link-hover text-white">Privacy Policy</a>
    <a className="link link-hover text-white">Terms of Service</a>
    <a className="link link-hover text-white">Cookies</a>
    </nav>
    </div>
 </div>
        </div>
    );
};

export default Footer;