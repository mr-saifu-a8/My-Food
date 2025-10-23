import React from "react";

function Footer() {
  let about = [
    { name: "Home" },
    { name: "Recipes" },
    { name: "Tips" },
    { name: "Contact" },
  ];
  return (
    <div className="bg-[#E4D8AB] text-[#647403] font-[synebold]  p-20">
      <div className="flex gap-70">
        <div className="flex flex-col w-[33%] gap-3">
          <h2 className="text-4xl">My Food</h2>
          <hr />
          <div className="capitalize text-[1.4vw] flex gap-30">
            <h3 className="leading-6">Tasty destination for foodies</h3>
            <div className="flex flex-col gap-3">
              {about.map((item, i) => {
                return <h4 key={i}>{item.name}</h4>;
              })}
            </div>
          </div>
        </div>
        <div className="w-[40%] mt-12 py-15 h-42 items-center  justify-center flex flex-col gap-5 bg-[#647403] rounded-3xl">
          <h1 className="text-[#e4d8ab] text-lg">
            Join our newsletter for the tastiest treats.
          </h1>
          <div className="flex gap-3">

          <input
            className="text-[#E4D8AB] w-82  border p-2 rounded-full outline-none"
            type="text"
            placeholder="Your email address"
          />
          <button className="bg-black text-[#e4d8ab] py-2 px-3 rounded-full">SUBSCRIBE</button>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
