import Layout from "../components/Layout.tsx";
import { IoIosSearch, IoMdAdd } from "react-icons/io";
import FoodCard from "../components/cards/FoodCard.tsx";
import useAuth from "../hooks/use-auth.ts";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { AddFoodModal } from "../components/modals/AddFoodModal.tsx";
import FoodService from "../services/FoodService.ts";
import { Food } from "../models/firebase/food.ts";
import { Nullable } from "../types/nullable.ts";
import FoodCardSkeleton from "../components/skeletons/cards/FoodCardSkeleton.tsx";

export default function Search() {
  const [foods, setFoods] = useState<Nullable<Food[]>>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { user } = useAuth();

  const handleGetFood = async () => {
    const foodList = await FoodService.getRandomFood();
    setFoods(foodList);
  };

  const openModal = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dialogRef.current?.showModal();
  };

  const handleSearch = async () => {
    setFoods(null);
    const search = inputRef.current?.value;

    if (!search || search === "") {
      await handleGetFood();
      return;
    }

    const response = await FoodService.getFoodByName(search.toLowerCase());
    setFoods(response);
  };

  useEffect(() => {
    handleGetFood().then();

    const current = inputRef.current;
    current?.addEventListener("search", handleSearch);

    return () => {
      current?.removeEventListener("search", handleSearch);
    };
  }, []);

  return (
    <>
      <Layout>
        <div className="grid gap-5 py-5 mx-32">
          <div className="flex flex-row w-full">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoIosSearch size="1.5rem" />
              </div>
              <input
                ref={inputRef}
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 outline-none border-stroke text-body-color border-gray-300 border focus:border-primary rounded-md"
                placeholder="Search Mockups, Logos..."
              />
            </div>
            {user?.role === "admin" && (
              <button
                onClick={(e) => openModal(e)}
                className="m-0.5 px-4 gap-2 flex items-center justify-center font-bold ms-3 text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90 text-md py-2">
                <IoMdAdd size="1.25rem" />
                Add Item
              </button>
            )}
          </div>
          {foods
            ? foods.map((food) => (
                <FoodCard
                  food={food}
                  key={food.title}
                />
              ))
            : Array.from({ length: 10 }).map((_, index) => <FoodCardSkeleton key={index} />)}
        </div>
        <AddFoodModal
          ref={dialogRef}
          handleClose={() => dialogRef.current?.close()}
        />
      </Layout>
    </>
  );
}
