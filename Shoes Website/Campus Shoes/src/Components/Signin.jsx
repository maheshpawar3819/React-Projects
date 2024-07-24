import React from "react";
import {
  userloginlogo,
  loginpasswrod,
  facebooklogo,
  twitterlogo,
  googlelogo,
  confirmpass
} from "./Utils/icons";

const Signin = () => {
  return (
    <div className="box-border mt-32 h-full">
      <div className="border-gray-300 border-2 h-auto w-96  p-3 m-auto mt-36 mb-5 rounded-lg shadow-xl">
        <p className="text-center text-3xl font-sans m-4 tracking-widest">
          Sign in 
        </p>
        <label htmlFor="username" className="text-lg font-sans ml-6">
          User Name
        </label>
        <br />
        <span>{userloginlogo}</span>
        <input
          type="text"
          className="border-black border-2 w-4/5 p-1 m-2 rounded-md "
          placeholder="type your username"
          id="username"
        />
        <br />
        <label htmlFor="password" className="text-lg font-sans ml-6">
          Password
        </label>
        <br />
        <span>{loginpasswrod}</span>
        <input
          type="password"
          className="border-black border-2 w-4/5 p-1 m-2 rounded-md"
          placeholder="type your password"
          id="password"
        />
        <label htmlFor="password" className="text-lg font-sans ml-6">
          Confirm Password
        </label>
        <br />
        <span>{confirmpass}</span>

        <input
          type="password"
          className="border-black border-2 w-4/5 p-1 m-2 rounded-md"
          placeholder="type your password"
          id="password"
        />

        <div className="flex justify-center m-3">
          <button className="bg-gray-500 p-2 px-20 rounded-xl text-white hover:bg-gray-600 tracking-widest">
            Sign In
          </button>
        </div>
        <p className="text-center m-4 text-gray-500 cursor-pointer">
          Alerady have A/c Login{" "}
        </p>
        <div className="flex justify-center gap-8">
          <div>{facebooklogo}</div>
          <div>{twitterlogo}</div>
          <div>{googlelogo}</div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
