import React from "react";
import { GrSearch } from "react-icons/gr";
import { MdOutlineShoppingCart } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-18 w-full shadow-md bg-white">
      <div className="h-full flex items-center px-4 justify-between border-b border-black">
        <div className="">
          <Link to="/">
            <img src="progo.png"
             alt="progo" width={90} height={50} />
          </Link>
        </div>
        <div className="flex items-center w-full max-w-sm border-b border-e-gray-100 rounded-full focus-within:shadow pl-2">
          <input
            type="text"
            placeholder="ค้นหา..."
            className="outline-none flex-grow"
          />
          <div className="text-lg min-w-[50px] h-8 bg-red-600 flex items-center justify-center rounded-r-full text-white">
            <GrSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="flex items-center gap-4">
            <div className="text-3xl cursor-pointer">
              <VscAccount />
            </div>

            <div className="text-2xl relative">
              <MdOutlineShoppingCart />
              <div className="bg-red-600 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3">
                <p className="text-sm">0</p>
              </div>
            </div>
          </div>

          <div>
            <Link
              to="/login"
              className="px-3 py-1 rounded-full text-white bg-red-600 hover:bg-red-700">
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
