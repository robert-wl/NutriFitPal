import { getAuth, signInWithEmailAndPassword, UserCredential } from "@firebase/auth";
import { firebaseApp } from "../firebase/app.ts";
import { FirebaseResponse } from "../models/Response.ts";

export class AuthService {
  private static auth = getAuth(firebaseApp);

  public static async login(email: string, password: string): Promise<FirebaseResponse<UserCredential>> {
    try {
      const response = await signInWithEmailAndPassword(this.auth, email, password);

      return {
        data: response,
        error: null,
      };
    } catch (error: any) {
      return {
        data: null,
        error: error.message,
      };
    }
  }
}
