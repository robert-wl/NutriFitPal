import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { firebaseApp } from "../firebase/app";
import { UserData } from "../models/firebase/UserData";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { FirebaseResponse } from "../models/Response";

export class FirebaseService {
    private static db = getFirestore(firebaseApp);
    private static auth = getAuth(firebaseApp);


    public static async register(username: string, email: string, password: string, height: number, weight: number, gender: string): Promise<FirebaseResponse<boolean>> {
        try {
            const authResponse = await createUserWithEmailAndPassword(this.auth, email, password);

            const userData: UserData = {
                uid: authResponse.user.uid,
                email,
                username,
                password,
                height,
                weight,
                gender
            }

            const docRef = doc(this.db, "users", userData.uid);

            await setDoc(docRef, userData);

            return {
                data: true,
                error: null,
            };
        } catch (err) {
            const error = err as Error;
            return {
                data: false,
                error: error.message,
            };
        }
    }
}
