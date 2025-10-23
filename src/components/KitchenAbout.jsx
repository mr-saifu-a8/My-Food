import React from "react";

function KitchenAbout() {
  return (
    <div className="bg-[#F9F7EB] w-full flex items-center p-20">
      <div className="flex items-center gap-15 p-10 font-[synebold] text-[#647403] uppercase">
        {/* Left side text */}
        <div>
          <h4 className="text-3xl leading-none">in my</h4>
          <h1 className="text-[6.5vw] leading-none">kitchen</h1>
        </div>

        <hr className="border-t text-center border-[#647403] w-[50vw] self-center" />
      </div>
    </div>
  );
}

export default KitchenAbout;
