import useAuth from "../../hooks/use-auth.ts";
import { useState } from "react";
import FoodService from "../../services/FoodService.ts";
import { Food } from "../../models/firebase/food.ts";
import { handleImageError } from "../../utils/images.ts";

interface Props {
  food: Food;
}

export default function FoodCard({ food }: Props) {
  const [foodValue, setFoodValue] = useState<Food>(food);
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useAuth();

  const handleSave = async () => {
    await FoodService.saveFood(foodValue);
    setIsEditing(false);
  };

  return (
    <div className="relative flex gap-10 p-8 rounded-lg bg-white border">
      {user?.role === "admin" && (
        <>
          {isEditing ? (
            <button
              onClick={handleSave}
              className="absolute top-10 right-10 bg-primary hover:bg-opacity-90 text-white py-2 px-5 rounded-lg font-medium flex items-center transition-colors">
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="absolute top-10 right-10 bg-[#eaeade] py-2 px-5 rounded-lg font-medium flex items-center hover:bg-gray-300 transition-colors">
              Edit
            </button>
          )}
        </>
      )}
      <div className="flex-shrink-0">
        <img
          className="rounded-lg w-64 h-64 object-cover"
          onError={handleImageError}
          src={foodValue.image}
          alt="food"
        />
        {isEditing && (
          <input
            className="w-64 p-2 mt-2 border rounded-lg"
            type="text"
            value={foodValue.image}
            onChange={(e) => setFoodValue({ ...foodValue, image: e.target.value })}
          />
        )}
      </div>
      <div className="flex flex-col justify-center py-5 text-start space-y-5">
        {isEditing ? (
          <div className="text-2xl flex items-center gap-5">
            <span className="w-24">Title:</span>
            <textarea
              className="text-4xl font-bold p-2 w-[50rem] max-w-[80%] text-gray-900 border rounded-lg capitalize"
              value={foodValue.title}
              onChange={(e) => setFoodValue({ ...foodValue, title: e.target.value })}
            />
          </div>
        ) : (
          <h3 className="text-4xl font-bold max-w-[80%] text-gray-900 capitalize">{foodValue.title}</h3>
        )}
        <div className="flex flex-col gap-2">
          {isEditing ? (
            <div className="text-2xl flex items-center gap-5">
              <span className="w-24">Calories:</span>
              <input
                className="text-lg text-gray-500 p-2 w-fit border rounded-lg"
                type="text"
                value={foodValue.calories}
                onChange={(e) => setFoodValue({ ...foodValue, calories: Number(e.target.value) })}
              />
            </div>
          ) : (
            <p className="text-lg text-gray-500">Calories: {foodValue.calories} / serving</p>
          )}
          {isEditing ? (
            <div className="text-2xl flex items-center gap-5">
              <span className="w-24">Protein:</span>
              <input
                className="text-lg text-gray-500 p-2 w-fit border rounded-lg"
                type="text"
                value={foodValue.protein}
                onChange={(e) => setFoodValue({ ...foodValue, protein: Number(e.target.value) })}
              />
            </div>
          ) : (
            <p className="text-lg text-gray-500">Protein: {foodValue.protein} / serving</p>
          )}
          {isEditing ? (
            <div className="text-2xl flex items-center gap-5">
              <span className="w-24">Fat:</span>
              <input
                className="text-lg text-gray-500 p-2 w-fit border rounded-lg"
                type="text"
                value={foodValue.fat}
                onChange={(e) => setFoodValue({ ...foodValue, fat: Number(e.target.value) })}
              />
            </div>
          ) : (
            <p className="text-lg text-gray-500">Fat: {foodValue.fat} / serving</p>
          )}
          {isEditing ? (
            <div className="text-2xl flex items-center gap-5">
              <span className="w-24">Sodium:</span>
              <input
                className="text-lg text-gray-500 p-2 w-fit border rounded-lg"
                type="text"
                value={foodValue.sodium}
                onChange={(e) => setFoodValue({ ...foodValue, sodium: Number(e.target.value) })}
              />
            </div>
          ) : (
            <p className="text-lg text-gray-500">Sodium: {foodValue.sodium} / serving</p>
          )}
        </div>
      </div>
    </div>
  );
}
