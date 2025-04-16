import React from "react";
import Banner from "../Banner/Banner";

const Navbar = () => {
  return (
    <div className="navbar bg-[#FFFFFF] py-4 shadow-sm lg:px-22 sticky top-0 z-[100000]">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn text-[#003EA4] bg-[#e0eaf3] mx-2 border-none lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="hover:text-[#FFD337]" href="#banner">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFD337]" href="#main">
                Auctions
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFD337]" href="#cat">
                Categories
              </a>
            </li>
            <li>
              <a className="hover:text-[#FFD337]" href="#footer">
                How to works
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#003EA4] text-xl lg:text-3xl">
            Auction{" "}
            <span className="text-[#FFD337] font-extrabold">Gallery</span>
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-4 text-black font-bold">
          <li>
            <a className="hover:text-[#FFD337]" href="#banner">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#FFD337]" href="#main">
              Auctions
            </a>
          </li>
          <li>
            <a className="hover:text-[#FFD337]" href="#cat">
              Categories
            </a>
          </li>
          <li>
            <a className="hover:text-[#FFD337]" href="#footer">
              How to works
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex gap-2 lg:gap-6">
          <img
            src="https://i.ibb.co.com/m5SxTD1z/bell.png"
            className="w-[50px] bg-[#e0eaf3] p-2 rounded-[50%] cursor-pointer duration-300 transform hover:scale-110"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          />
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box bg-[url(https://i.ibb.co.com/CpHq6FLZ/Banner-min.jpg)] bg-cover bg-no-repeat bg-center text-white border-2 border-black">
              <h1 className="mb-3 text-3xl">🔕</h1>
              <h3 className="font-bold text-3xl">Opps!</h3>
              <p className="py-4 text-xl">No notifications yet!</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://i.ibb.co.com/DPgXnprw/user-Image.png"
                      />
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">
                        Profile
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a>Settings</a>
                    </li>
                    <li>
                      <a>Logout</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
  );
};

export default Navbar;
