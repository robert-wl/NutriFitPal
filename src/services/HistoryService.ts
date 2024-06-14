import FirebaseService from "./FirebaseService.ts";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { UserHistory } from "../models/firebase/user-history.ts";

export default class HistoryService extends FirebaseService {
  public static async saveHistory(history: Omit<UserHistory, "id">) {
    try {
      const historyRef = collection(this.db, "history");
      await addDoc(historyRef, history);

      return true;
    } catch (err: any) {
      console.warn(err);
      return false;
    }
  }

  public static async getUserHistory(uid: string) {
    try {
      const historyRef = query(collection(this.db, "history"), where("userUid", "==", uid));
      const historySnapshot = await getDocs(historyRef);

      const history: UserHistory[] = [];

      historySnapshot.docs.forEach((doc) => {
        history.push({ id: doc.id, ...doc.data() } as UserHistory);
      });

      return history;
    } catch (err: any) {
      console.warn(err);
      return [];
    }
  }
}
