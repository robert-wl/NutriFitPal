import { PiUserCircleLight } from "react-icons/pi";
import { UserData } from "../../models/firebase/user-data.ts";
import { UserService } from "../../services/UserService.ts";

interface Props {
  user: UserData;
}

export default function UserCard({ user }: Props) {
  const handlePromote = () => {
    UserService.setUserRole(user.uid, "admin");
  };

  const handleDemote = () => {
    UserService.setUserRole(user.uid, "user");
  };

  return (
    <div className="flex flex-col rounded-lg bg-white border relative">
      <h2 className="p-5 space-y-3">{user.role}</h2>
      <PiUserCircleLight
        className="cursor-pointer hover:text-primary transition-colors"
        size="3rem"
      />
      <h3 className="flex items-end text-4xl gap-4 font-bold text-gray-900 text-start">{user.username}</h3>
      <h2 className="text-lg">{user.email}</h2>

      {user.role === "admin" ? (
        <button
          onClick={handleDemote}
          className="w-full border-secondary border transition-colors rounded-md hover:bg-secondary hover:text-white inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
          Demote
        </button>
      ) : (
        <button
          onClick={handlePromote}
          className="w-full border-secondary border transition-colors rounded-md hover:bg-secondary hover:text-white inline-flex items-center justify-center py-2 px-5 text-center text-base font-medium text-secondary">
          Promote
        </button>
      )}
    </div>
  );
}
