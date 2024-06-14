import Layout from "../components/Layout.tsx";
import MealsCard from "../components/cards/MealsCard.tsx";
import CalculatorCard from "../components/cards/CalculatorCard.tsx";
import { useState } from "react";
import FoodService from "../services/FoodService.ts";
import useAuth from "../hooks/use-auth.ts";
import { Nullable } from "../types/nullable.ts";
import { UserHistory } from "../models/firebase/user-history.ts";
import { UserCalorie } from "../models/firebase/user-calorie.ts";

export default function Calculate() {
  const { user } = useAuth();
  const [data, setData] = useState<Nullable<Omit<UserHistory, "id">>>(null);

  const getData = async (calorie: UserCalorie) => {
    setData(null);

    if (!user) {
      return;
    }

    const response = await FoodService.getCalorieFood(calorie, user.uid);

    setData(response!);
  };

  return (
    <Layout>
      <div className="grid gap-5 py-5 mx-32">
        <CalculatorCard
          getData={getData}
          data={data}
        />
        <MealsCard
          title="Breakfast"
          start={data?.calorie.breakfast.calorieStart || 0}
          end={data?.calorie.breakfast.calorieEnd || 0}
          foods={data?.breakfastFood || null}
        />
        <MealsCard
          title="Lunch"
          start={data?.calorie.lunch.calorieStart || 0}
          end={data?.calorie.lunch.calorieEnd || 0}
          foods={data?.lunchFood || null}
        />
        <MealsCard
          title="Dinner"
          start={data?.calorie.dinner.calorieStart || 0}
          end={data?.calorie.dinner.calorieEnd || 0}
          foods={data?.dinnerFood || null}
        />
      </div>
    </Layout>
  );
}
