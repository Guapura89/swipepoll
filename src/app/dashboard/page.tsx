"use client"
import DashboardNavbar from "@/components/Dashboard/Navbar";
import PollCard from "@/components/Dashboard/PollCard";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { useAuthStore } from "@/store/AuthUser.store";
import { useFirebase } from "@/core/hooks/useFirebase";

const Dashboard = () => {
  const db = useFirebase({ collectionPath: "users" });
  const { user } = useUser();

  const setUser = useAuthStore(state => state.setUser);
  const authUser = useAuthStore(state => state.user);

  const checkUser = async () => {
    if (authUser) return

    const userExits = await db.docWithId(`users/${user.id}`)

    if (!userExits || !userExits.id) {
      const newUser = await db.set(user?.id as string, {
        email: user.emailAddresses[0].emailAddress,
        fullName: user.fullName,
        imageUrl: user.imageUrl,
        id: user.id
      });

      return setUser(newUser);
    }

    setUser(userExits);
  }

  useEffect(() => {
    if (!user) return;

    checkUser();
  }, [user, authUser]);

  return (
    <>
      <DashboardNavbar />

      <div className={"grid grid-cols-12 mt-12"}>
        <div className={"col-start-4 col-span-6"}>
          <div className={"flex gap-4 flex-wrap"}>
            {Array(4).fill(4).map((_, i) => <PollCard key={i} />)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
