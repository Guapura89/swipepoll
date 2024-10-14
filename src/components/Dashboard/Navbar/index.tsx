"use client"
import React from "react";
import Image from "next/image";
import Logo from "@/assets/brand/swipepoll_horizontal.png";
import { useClerk, useUser } from "@clerk/nextjs";

const DashboardNavbar = () => {
  const { signOut } = useClerk()
  const { user } = useUser()

  console.log(user)

  return (
    <div className={"w-full p-16"}>
      <div className={"absolute left-0 right-0 text-center"}>
        <Image src={Logo as any} className={"mx-auto"} alt={"Logo"} width={200} />
      </div>

      <div className={"flex w-full justify-end items-center gap-4"}>
        <button onClick={() => signOut()} className={"btn btn-outline rounded-full text-gray-800"}>Log out</button>
        <div className={"flex items-center gap-4"}>
          <p className={"text-gray-800"}>{user?.fullName || "User"}</p>
          <Image className={"rounded-full"} src={user?.imageUrl || ""} alt={"Avatar"} width={40} height={40} />
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar;
