import Layout from "../components/Layout.tsx";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import UserCard from "../components/cards/UserCard.tsx";
import { UserData } from "../models/firebase/user-data.ts";
import { UserService } from "../services/UserService.ts";
import { Nullable } from "../types/nullable.ts";
import UserCardSkeleton from "../components/skeletons/cards/UserCardSkeleton.tsx";

export default function ManageUser() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [users, setUsers] = useState<Nullable<UserData[]>>(null);

  const getUsers = async () => {
    const result = await UserService.getAllUsers();

    setUsers(result.data ?? []);
  };

  const handleSearch = async () => {
    setUsers(null);
    const search = inputRef.current?.value;

    if (!search || search === "") {
      getUsers().then();
      return;
    }

    const response = await UserService.getUsersByName(search.toLowerCase());
    setUsers(response.data ?? []);
  };

  useEffect(() => {
    getUsers().then();

    const current = inputRef.current;
    current?.addEventListener("search", handleSearch);

    return () => {
      current?.removeEventListener("search", handleSearch);
    };
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
            {users
              ? users.map((user) => (
                  <UserCard
                    user={user}
                    setUsers={setUsers}
                    key={user.username}
                  />
                ))
              : Array.from({ length: 25 }).map(() => <UserCardSkeleton />)}
          </div>
        </div>
      </Layout>
    </>
  );
}
