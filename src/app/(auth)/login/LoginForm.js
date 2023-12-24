"use client";
import Error from "@/Components/reuseable common Components/Error";
import { useLoginMutation } from "@/Redux/features/auth/authApi";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();
  const { accessToken } = useSelector((state) => state.auth);

  const [
    login,
    { isLoading, isError, isSuccess, data, error: loginResponseError },
  ] = useLoginMutation();

  useEffect(() => {
    if (isError && loginResponseError) {
      console.log("loginResponseError = ", loginResponseError);
      setError("There was an Error");
    }
  }, [isError, loginResponseError]);

  const submitHandler = (e) => {
    e.preventDefault();

    // console.log("email = ", email);
    // console.log("password = ", password);
    setError("");

    login({
      email,
      password,
    });
  };

  // console.log(isLoading, isError, isSuccess, data, loginResponseError);
  if (isSuccess || accessToken) {
    router.replace("/");
  }
  return (
    <div className="container">
      <div className="flex flex-col justify-center py-[120px] sm:px-6 lg:px-8 px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    placeholder="user@example.com"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Sign in
                  </button>
                </span>
              </div>
              {error && <Error message={error} />}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
