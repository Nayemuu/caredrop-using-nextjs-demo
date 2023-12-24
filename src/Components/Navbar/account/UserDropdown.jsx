/* eslint-disable jsx-a11y/anchor-is-valid */
"use client";

import React from "react";
import Link from "next/link";
import { useLogoutMutation } from "@/Redux/features/auth/authApi";

function UserDropdown({ userUserDropdown }) {
  const [logout, { isSuccess, isLoading }] = useLogoutMutation();
  return (
    <div
      className={`absolute z-50 right-0 top-13 bg-white rounded-lg shadow text-base divide-y divide-gray-300 h ${
        userUserDropdown && "hidden"
      }`}
    >
      <ul className="py-2 w-40" aria-labelledby="user-menu-button">
        <li>
          <Link
            href="/my-profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-center"
          >
            Profile
          </Link>
        </li>

        <li>
          <div
            onClick={() => !isLoading && logout()}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-center cursor-pointer"
          >
            Log Out
          </div>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdown;
