import React from 'react';

const Banner = () => {
    return (
        <div id='banner' className='bg-[url(https://i.postimg.cc/W49PY5TN/Banner-min-1.jpg)] bg-cover bg-no-repeat bg-center w-full'>
            <div className='text-center lg:text-start p-4 pt-60 pb-52 lg:pl-36'>
            <h1 className='font-semibold text-6xl mb-8'>Bid on Unique Items from<br /> Around the World</h1>
            <p className='font-light text-2xl mb-12'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
            <button className='bg-white text-black py-4 px-20 rounded-[35px] font-bold cursor-pointer hover:bg-[#e0eaf3] duration-300 transform hover:scale-105'><a href="#cat">Explore Auctions</a></button>
            </div>
        </div>
    );
};

export default Banner;