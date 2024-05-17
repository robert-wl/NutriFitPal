import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider.tsx";

export default function useAuth() {
  return useContext(AuthContext);
}
