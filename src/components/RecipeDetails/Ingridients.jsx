const Ingridients = () => {
  
  return (
    <div>
      <div className="w-full relative  pt-10 h-screen">
        <div className="flex justify-center items-center">
          <div className="w-[48%] h-52 rounded-4xl flex justify-center items-center bg-[#647403]">
            <h1 className="font-[syneregular] text-center text-white text-2xl">
              This simple 'cacio e pepe' recipe is super <br /> minimalist and
              easy to make. All you need is <br /> really just good cheese and
              pepper.
            </h1>
          </div>
        </div>
        <div className="flex justify-end items-center p-25">
          <div className="w-[35%]  absolute left-25 h-[1.5px] text-center bg-[#647403]"></div>
          <h1 className="font-[syneregular] uppercase text-[#647403] text-[6.1vw]">
            Ingridients
          </h1>
        </div>
        <div className="flex justify-end absolute w-full top-[60%] right-64">
          <div className="bg-[#FFFEF6] rounded-4xl   px-15 py-7 font-[synebold]">
            <ul className="space-y-2 leading-7 text-gray-700 text-2xl">
              <li>6 oz. pasta spaghetti</li>
              <li>1 tsp unsalted butter</li>
              <li>1 tsp fresh cracked black pepper</li>
              <li>1 tsp salt</li>
              <li>1/3 cup grated Pecorino cheese</li>
              <li>1 cup grated Grana Padano cheese</li>
            </ul>
          </div>
        </div>
      </div>
      <h1 className="uppercase font-[syneregular] text-[6.1vw] px-25 text-[#647403]">preparation</h1>
      {/* <Footer/> */}
    </div>
  );
};

export default Ingridients;
