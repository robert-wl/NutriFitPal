import Navbar from "./Navbar.tsx";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Readonly<Props>) {
  return (
    <div className="flex flex-col w-[100vw] min-h-[100vh] bg-black font-poppins relative">
      <Navbar />
      {children}
    </div>
  );
}
