import FoodService from "../services/FoodService.ts";
import { Food } from "../models/firebase/food.ts";

const dataset: Food[] = [];

export default function Test() {
  const seedData = () => {
    for (const dat of dataset) {
      dat.title = (dat.title as string).toLowerCase();
      console.log("SEEDING", dat);
      FoodService.addFood(dat).then();
    }
  };

  return (
    <>
      <button onClick={seedData}>aaaaa</button>
    </>
  );
}
