"use client"
import React from "react";
import Image from "next/image";
import Logo from "@/assets/brand/swipepoll_horizontal.png";
import { useClerk, useUser } from "@clerk/nextjs";
import { Plus } from "react-feather";

const DashboardNavbar = () => {
  const { signOut } = useClerk()
  const { user } = useUser()

  return (
    <div className={"w-full p-16"}>
      <div className={"absolute left-0 right-0 text-center"}>
        <Image src={Logo as any} className={"mx-auto"} alt={"Logo"} width={200} />
      </div>

      <div className={"flex w-full justify-end items-center gap-4"}>
        <button className={"btn btn-primary hover:opacity-80 flex gap-1 rounded-full text-white"}>
          <Plus size={20} />
          Create a Poll
        </button>

        <div className="dropdown dropdown-hover">
          <label className="btn btn-ghost hover:bg-gray-200 flex gap-4" tabIndex="0">
            <p className={"text-gray-800"}>{user?.fullName || "User"}</p>
            <Image className={"rounded-full"} src={user?.imageUrl || ""} alt={"Avatar"} width={40} height={40}/>
          </label>
          <div className="dropdown-menu mt-4 dropdown-menu-bottom-left">
            <a onClick={() => signOut()} className="dropdown-item text-sm">Log out</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardNavbar;
