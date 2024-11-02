import React from 'react'
import { HiHome } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiShoppingCart } from "react-icons/hi";
import { HiCog } from "react-icons/hi";

const bottom = () => {
  return (
    <>
        {/* add fixed, bottom-0 and right-0 to the div class name below */}
      <div className="bg-white dark:bg-[#030618] border-t border-gray-200 dark:border-[#030618]">
      <div className="flex justify-around items-center p-3">
        {/* Home */}
        <div className="flex flex-col items-center text-gray-600 dark:text-white dark:hover:text-blue-500 hover:text-blue-500">
          <HiHome className="w-6 h-6"/>
          <span className="text-xs">Home</span>
        </div>

        {/* Shop */}
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 dark:text-white dark:hover:text-blue-500">
          <HiShoppingCart className="w-6 h-6" />
          <span className="text-xs">Shop</span>
        </div>

        {/* Profile */}
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 dark:text-white dark:hover:text-blue-500">
          <HiOutlineUserCircle className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </div>

        {/* Settings */}
        <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 dark:text-white dark:hover:text-blue-500">
          <HiCog className="w-6 h-6" />
          <span className="text-xs">Settings</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default bottom
