import React from "react";

const Header = () => {
  return (
    <div className="h-15 w-full border flex items-center ">
      <div className="area px-15 h-full flex  w-full items-center  justify-between">
        <div className="name">
          <h1 className="testSite font-bold capitalize">testSite</h1>
        </div>
       
        <div className="sing"><button className="h-10 w-40 rounded-2xl border text-white text-xl bg-black flex items justify-center">sign</button></div>

      </div>
    </div>
  );
};

export default Header;
