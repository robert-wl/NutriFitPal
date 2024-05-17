import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "../firebase/app";
import { getAuth } from "@firebase/auth";

export default class FirebaseService {
  public static db = getFirestore(firebaseApp);
  public static auth = getAuth(firebaseApp);
}
