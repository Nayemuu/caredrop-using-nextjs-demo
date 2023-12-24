"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userLoggedIn } from "../Redux/features/auth/authSlice";

function useLocalPropertiesCheck() {
  const [propertiesChecked, setPropertieshChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // Checking user was logged in or not
    const localAuth = localStorage.getItem("auth");
    // console.log('localAuth = ', localAuth);

    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.access_token) {
        // console.log(auth);
        dispatch(
          userLoggedIn({
            access_token: auth.access_token,
          })
        );

        // document.cookie = `access_token = ${auth.access_token}`;
      }
    }

    // console.log('LocalPropertiesChecked');
    setPropertieshChecked(true);
  }, []);

  return propertiesChecked;
}

export default useLocalPropertiesCheck;
