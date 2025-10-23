import React from "react";

function FoodSection() {
  const data = [
    {
      img: "https://assets.api.uizard.io/api/cdn/stream/bc648eb0-a024-4667-bca9-3d9622d91ce3.png",
      heading: "Spring Quiche with vegetables",
      paragraph: "Gluten free with potato crust!",
    },
    {
      img: "https://assets.api.uizard.io/api/cdn/stream/ec01c900-b43b-4df5-96a8-32ae234f7c5f.png",
      heading: "Fancy Minestrone",
      paragraph: "All green and fresh soup.",
    },
    {
      img: "https://assets.api.uizard.io/api/cdn/stream/7775dd04-b92d-4d71-8714-d53a48dc02e5.png",
      heading: "Lemon Chicken",
      paragraph: "Easy one-pot meal for dinners.",
    },
    {
      img: "https://assets.api.uizard.io/api/cdn/stream/9b88415f-9e14-4772-8228-ad910fcf914f.png",
      heading: "Poke Bowl",
      paragraph: "Fancy flavors and textures you need to try.",
    },
    {
      img: "https://assets.api.uizard.io/api/cdn/stream/e0a5e86c-6cd9-4f35-9759-8f91d17154f8.png",
      heading: "Creamy Tortellini",
      paragraph: "Springy, light and yet comforting bowl of Dasta.",
    },
  ];

  return (
    <div className="bg-[#F9F7EB] px-25 flex pb-25 flex-wrap gap-8">
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-2xl h-83 font-[synebold] rounded-2xl pt-5 w-62 flex-nowrap"
        >
          <img className="w-full" src={item.img} alt="" />
          <div className="p-5">
          <h1 className="text-[1.3vw] w-72">{item.heading}</h1>
          <p className="text-zinc-400 ">{item.paragraph}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodSection;
