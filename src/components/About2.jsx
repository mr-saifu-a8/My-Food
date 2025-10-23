import React from "react";

function About2({ item }) {
  const { img, heading, button, time, profile, name, date } = item;
  return (
    <div className="shadow-xl rounded-2xl bg-[#FFFEF6] overflow-hidden flex flex-row">
      {/* left image */}
      <img src={img} alt="" className="w-72 mx-7 " />

      {/* right content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <h2 className='font-["synebold"] text-xl mb-4'>{heading}</h2>
        <div className="flex justify-between items-center mb-4 font-['synebold']">
          <button className="border rounded-full px-3 py-2 text-sm">
            {button}
          </button>
          <span className="text-sm">{time}</span>
        </div>
        <hr className="border-[#E4D8AB] mb-4" />
        <div className="flex items-center gap-3">
          <img
            src={profile}
            alt=""
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-sm font-['synebold']">
            <h4>{name}</h4>
            <h4>{date}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About2;
