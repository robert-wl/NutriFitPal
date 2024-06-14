import FirebaseService from "./FirebaseService.ts";
import { addDoc, collection, doc, endAt, getDocs, limit, orderBy, query, setDoc, startAt, Timestamp, where } from "firebase/firestore";
import HistoryService from "./HistoryService.ts";
import { Nullable } from "../types/nullable.ts";
import { UserHistory } from "../models/firebase/user-history.ts";
import { Food } from "../models/firebase/food.ts";
import { UserCalorie } from "../models/firebase/user-calorie.ts";

export default class FoodService extends FirebaseService {
  public static async getRandomFood(): Promise<Food[]> {
    try {
      const randomNumber = Math.floor(Math.random() * 1000);
      const optionStr = Math.random() > 0.5 ? ">" : "<";

      const q = query(collection(this.db, "foods"), where("randomizer", optionStr, randomNumber), limit(20));
      const foodSnapshot = await getDocs(q);

      const food: Food[] = [];

      foodSnapshot.docs.forEach((doc) => {
        food.push({ id: doc.id, ...doc.data() } as Food);
      });

      return food;
    } catch (err: any) {
      console.warn(err);
      return [];
    }
  }

  public static async addFood(food: Food): Promise<boolean> {
    try {
      const foodRef = collection(this.db, "foods");
      await addDoc(foodRef, food);

      return true;
    } catch (err: any) {
      console.warn(err);
      return false;
    }
  }

  public static async saveFood(food: Food): Promise<boolean> {
    try {
      const foodRef = doc(this.db, "foods", food.id!);
      await setDoc(foodRef, food);

      return true;
    } catch (err: any) {
      console.warn(err);
      return false;
    }
  }

  public static async getCalorieFood(calorie: UserCalorie, uid: string): Promise<Nullable<Omit<UserHistory, "id">>> {
    try {
      const randomNumber = Math.floor(Math.random() * 1000);
      const optionStr = Math.random() > 0.5 ? ">" : "<";

      const breakfastQ = query(
        collection(this.db, "foods"),
        where("calories", ">=", calorie.breakfast.calorieStart),
        where("calories", "<=", calorie.breakfast.calorieEnd),
        where("randomizer", optionStr, randomNumber),
        limit(2),
      );

      const lunchQ = query(
        collection(this.db, "foods"),
        where("calories", ">=", calorie.lunch.calorieStart),
        where("calories", "<=", calorie.lunch.calorieEnd),
        where("randomizer", optionStr, randomNumber),
        limit(2),
      );

      const dinnerQ = query(
        collection(this.db, "foods"),
        where("calories", ">=", calorie.dinner.calorieStart),
        where("calories", "<=", calorie.dinner.calorieEnd),
        where("randomizer", optionStr, randomNumber),
        limit(2),
      );

      const breakfastSnapshot = await getDocs(breakfastQ);
      const lunchSnapshot = await getDocs(lunchQ);
      const dinnerSnapshot = await getDocs(dinnerQ);

      const breakfast = breakfastSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Food);
      const lunch = lunchSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Food);
      const dinner = dinnerSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Food);

      const userSearch: Omit<UserHistory, "id"> = {
        userUid: uid,
        calorie,
        breakfastFood: breakfast,
        lunchFood: lunch,
        dinnerFood: dinner,
        searchDate: Timestamp.now(),
      };

      await HistoryService.saveHistory(userSearch);

      return userSearch;
    } catch (err: any) {
      console.warn(err);
      return null;
    }
  }

  public static async getFoodByName(name: string): Promise<Food[]> {
    try {
      console.log(name);
      const q = query(collection(this.db, "foods"), orderBy("title"), startAt(name), endAt(name + "\uf8ff"), limit(20));
      const foodSnapshot = await getDocs(q);

      console.log(foodSnapshot);
      const food: Food[] = [];

      foodSnapshot.docs.forEach((doc) => {
        food.push({ id: doc.id, ...doc.data() } as Food);
      });

      return food;
    } catch (err: any) {
      console.warn(err);
      return [];
    }
  }
}
