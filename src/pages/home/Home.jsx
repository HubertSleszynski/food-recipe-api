import React, { useContext } from "react";
import { Context } from "../../context/Context";
import RecipeItem from "../../components/recipe-item/RecipeItem";

const Home = () => {
  const { recipeList, loading } = useContext(Context);

  if (loading) return <div>Loading...Please wait!</div>;

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map(item => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing to show. Please enter your item.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
