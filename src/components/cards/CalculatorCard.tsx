import useAuth from "../../hooks/use-auth.ts";
import { useEffect, useState } from "react";
import calorieCalculator from "../../utils/calorie/calorie-calculator.ts";
import { UserCalorie } from "../../models/firebase/user-calorie.ts";
import { UserData } from "../../models/firebase/user-data.ts";
import { UserHistory } from "../../models/firebase/user-history.ts";
import { Nullable } from "../../types/nullable.ts";

interface Props {
  getData: (calorie: UserCalorie) => void;
  data: Nullable<Omit<UserHistory, "id">>;
}

export default function CalculatorCard({ getData, data }: Props) {
  const { user, updateUser } = useAuth();
  const [height, setHeight] = useState(user?.height ?? 0);
  const [weight, setWeight] = useState(user?.weight ?? 0);

  const currentAge = (Date.now() - Date.parse(user?.dateOfBirth || "")) / 31556952000;

  const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUser = {
      ...user,
      height,
      weight,
    } as UserData;

    await updateUser(newUser);
  };

  const handleGetData = async (e: Nullable<React.FormEvent<HTMLFormElement>>) => {
    e?.preventDefault();
    const calorie = calorieCalculator(weight, height, currentAge, user?.gender ?? "");
    getData(calorie);
  };

  useEffect(() => {
    handleGetData(null);
  }, []);

  return (
    <div className="flex gap-10">
      <form
        onSubmit={handleUpdateUser}
        className="grid flex-1 rounded-lg bg-white border">
        <div className="p-5 space-y-3">
          <h3 className="flex items-end text-4xl gap-4 font-bold text-secondary text-start">Statistics</h3>
        </div>
        <hr className="border-gray-300" />
        <div className="p-5 space-y-3">
          <label className="flex items-center gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Age</span>
            <span className="ps-3 text-start">{currentAge.toFixed(1)}</span>
          </label>
          <label className="flex items-center gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Height</span>
            <input
              className="w-1/2 p-2 border rounded-lg"
              type="number"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </label>
          <label className="flex items-center gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Weight</span>
            <input
              className="w-1/2 p-2 border rounded-lg"
              type="number"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="relative">
          <button
            type="submit"
            className="absolute end-2.5 bottom-2 font-medium text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90 text-sm px-4 py-2">
            Update
          </button>
        </div>
      </form>
      <form
        onSubmit={handleGetData}
        className="flex flex-col flex-1 rounded-lg bg-white border">
        <div className="p-5 space-y-3 h-fit">
          <h3 className="flex items-end text-4xl gap-4 font-bold text-secondary text-start">Calculator</h3>
        </div>
        <hr className="border-gray-300" />
        <div className="p-5 space-y-3">
          <label className="flex flex-col gap-4 text-lg text-secondary">
            <span className="min-w-20 text-start">Required Calories:</span>
            <div className="ps-3 text-start p-3 border w-fit min-w-40">
              <span className="font-bold">{data?.calorie.dayCalorie.toFixed(2) ?? "Calculating..."}</span> calories / day
            </div>
          </label>
        </div>
        <div className="h-full relative">
          <button
            type="submit"
            className="absolute end-2.5 bottom-2 font-medium text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90 text-sm px-4 py-2">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}
