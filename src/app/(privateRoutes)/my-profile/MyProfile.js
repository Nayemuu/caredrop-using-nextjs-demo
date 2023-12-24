"use client";

import { useMyProfilePageUserProfileInfoQuery } from "@/Redux/features/MyProfilePage/MyProfilePageApi";
import Image from "next/image";
import { useEffect } from "react";

function MyProfile(props) {
  const { isLoading, isError, isSuccess, data, error } =
    useMyProfilePageUserProfileInfoQuery();

  // useEffect(() => {
  //   if (isSuccess && data) {
  //     console.log("data = ", data);
  //   }
  // }, [isSuccess, data]);

  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-[2rem] sm:text-[2.25rem] md:text-[2.625rem] lg:text-5xl xxl:text-6xl font-semibold text-primary leading-[30.6px] md:leading-[40.6px]  lg:leading-[50.6px] xl:leading-[65.6px] xxl:leading-[71.6px]">
            {data?.full_name ? data.full_name : "user"}
          </div>

          <div className="text-[#757575] text-xl sm:text-xl md:text-2xl lg:text-2xl font-normal leading-[20.8px] sm:leading-[35.8px] mt-[6px] xxl:mt-[10px]">
            {data?.email ? data.email : "email"}
          </div>

          <div className="text-[#757575] text-xl sm:text-xl md:text-2xl lg:text-2xl font-normal leading-[20.8px] sm:leading-[35.8px] mt-[6px] xxl:mt-[10px]">
            {data?.designation ? data.designation : "designation"}
          </div>

          <div className="text-[#757575] text-xl sm:text-xl md:text-2xl lg:text-2xl font-normal leading-[20.8px] sm:leading-[35.8px] mt-[6px] xxl:mt-[10px]">
            {data?.working_organization
              ? data.working_organization
              : "designation"}
          </div>
        </div>

        {data?.photo && (
          <div className="relative rounded-full h-[397px] w-[397px] ring-2 ring-primary">
            <Image
              fill
              src={data.photo}
              alt="profile-pic"
              className="object-cover rounded-full"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MyProfile;
