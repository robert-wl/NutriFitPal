import { createContext, ReactNode, useEffect, useState } from "react";
import { UserService } from "../../services/UserService.ts";
import FirebaseService from "../../services/FirebaseService.ts";
import { onAuthStateChanged } from "@firebase/auth";
import { UserData } from "../../models/firebase/user-data.ts";
import { Nullable } from "../../models/nullable.ts";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  user: UserData | null;
  isLoading: boolean;
  updateUser: (user: UserData) => Promise<void>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>({
  user: {
    email: "obet",
    username: "obet",
    dateOfBirth: "10-22-2023",
    height: 1,
    weight: 1,
    gender: "obet",
    role: "admin",
    uid: "a1112312321",
  },
  updateUser: async () => {},
  isLoading: false,
  login: async () => true,
  logout: async () => true,
});

export default function AuthContextProvider({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<Nullable<UserData>>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    const response = await UserService.login(email, password);
    setIsLoading(false);
    if (response.error) {
      return false;
    }

    setUser(response.data!);
    return true;
  };

  const logout = async () => {
    setIsLoading(true);
    const response = await UserService.logout();
    setIsLoading(false);
    if (response.error) {
      return false;
    }

    setUser(null);
    return true;
  };

  const updateUser = async (user: UserData) => {
    setIsLoading(true);
    const response = await UserService.updateUser(user);
    setIsLoading(false);
    if (response.error) {
      return;
    }

    setUser(user);
  };

  useEffect(() => {
    setIsLoading(false);
    const unsubscribe = onAuthStateChanged(FirebaseService.auth, async (user) => {
      if (user) {
        setIsLoading(true);
        const response = await UserService.getCurrentUser();
        setIsLoading(false);

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
        user: user,
        login,
        logout,
        updateUser,
        isLoading,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
