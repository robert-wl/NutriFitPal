import Layout from "../components/Layout.tsx";
import useAuth from "../hooks/use-auth.ts";
import { PiUserCircleLight } from "react-icons/pi";
import HistoryDropdown from "../components/dropdowns/HistoryDropdown.tsx";
import { useEffect, useState } from "react";
import HistoryService from "../services/HistoryService.ts";
import { UserHistory } from "../models/firebase/user-history.ts";
import Pagination from "../components/Pagination.tsx";
import { Nullable } from "../types/nullable.ts";
import HistoryDropdownSkeleton from "../components/skeletons/dropdowns/HistoryDropdownSkeleton.tsx";

export default function Profile() {
  const [currentPage, setCurrentPage] = useState(1);
  const [histories, setHistories] = useState<Nullable<UserHistory[]>>(null);
  const { user } = useAuth();

  const totalPage = Math.ceil((histories?.length ?? 0) / 10);

  const getUserHistory = async () => {
    const userHistories = await HistoryService.getUserHistory(user?.uid || "");
    setHistories(userHistories);
  };

  useEffect(() => {
    getUserHistory();
  }, []);

  return (
    <>
      <Layout>
        <div className="grid gap-5 py-5 mx-32">
          <div className="grid flex-1 rounded-lg bg-white border">
            <div className="p-5 space-y-3">
              <h3 className="flex items-end text-4xl gap-4 font-bold text-secondary text-start">My Profile</h3>
            </div>
            <hr className="border-gray-300" />
            <div className="flex p-5 space-y-3 justify-start items-center w-full gap-20">
              <PiUserCircleLight
                className="cursor-pointer hover:text-primary transition-colors"
                size="20rem"
              />
              <div className="flex flex-col items-start gap-3">
                <div className="flex space-x-3">
                  <span className="font-bold text-lg min-w-32 text-start">Username:</span>
                  <span className="text-lg">{user?.username}</span>
                </div>
                <div className="flex space-x-3">
                  <span className="font-bold text-lg min-w-32 text-start">Email:</span>
                  <span className="text-lg">{user?.email}</span>
                </div>
                <div className="flex space-x-3">
                  <span className="font-bold text-lg min-w-32 text-start">Date of Birth:</span>
                  <span className="text-lg">{user?.dateOfBirth}</span>
                </div>
                <div className="flex space-x-3">
                  <span className="font-bold text-lg min-w-32 text-start">Height:</span>
                  <span className="text-lg">{user?.height}</span>
                </div>
                <div className="flex space-x-3">
                  <div className="font-bold text-lg min-w-32 text-start">Weight:</div>
                  <span className="text-lg">{user?.weight}</span>
                </div>
              </div>
            </div>
          </div>
          {histories
            ? histories.slice((currentPage - 1) * 10, currentPage * 10).map((history) => (
                <HistoryDropdown
                  key={history.id}
                  history={history}
                />
              ))
            : Array.from({ length: 10 }).map(() => <HistoryDropdownSkeleton />)}
        </div>
        <Pagination
          currentPage={currentPage}
          maxPage={totalPage}
          changePage={setCurrentPage}
        />
      </Layout>
    </>
  );
}
