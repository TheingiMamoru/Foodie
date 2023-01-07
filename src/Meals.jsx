import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Card from "./Card";
import Loading from "./Loader/Loading";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    // console.log(data.meals);
    setMeals(data.meals);
    // console.log(meals);
    setIsLoading(false);
  };
  useEffect(() => {
    getMeals();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-5 justify-center">
          {meals?.map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
};

export default Meals;
