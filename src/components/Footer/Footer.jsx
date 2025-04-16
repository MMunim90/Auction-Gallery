import React from 'react';

const Footer = () => {
    return (
        <div id='footer' className="flex flex-col items-center text-center bg-white text-black p-[100px] gap-7">
    <h1 className='text-[#003EA4] text-3xl'>Auction <span className='text-[#FFD337] font-extrabold'>Gallery</span></h1>
    <div className='font-bold flex gap-5'>
        <p>Bid.</p>
        <p>Win.</p>
        <p>Own.</p>
    </div>
  <div className='flex gap-5 flex-col lg:flex-row lg:gap-14'>
    <a className="link link-hover hover:text-[#003EA4]">Home</a>
    <a className="link link-hover hover:text-[#003EA4]">Auctions</a>
    <a className="link link-hover hover:text-[#003EA4]">Categories</a>
    <a className="link link-hover hover:text-[#003EA4]">How to works</a>
  </div>
  <p>© {new Date().getFullYear()} AuctionHub. All right reserved</p>
        </div>
    );
};

export default Footer;