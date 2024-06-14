import { createContext, ReactNode, useEffect } from "react";
import { UserService } from "../../services/UserService.ts";
import FirebaseService from "../../services/FirebaseService.ts";
import { onAuthStateChanged } from "@firebase/auth";
import { UserData } from "../../models/firebase/user-data.ts";
import { Nullable } from "../../types/nullable.ts";
import { useLocalStorage } from "../../hooks/use-local-storage.ts";

interface Props {
  children: ReactNode;
}

interface AuthContextType {
  user: UserData | null;
  updateUser: (user: UserData) => Promise<void>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<boolean>;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  updateUser: async () => {},
  login: async () => true,
  logout: async () => true,
});

export default function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useLocalStorage<Nullable<UserData>>("user", null);

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

  const updateUser = async (user: UserData) => {
    const response = await UserService.updateUser(user);
    if (response.error) {
      return;
    }

    setUser(user);
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
        user: user,
        login,
        logout,
        updateUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
