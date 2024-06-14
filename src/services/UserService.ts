import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc } from "firebase/firestore";
import { FirebaseResponse } from "../types/response.ts";
import FirebaseService from "./FirebaseService";
import { UserData } from "../models/firebase/user-data.ts";

export class UserService extends FirebaseService {
  public static async register(
    username: string,
    email: string,
    password: string,
    dateOfBirth: string,
    height: number,
    weight: number,
    gender: string,
  ): Promise<FirebaseResponse<boolean>> {
    try {
      const authResponse = await createUserWithEmailAndPassword(this.auth, email, password);

      const userData: UserData = {
        uid: authResponse.user.uid,
        email,
        username: username.toLowerCase(),
        dateOfBirth,
        height,
        weight,
        gender,
        role: "user",
      };

      const docRef = doc(this.db, "users", userData.uid);

      await setDoc(docRef, userData);

      return {
        data: true,
      };
    } catch (err: any) {
      console.warn(err);
      return {
        error: err.message,
      };
    }
  }

  public static async login(email: string, password: string): Promise<FirebaseResponse<UserData>> {
    try {
      const response = await signInWithEmailAndPassword(this.auth, email, password);

      const docRef = doc(this.db, "users", response.user.uid);

      const data = await getDoc(docRef).then((doc) => doc.data());

      if (!data) {
        return {
          error: "User not found",
        };
      }

      return {
        data: data as UserData,
      };
    } catch (err: any) {
      console.warn(err);
      return {
        error: err.message,
      };
    }
  }

  public static async logout(): Promise<FirebaseResponse<boolean>> {
    try {
      await this.auth.signOut();

      return {
        data: true,
      };
    } catch (err: any) {
      console.warn(err);
      return {
        error: err.message,
      };
    }
  }

  public static async getCurrentUser(): Promise<FirebaseResponse<UserData>> {
    try {
      const user = this.auth.currentUser;

      if (!user) {
        return {
          error: "User not found",
        };
      }

      const docRef = doc(this.db, "users", user.uid);

      const data = await getDoc(docRef).then((doc) => doc.data());

      if (!data) {
        return {
          error: "User not found",
        };
      }

      return {
        data: data as UserData,
      };
    } catch (err: any) {
      console.warn(err);
      return {
        error: err.message,
      };
    }
  }

  public static async updateUser(userData: UserData): Promise<FirebaseResponse<boolean>> {
    try {
      const docRef = doc(this.db, "users", userData.uid);

      await setDoc(docRef, userData);

      return {
        data: true,
      };
    } catch (err: any) {
      console.warn(err);
      return {
        error: err.message,
      };
    }
  }

  public static async getAllUsers(): Promise<FirebaseResponse<UserData[]>> {
    try {
      const collectionRef = query(collection(this.db, "users"), orderBy("role"), limit(20));

      const response = await getDocs(collectionRef);

      const data: UserData[] = [];

      response.forEach((doc) => {
        data.push(doc.data() as UserData);
      });

      return {
        data,
      };
    } catch (err: any) {
      console.warn(err);
      return {
        error: err.message,
      };
    }
  }

  public static async getUsersByName(name: string): Promise<FirebaseResponse<UserData[]>> {
    try {
      const collectionRef = query(collection(this.db, "users"), orderBy("username"), limit(20));

      const response = await getDocs(collectionRef);

      const data: UserData[] = [];

      response.forEach((doc) => {
        data.push(doc.data() as UserData);
      });

      return {
        data: data.filter((user) => user.username.includes(name)),
      };
    } catch (err: any) {
      console.warn(err);
      return {
        error: err.message,
      };
    }
  }

  public static async setUserRole(uid: string, role: string): Promise<FirebaseResponse<boolean>> {
    try {
      const docRef = doc(this.db, "users", uid);

      await setDoc(docRef, { role }, { merge: true });

      return {
        data: true,
      };
    } catch (err: any) {
      console.warn(err);
      return {
        error: err.message,
      };
    }
  }
}
