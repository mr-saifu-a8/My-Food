
import React from "react";
import Navbar from "../Navbar/Navbar";
import FilterArticle from "./FilterArticle";
import RecipeBox from "./RecipeBox";
import Footer from "../Footer";
import RecipeSteps from "../RecipeDetails/IngredeintsSteps";

const RecipePage = () => {
  return (
    <div className="w-full  bg-[#F9F7EB]">
      <Navbar bgColor="#F9F7EB" textColor="#647403" />{" "}
      <FilterArticle />
      <RecipeBox />
      <Footer/>
    </div>
  );
};

export default RecipePage;
