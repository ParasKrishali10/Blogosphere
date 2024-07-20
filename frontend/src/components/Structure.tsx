import { Link, useNavigate } from "react-router-dom";
import { InputBox } from "./InputBox";
import { useState } from "react";
import { SignupInput } from "paras_kris-zod_validation";
import axios from "axios";
import { BACKEND_URL } from "../config";

export const Structure = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setpostInputs] = useState<SignupInput>({
    email: "",
    password: "",
    name: "",
  });

  const navigate = useNavigate();

  async function sendRequest() {
    try {
      const data = type === "signup" ? postInputs : { email: postInputs.email, password: postInputs.password };
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, data);
      const token = response.data;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (e) {
      alert(`${type === "signup" ? "Signup" : "Signin"} Failed`);
    }
  }

  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl">
            {type === "signin" ? "Log In To Your Account" : "Create An Account"}
          </div>
          <div className="font-semibold mt-1 text-slate-400 ml-1">
            {type === "signin" ? "Don't Have Account ?" : "Already have an account ?"}
            <Link to={type === "signin" ? "/signin" : "/signup"} className="ml-2 underline">
              {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
          <div>
            {type === "signup" ? (
              <InputBox
                label={"Username"}
                placeholder={"Enter your username"}
                onChange={(e) => {
                  setpostInputs({ ...postInputs, name: e.target.value });
                }}
              />
            ) : null}
          </div>
          <div>
            <InputBox
              label={"Email"}
              placeholder={"john@gmail.com"}
              onChange={(e) => {
                setpostInputs({ ...postInputs, email: e.target.value });
              }}
            />
          </div>
          <div>
            <InputBox
              label={"Password"}
              placeholder={"123456"}
              onChange={(e) => {
                setpostInputs({ ...postInputs, password: e.target.value });
              }}
            />
          </div>
          <button onClick={sendRequest} className="bg-black text-white w-full p-2 mt-4 rounded-md">
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};