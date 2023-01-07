import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ImYoutube } from "react-icons/im";
import Loading from "./Loader/Loading";

const Detail = () => {
  const { id } = useParams();

  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getSingleMeal = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(data.meals[0]);
    setMeal(data?.meals[0]);
    setIsLoading(false);
  };
  useEffect(() => {
    getSingleMeal();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-5 mb-[10px]">
          <img
            src={meal.strMealThumb}
            alt=""
            className="w-[400px] rounded-xl shadow-2xl"
          />
          <p className="border rounded-lg px-3 py-1 w-[100px] text-center text-sm bg-pink-500">
            {meal.strCategory}
          </p>
          <h1 className="text-2xl">{meal.strMeal}</h1>
          <div className="">
            <h2 className="text-2xl mb-2">Instruction</h2>
            <p className="text-sm text-gray-500 tracking-wider leading-6">
              {meal.strInstructions}
            </p>
          </div>
          <div className="flex gap-5 items-center">
            <a href={meal.strYoutube} target="_blank">
              <ImYoutube className="text-5xl text-red-500 cursor-pointer" />
            </a>
            <p className="text-gray-500"> - Watch On Youtube</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
