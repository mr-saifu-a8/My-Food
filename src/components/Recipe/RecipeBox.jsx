function RecipeBox() {
  const data = [
    {
      title: "Creamy Spaghatti",
      img: "https://assets.api.uizard.io/api/cdn/stream/0947e097-d876-43dd-8a46-e3e1830216f9.png",
      heading: "READ",
      paragraph: "Quick and easy to make!",
    },
    {
      title: "Creamy Spaghatti",
      img: "https://assets.api.uizard.io/api/cdn/stream/7581eff2-86b3-42db-8b89-2daa0f910693.png",
      heading: "READ",
      paragraph: "Juicy and fresh plate",
    },
    {
      title: "Creamy Spaghatti",
      img: "https://assets.api.uizard.io/api/cdn/stream/7775dd04-b92d-4d71-8714-d53a48dc02e5.png",
      heading: "READ",
      paragraph: "Pinch of chilli to tingle your mouth",
    },
    {
      title: "Creamy Spaghatti",
      img: "https://assets.api.uizard.io/api/cdn/stream/9b88415f-9e14-4772-8228-ad910fcf914f.png",
      heading: "READ",
      paragraph: "Bowl full of cheese and spice!",
    },
    {
      title: "Creamy Spaghatti",
      img: "https://assets.api.uizard.io/api/cdn/stream/fb6d51cc-23a4-49b9-a6e0-d32e363e6e9d.png",
      heading: "READ",
      paragraph: "Sage, butter and pumpkin? Yes!",
    },
    {
      title: "Creamy Spaghatti",
      img: "https://assets.api.uizard.io/api/cdn/stream/ac254401-a22f-4d54-9a40-456cee96bbfb.png",
      heading: "READ",
      paragraph: "Classic meal from Naples",
    },
    {
      title: "Creamy Spaghatti",
      img: "https://assets.api.uizard.io/api/cdn/stream/88343dd2-2020-4095-869a-58cd7136fe08.png",
      heading: "READ",
      paragraph: "Creamy, tasty with a bit of greens",
    },
    {
      title: "Creamy Spaghatti",
      img: "https://assets.api.uizard.io/api/cdn/stream/e0a5e86c-6cd9-4f35-9759-8f91d17154f8.png",
      heading: "READ",
      paragraph: "Luscious and wonderfully indulgent",
    },
  ];

  return (
    <div className="">
      <div className="flex gap-8 px-25 flex-wrap py-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#FFFEF6] shadow-xl h-98 font-[syneregular] rounded-3xl  w-80 flex-nowrap"
          >
            <h1 className="text-xl p-5">{item.title}</h1>
            <img className="w-full h-[50%]" src={item.img} alt="" />
            <div className="p-5">
              <p className="text-zinc-400">{item.paragraph}</p>
              <h1 className="text-lg pt-5 cursor-pointer">{item.heading}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeBox;
