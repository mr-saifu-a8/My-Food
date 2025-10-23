import React from "react";

const IngredeintsSteps = () => {
  return (
    <div>
      <div className="flex  pb-30 items-center px-25">
        <div className="w-full">
          <div className="relative px-35  font-[syneregular]">
            <div className="w-[15%]  absolute left-2 h-[1.5px] top-7 text-center bg-[#647403]"></div>
            <h1 className="  text-[#647403] text-[2.3vw]">Step 01</h1>
            <p className="text-2xl py-5">
              Boil water in a pot. Season it with salt and then add pasta to
              cook. Stir occassionally until the pasta gets tender. Before
              draining pasta reserve 3/4 cup of pasta cooking water.
            </p>
          </div>
          <div className="relative px-35 font-[syneregular]">
            <div className="w-[15%]  absolute left-2 h-[1.5px] top-7 text-center bg-[#647403]"></div>
            <h1 className="  text-[#647403] text-[2.3vw]">Step 02</h1>
            <p className="text-2xl py-5">
              On a medium large skillet melt butter. Once the butter is melted,
              keep the temperature on medium heat and add pepper, cook until the
              pepper is toasted.
            </p>
          </div>
          <div className="relative px-35 font-[syneregular]">
            <div className="w-[15%]  absolute left-2 h-[1.5px] top-7 text-center bg-[#647403]"></div>
            <h1 className="  text-[#647403] text-[2.3vw]">Step 03</h1>
            <p className="text-2xl py-5 pb-35">
              Add the reserved pasta water to the skillet and let simmer. Add
              pasta and all grated cheese. Stir and toss until cheese melts and
              creates creamy texture. Then the pasta is ready to serve.
            </p>
          </div>
        </div>
        <div className="w-full h-screen ">
          <img className="rounded-4xl w-full "
            src="https://assets.api.uizard.io/api/cdn/stream/cf468f58-7cfd-45ae-abfd-0a4f3b7c149d.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default IngredeintsSteps;
