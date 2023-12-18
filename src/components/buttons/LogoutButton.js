"use client";
import { signOut } from "next-auth/react";
import { MdLogout } from "react-icons/md";

const LogoutButton = () => {
  return (
    <button
      className="flex gap-2 items-center border p-2 px-4 shadow"
      onClick={() => signOut()}
    >
      <span>Logout</span>
      <MdLogout />
    </button>
  );
};

export default LogoutButton;
