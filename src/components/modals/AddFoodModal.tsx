import { forwardRef, MouseEvent, useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { Food } from "../../models/firebase/food.ts";
import FoodService from "../../services/FoodService.ts";
import { useNavigate } from "react-router-dom";

interface Props {
  handleClose: () => void;
}

export const AddFoodModal = forwardRef<HTMLDialogElement, Props>(({ handleClose }, ref) => {
  const navigate = useNavigate();
  const [food, setFood] = useState<Food>({
    sodium: 0,
    title: "",
    image: "",
    calories: 0,
    protein: 0,
    fat: 0,
    randomizer: 0,
  });
  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    food.title = food.title.toLowerCase().trim();
    food.randomizer = Math.floor(Math.random() * 1000);

    await FoodService.addFood(food);
    navigate(0);
  };

  return (
    <dialog
      ref={ref}
      className="min-w-[40%] rounded-2xl p-5 relative">
      <h3 className="text-3xl font-bold text-gray-900 text-center">Add Item</h3>
      <button
        onClick={handleClose}
        className="absolute top-2 end-2 text-2xl text-gray-500 cursor-pointer">
        <IoMdClose />
      </button>
      <form className="flex flex-col p-5 gap-5">
        <div className="flex items-center space-x-2">
          <label
            className="text-xl me-5 w-32"
            htmlFor="name">
            Name:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            name="name"
            value={food.title}
            onChange={(e) => setFood({ ...food, title: e.target.value })}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label
            className="text-xl me-5 w-32"
            htmlFor="name">
            Image:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="text"
            name="image"
            value={food.image}
            onChange={(e) => setFood({ ...food, image: e.target.value })}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label
            className="text-xl me-5 w-32"
            htmlFor="calories">
            Calories:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="number"
            id="calories"
            name="calories"
            value={food.calories}
            onChange={(e) => setFood({ ...food, calories: Number(e.target.value) })}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label
            className="text-xl me-5 w-32"
            htmlFor="protein">
            Protein:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="number"
            id="protein"
            name="protein"
            value={food.protein}
            onChange={(e) => setFood({ ...food, protein: Number(e.target.value) })}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label
            className="text-xl me-5 w-32"
            htmlFor="fat">
            Fat:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="number"
            id="fat"
            name="fat"
            value={food.fat}
            onChange={(e) => setFood({ ...food, fat: Number(e.target.value) })}
          />
        </div>
        <div className="flex items-center space-x-2">
          <label
            className="text-xl me-5 w-32"
            htmlFor="fat">
            Sodium:
          </label>
          <input
            className="border border-gray-300 rounded-md p-2 w-full"
            type="number"
            id="sodium"
            name="sodium"
            value={food.sodium}
            onChange={(e) => setFood({ ...food, sodium: Number(e.target.value) })}
          />
        </div>
        <div className="flex w-full justify-center items-center space-x-2">
          <button
            onClick={handleSubmit}
            className="m-0.5 max-w-40 px-4 gap-2 flex items-center justify-center font-bold ms-3 text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90 text-md py-2">
            <IoMdAdd size="1.25rem" />
            Add Item
          </button>
        </div>
      </form>
    </dialog>
  );
});
