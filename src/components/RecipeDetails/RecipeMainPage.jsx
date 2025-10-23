import React from "react";
import Navbar from "../Navbar/Navbar";
import RecipeDetailsPage from "./RecipeDetailsPage";
import Ingridients from "./Ingridients";
import Footer from "../Footer";
import IngredeintsSteps from "./IngredeintsSteps";


const RecipeMainPage = () => {
  return (
    <div className="w-full bg-[#F9F7EB]">
      <Navbar bgColor="#F9F7EB" textColor="#647403" />{" "}
      <RecipeDetailsPage />
      <Ingridients />
      <IngredeintsSteps/>
      <Footer/>
    </div>
  );
};

export default RecipeMainPage;
