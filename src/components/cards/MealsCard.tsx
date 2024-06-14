import { Food } from "../../models/firebase/food.ts";
import { Nullable } from "../../types/nullable.ts";
import FoodCardSkeleton from "../skeletons/cards/FoodCardSkeleton.tsx";
import { handleImageError } from "../../utils/images.ts";

interface Props {
  title: string;
  start: number;
  end: number;
  foods: Nullable<Food[]>;
}

export default function MealsCard({ title, start, end, foods }: Props) {
  return (
    <div className="flex flex-col rounded-lg bg-white border">
      <div className="p-5 space-y-3">
        <h3 className="flex items-end text-4xl gap-4 font-bold text-gray-900 text-start">{title}</h3>
        <p className="flex items-start text-lg">
          Recommended: {start.toFixed(2)} - {end.toFixed(2)} Calories
        </p>
      </div>
      <hr className="border-gray-300" />
      <div className="p-5 gap-5 flex flex-col">
        {foods
          ? foods.map((food) => (
              <div
                key={food.title}
                className="gap-10 flex">
                <img
                  className="rounded-lg w-64 h-64 object-cover"
                  src={food.image}
                  alt="food"
                  onError={handleImageError}
                />
                <div className="flex flex-col justify-center py-5 text-start space-y-5">
                  <h3 className="text-4xl font-bold text-gray-900 capitalize">{food.title}</h3>
                  <div>
                    <p className="text-lg text-gray-500">Calories: {food.calories.toFixed(2)} / serving</p>
                    <p className="text-lg text-gray-500">Protein: {food.protein.toFixed(2)} / serving</p>
                    <p className="text-lg text-gray-500">Fat: {food.fat.toFixed(2)} / serving</p>
                  </div>
                </div>
              </div>
            ))
          : Array.from({ length: 2 }).map((_, index) => <FoodCardSkeleton key={index} />)}
      </div>
    </div>
  );
}
