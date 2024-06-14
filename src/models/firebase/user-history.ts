import { UserCalorie } from "./user-calorie.ts";
import { Food } from "./food.ts";
import { Timestamp } from "firebase/firestore";

export interface UserHistory {
  id: string | undefined;
  userUid: string;
  calorie: UserCalorie;
  breakfastFood: Food[];
  lunchFood: Food[];
  dinnerFood: Food[];
  searchDate: Timestamp;
}
