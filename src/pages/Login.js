import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [statusLogin, setStatusLogin] = useState();

  const handleCheckboxChange = () => {
    setCheckbox(!checkbox);
  };

  const LoginSS = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Access-Control-Allow-Origin", "*");
  headers.append("Access-Control-Allow-Credentials", "true");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const resBody = {
      userid: email,
      drawssap: password,
    };
    ///RemomaxBE 127.0.0.2
    const response = await fetch(
      `http://3.133.137.68:8080/RemomaxBE/check/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resBody),
      }
    );

    if (response.ok) {
      const data = await response.json();
      alert(data.massage);
      navigate("/home");
      console.log(data);
    } else {
      const data = await response.json();
      alert(data.massage);
      console.log(data);
    }
  };

  return (
    <form
      className="bg-white flex justify-center items-center min-h-screen p-2"
      onSubmit={handleSubmit}
    >
      <div className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 max-w-sm">
        <div className=" pb-4">
          <img
            //pt-16 pb-16
            className="object-cover p-4 rmx_blue "
            src="miti.jpg"
            alt="Logo"
          ></img>
        </div>
        <div className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="link-checkbox"
              type="checkbox"
              onChange={() => {
                handleCheckboxChange();
              }}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              value={checkbox}
              required
            />
            <label
              for="link-checkbox"
              className="ml-2 text-sm font-medium text-center"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>

          <div className="flex flex-col md:justify-between">
            <button
              className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
            <div className="text-center text-zinc-600 text-xs mt-4">
              <div>Forgot Password?</div>
              <div>Contact REMOMAX 000-000-0000</div>
            </div>
          </div>
        </div>
        <p className="text-center text-zinc-600 text-xs  ">
          Copyright © 1999 - 2023 REMOMAX
        </p>
      </div>
    </form>
  );
}
