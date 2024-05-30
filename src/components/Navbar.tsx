import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth.ts";
import { useState } from "react";
import { PiUserCircleLight } from "react-icons/pi";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex justify-between bg-white items-center px-8 py-4 sticky top-0 shadow-md z-[1000]">
      <Link to="/">
        <h1 className="text-primary font-bold text-3xl">NutriFitPal</h1>
      </Link>
      {user && (
        <div className="flex absolute top-1/4 left-1/2 -translate-x-1/2 space-x-10">
          <Link
            to="/search"
            className="transition-colors border-b-2 border-b-transparent hover:border-b-primary inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
            Search
          </Link>
          <Link
            to="/calculate"
            className="transition-colors border-b-2 border-b-transparent hover:border-b-primary inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
            Calculate
          </Link>
        </div>
      )}
      <div className="space-x-5 z-[1000]">
        {user ? (
          <>
            <div className="flex gap-5">
              <PiUserCircleLight
                onClick={() => setShowDropdown(!showDropdown)}
                className="cursor-pointer hover:text-primary transition-colors"
                size="3rem"
              />
            </div>
            {showDropdown && (
              <div className="absolute right-5 top-16 px-5 pb-2 pt-5 space-y-5 border rounded-md shadow-lg bg-white z-[1000]">
                <div className="flex flex-col items-end gap-0">
                  <span>Hello,</span>
                  <Link
                    to="/profile"
                    className="text-primary">
                    <span className="font-bold">{user.username}</span>
                  </Link>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full border-secondary border transition-colors rounded-md hover:bg-secondary hover:text-white inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
                  Logout
                </button>
              </div>
            )}
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="border-secondary border transition-colors rounded-md hover:bg-secondary hover:text-white inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
              Sign In
            </Link>
            <Link
              to="/register"
              className="border-secondary border transition-colors rounded-md hover:bg-secondary hover:text-white inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
