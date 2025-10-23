import { TiStarFullOutline } from "react-icons/ti";

const RecipeDetailsPage = () => {
  return (
    <div className="w-full">
      <img
        className="w-full h-[80vh] object-cover"
        src="https://assets.api.uizard.io/api/cdn/stream/22408fef-2a6d-4c39-a3b4-936c3e5b7c4f.png"
        alt=""
      />
      <div className="h-46 w-[32%] rounded-4xl px-7 pt-7  absolute top-[65%] text-white font-[syneregular] left-[8%] bg-[#647403]">
        <h1 className="text-3xl pb-2 pt-3">Creamy Spaghatti</h1>
        <h3>by Risk Roll</h3>
        
          <p className="flex gap-2 pt-3">
            <TiStarFullOutline size={25} /> <TiStarFullOutline size={25} /> <TiStarFullOutline size={25}  /> <TiStarFullOutline size={25}/>
          </p>
      
      </div>
    </div>
  );
};

export default RecipeDetailsPage;
