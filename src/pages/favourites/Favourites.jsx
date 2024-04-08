import RecipeItem from "../../components/recipe-item/RecipeItem";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Favourites = () => {
  const { favouritesList } = useContext(Context);

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {favouritesList && favouritesList.length > 0 ? (
        favouritesList.map(item => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black font-extrabold">
            Nothing added.
          </p>
        </div>
      )}
    </div>
  );
};

export default Favourites;
