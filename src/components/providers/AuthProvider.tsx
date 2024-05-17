import { createContext, ReactNode, useEffect, useState } from "react";
import { UserData } from "../../models/firebase/UserData.ts";
import { Nullable } from "../../models/nullable.ts";
import { UserService } from "../../services/UserService.ts";
import FirebaseService from "../../services/FirebaseService.ts";
import { onAuthStateChanged } from "@firebase/auth";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  user: UserData | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => true,
  logout: async () => true,
});

export default function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<Nullable<UserData>>(null);

  const login = async (email: string, password: string) => {
    const response = await UserService.login(email, password);

    if (response.error) {
      return false;
    }

    setUser(response.data!);
    return true;
  };

  const logout = async () => {
    const response = await UserService.logout();

    if (response.error) {
      return false;
    }

    setUser(null);
    return true;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FirebaseService.auth, async (user) => {
      if (user) {
        const response = await UserService.getCurrentUser();

        if (response.error) {
          return;
        }

        setUser(response.data!);
        return;
      }

      setUser(null);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
