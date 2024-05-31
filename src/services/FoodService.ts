import FirebaseService from "./FirebaseService.ts";
import { addDoc, collection, doc, endAt, getDocs, limit, orderBy, query, setDoc, startAt, where } from "firebase/firestore";
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
        where("calories", ">=", calorie.breakfast.calorieStart),
        where("calories", "<=", calorie.breakfast.calorieEnd),
        limit(50),
      );

      const lunchQ = query(
        collection(this.db, "foods"),
        where("calories", ">=", calorie.lunch.calorieStart),
        where("calories", "<=", calorie.lunch.calorieEnd),
        limit(50),
      );

      const dinnerQ = query(
        collection(this.db, "foods"),
        where("calories", ">=", calorie.dinner.calorieStart),
        where("calories", "<=", calorie.dinner.calorieEnd),
        limit(50),
      );

      const breakfastSnapshot = await getDocs(breakfastQ);
      const lunchSnapshot = await getDocs(lunchQ);
      const dinnerSnapshot = await getDocs(dinnerQ);

      const breakfast: Food[] = [];
      const lunch: Food[] = [];
      const dinner: Food[] = [];


      //randomize

      for(let i = 0; i < 2 && breakfastSnapshot.docs.length > 0; i++) {
        const j = Math.floor(Math.random() * breakfastSnapshot.docs.length - 2);
        breakfast.push({ id: breakfastSnapshot.docs[j].id, ...breakfastSnapshot.docs[j].data() } as Food);
      }

      for(let i = 0; i < 2 && lunchSnapshot.docs.length > 0; i++) {
        const j = Math.floor(Math.random() * lunchSnapshot.docs.length - 2);
        lunch.push({ id: lunchSnapshot.docs[j].id, ...lunchSnapshot.docs[j].data() } as Food);
      }

      for(let i = 0; i < 2 && dinnerSnapshot.docs.length > 0; i++) {
        const j = Math.floor(Math.random() * dinnerSnapshot.docs.length - 2);
        dinner.push({ id: dinnerSnapshot.docs[j].id, ...dinnerSnapshot.docs[j].data() } as Food);
      }

      console.log(breakfast, lunch, dinner)
      //eslint-disable-next-line
      //@ts-ignore
      const userSearch: UserHistory = {
        userUid: uid,
        calorie,
        breakfastFood: breakfast,
        lunchFood: lunch,
        dinnerFood: dinner,
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
      console.log(name)
      const q = query(collection(this.db, "foods"), orderBy('title'), startAt(name), endAt(name + "\uf8ff"), limit(20));
      const foodSnapshot = await getDocs(q);

      console.log(foodSnapshot)
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
