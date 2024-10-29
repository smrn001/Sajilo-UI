import React from "react";

const Footer = () => {
  return (
    <footer className=" bg-[#FAFAFA] border-t border-[#EBEBEB]  text-gray-800 dark:bg-[#0A0A0A] dark:border-[#252525] dark:text-white">
      

      <div className="text-center py-5">
        <p className="text-base">
          © {new Date().getFullYear()} Sajilo UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;