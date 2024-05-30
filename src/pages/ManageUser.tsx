import Layout from "../components/Layout.tsx";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import UserCard from "../components/cards/UserCard.tsx";
import { UserData } from "../models/firebase/user-data.ts";
import { UserService } from "../services/UserService.ts";

export default function ManageUser() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<UserData[]>([]);

  const getUsers = async () => {
    const result = await UserService.getAllUsers();

    setUsers(result.data ?? []);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <Layout>
        <div className="grid gap-5 py-5 mx-32">
          <div className="flex flex-row w-full">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <IoIosSearch size="1.5rem" />
              </div>
              <input
                ref={inputRef}
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-900 outline-none border-stroke text-body-color border-gray-300 border focus:border-primary rounded-md"
                placeholder="Search Users..."
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5">
            {users.map((user) => (
              <UserCard
                user={user}
                key={user.username}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
