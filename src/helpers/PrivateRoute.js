"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function PrivateRoute() {
  const router = useRouter();
  const { accessToken } = useSelector((state) => state?.auth);

  //console.log(accessToken);
  useEffect(() => {
    if (!accessToken) {
      return router.replace(`/login`);
    }
  }, [accessToken]);
}

export default PrivateRoute;
