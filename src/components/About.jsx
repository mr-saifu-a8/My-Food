import React, { useState } from "react";
import About2 from "./About2";

function About() {
  let data = [
    {
      img: "https://assets.api.uizard.io/api/cdn/stream/0947e097-d876-43dd-8a46-e3e1830216f9.png",
      heading: "Creamy Spaghetti",
      button: "Dinner",
      time: "5 min read",
      profile:
        "https://assets.api.uizard.io/api/cdn/stream/a4d71444-c7bf-4f54-90a1-8a0a9b274cbc.png",
      name: "Jane Baker",
      date: "March 13, 2025",
    },
    {
      img: "https://assets.api.uizard.io/api/cdn/stream/f508e148-18f2-448d-b319-74cdf7b15cb6.png",
      heading: "Are natural wines boring?",
      button: "Wine",
      time: "10 min read",
      profile:
        "https://assets.api.uizard.io/api/cdn/stream/a4d71444-c7bf-4f54-90a1-8a0a9b274cbc.png",
      name: "Dan Grape",
      date: "March 16, 2025",
    },
    {
      img: "https://assets.api.uizard.io/api/cdn/stream/a4d71444-c7bf-4f54-90a1-8a0a9b274cbc.png",
      heading: "Weekday dinner tips: pasta time!",
      button: "Pasta",
      time: "8 min read",
      profile:
        "https://assets.api.uizard.io/api/cdn/stream/a4d71444-c7bf-4f54-90a1-8a0a9b274cbc.png",
      name: "John Linguini",
      date: "March 13, 2025",
    },
  ];

  const [cardData, setCardData] = useState(data);

  return (
    <div className="bg-[#F9F7EB] min-h-screen p-5">
      {/* 2-Column grid */}
      <div className="grid grid-cols-[47%_1fr] pt-20 gap-13 max-w-[1350px] mx-auto">
        {/* LEFT BIG CARD */}
        <div className="shadow-xl rounded-2xl bg-[#FFFEF6] overflow-hidden flex flex-col">
          <h2 className='font-["synebold"] text-3xl p-7'>
            Gift guide for foodies
          </h2>
          <img
            src="https://www.nirvanaorganic.in/cdn/shop/articles/Untitled_design_17.jpg?v=1725272231&width=1500"
            alt=""
            className="w-full h-auto object-cover"
          />
          <div className="flex justify-between items-center px-7 py-5 font-['synebold']">
            <button className="border rounded-full px-4 py-1">Products</button>
            <span>5 min read</span>
          </div>
          <hr className="mx-7 mb-5 border-[#E4D8AB]" />
          <div className="flex items-center gap-4 px-7 pb-7">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src="https://images.unsplash.com/photo-1543341330-03beec9d313c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.0.3&q=80&w=1080"
              alt=""
            />
            <div className="font-['synebold'] text-base">
              <h4>Peter Pan</h4>
              <h4>March 20, 2022</h4>
            </div>
          </div>
        </div>

        {/* RIGHT VERTICAL STACK */}
        <div key={setCardData} className="flex flex-col gap-8">
          {cardData.map((item, index) => (
            <About2 key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;