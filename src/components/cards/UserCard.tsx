import { PiUserCircleLight } from "react-icons/pi";
import { UserData } from "../../models/firebase/user-data.ts";
import { UserService } from "../../services/UserService.ts";
import { Dispatch, SetStateAction } from "react";
import { Nullable } from "../../types/nullable.ts";

interface Props {
  user: UserData;
  setUsers: Dispatch<SetStateAction<Nullable<UserData[]>>>;
}

export default function UserCard({ user, setUsers }: Props) {
  const handlePromote = async () => {
    setUsers((prev) => prev?.map((u) => (u.uid === user.uid ? { ...u, role: "admin" } : u)) ?? null);
    await UserService.setUserRole(user.uid, "admin");
  };

  const handleDemote = async () => {
    setUsers((prev) => prev?.map((u) => (u.uid === user.uid ? { ...u, role: "user" } : u)) ?? null);
    await UserService.setUserRole(user.uid, "user");
  };

  return (
    <div className="flex flex-col p-4 items-center rounded-lg bg-white border relative">
      <h2 className="p-5 space-y-3">
        {user.role === "admin" ? (
          <div className="bg-primary text-lg p-2 px-4 text-white rounded-xl">{user.role}</div>
        ) : (
          <div className="bg-gray-200 text-lg p-2 px-4 rounded-xl">{user.role}</div>
        )}
      </h2>
      <PiUserCircleLight size="10rem" />
      <h3 className="flex items-end text-xl gap-4 font-bold text-gray-900 text-start capitalize">{user.username}</h3>
      <h2 className="text-md pb-5">{user.email}</h2>
      {user.role === "admin" ? (
        <button
          onClick={handleDemote}
          className="w-1/2 border-secondary border transition-colors rounded-md hover:bg-secondary hover:text-white inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
          Demote
        </button>
      ) : (
        <button
          onClick={handlePromote}
          className="w-1/2 border-secondary border transition-colors rounded-md hover:bg-secondary hover:text-white inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
          Promote
        </button>
      )}
    </div>
  );
}
