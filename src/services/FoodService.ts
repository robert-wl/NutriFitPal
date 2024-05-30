import FirebaseService from "./FirebaseService.ts";
import { addDoc, collection, doc, getDocs, limit, query, setDoc, where } from "firebase/firestore";
import HistoryService from "./HistoryService.ts";
import { Nullable } from "../models/nullable.ts";
import { UserHistory } from "../models/firebase/user-history.ts";
import { Food } from "../models/firebase/food.ts";
import { UserCalorie } from "../models/firebase/user-calorie.ts";

export default class FoodService extends FirebaseService {
  public static async getRandomFood(): Promise<Food[]> {
    try {
      const q = query(collection(this.db, "foods"), limit(20));
      const foodSnapshot = await getDocs(q);

      const food: Food[] = [];

      foodSnapshot.docs.forEach((doc) => {
        food.push({ id: doc.id, ...doc.data() } as Food);
      });

      for (let i = food.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = food[i];
        food[i] = food[j];
        food[j] = temp;
      }

      return food.slice(0, 20);
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
      const foodRef = doc(this.db, "foods", food.id);
      await setDoc(foodRef, food);

      return true;
    } catch (err: any) {
      console.warn(err);
      return false;
    }
  }

  public static async getCalorieFood(calorie: UserCalorie, uid: string): Promise<Nullable<UserHistory>> {
    try {
      const breakfastQ = query(
        collection(this.db, "foods"),
        where("calorie", ">=", calorie.breakfast.calorieStart),
        where("calorie", "<=", calorie.breakfast.calorieEnd),
        limit(2),
      );

      const lunchQ = query(
        collection(this.db, "foods"),
        where("calorie", ">=", calorie.lunch.calorieStart),
        where("calorie", "<=", calorie.lunch.calorieEnd),
        limit(2),
      );

      const dinnerQ = query(
        collection(this.db, "foods"),
        where("calorie", ">=", calorie.dinner.calorieStart),
        where("calorie", "<=", calorie.dinner.calorieEnd),
        limit(2),
      );

      const breakfastSnapshot = await getDocs(breakfastQ);
      const lunchSnapshot = await getDocs(lunchQ);
      const dinnerSnapshot = await getDocs(dinnerQ);

      const userSearch: UserHistory = {
        id: undefined,
        userUid: uid,
        calorie,
        breakfastFood: breakfastSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Food),
        lunchFood: lunchSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Food),
        dinnerFood: dinnerSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Food),
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
      const q = query(collection(this.db, "foods"), where("name", "array-contains-any", name.split("")));
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
}
