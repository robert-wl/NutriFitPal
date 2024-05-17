import Layout from "../components/Layout.tsx";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbWeight } from "react-icons/tb";
import { PiRuler } from "react-icons/pi";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { UserService } from "../services/UserService.ts";

const defaultRegister = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  weight: 0,
  height: 0,
  gender: "",
};

type RegisterForm = typeof defaultRegister;

export default function Register() {
  const [registerForm, setRegisterForm] = useState<RegisterForm>(defaultRegister);
  const navigate = useNavigate();

  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (registerForm.username === "") {
      toast.error("Username is required");
      return;
    }
    if (registerForm.email === "") {
      toast.error("Email is required");
      return;
    }
    if (registerForm.password === "") {
      toast.error("Password is required");
      return;
    }
    if (registerForm.confirmPassword === "") {
      toast.error("Confirm Password is required");
      return;
    }
    if (registerForm.password !== registerForm.confirmPassword) {
      toast.error("Password and Confirm Password must be the same");
      return;
    }
    if (registerForm.weight === 0) {
      toast.error("Weight is required");
      return;
    }
    if (registerForm.height === 0) {
      toast.error("Height is required");
      return;
    }
    if (registerForm.gender === "") {
      toast.error("Gender is required");
      return;
    }

    const response = await UserService.register(
      registerForm.username,
      registerForm.email,
      registerForm.password,
      registerForm.height,
      registerForm.weight,
      registerForm.gender,
    );

    if (response.error) {
      toast.error(response.error);
      return;
    }

    toast.success("Register success");
    navigate(0);
  };

  return (
    <Layout>
      <div className="flex items-center justify-center w-full px-4">
        <div className="w-[30rem] overflow-hidden rounded-lg bg-white shadow-md pt-16 pb-8 px-10 text-center my-32">
          <div className="mb-10 text-center md:mb-16">
            <div className="mx-auto inline-block max-w-[160px]">
              <h1 className="text-primary font-bold text-3xl">Sign Up</h1>
            </div>
          </div>
          <form onSubmit={handleRegister}>
            <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
              <FaRegUser
                className="text-gray-400"
                size="1.25rem"
              />
              <input
                type="text"
                required
                onChange={(e) => setRegisterForm({ ...registerForm, username: e.target.value })}
                placeholder="Username"
                className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
              />
            </div>
            <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
              <MdOutlineEmail
                className="text-gray-400"
                size="1.5rem"
              />
              <input
                type="text"
                required
                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                placeholder="Email"
                className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
              />
            </div>
            <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
              <MdOutlineLock
                className="text-gray-400"
                size="1.5rem"
              />
              <input
                type="password"
                required
                onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                placeholder="Password"
                className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
              />
            </div>
            <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
              <MdOutlineLock
                className="text-gray-400"
                size="1.5rem"
              />
              <input
                type="password"
                required
                onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                placeholder="Confirm Password"
                className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
                <TbWeight
                  className="text-gray-400"
                  size="1.5rem"
                />
                <input
                  type="number"
                  required
                  onChange={(e) => setRegisterForm({ ...registerForm, weight: parseInt(e.target.value) })}
                  placeholder="Weight"
                  className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
                />
              </div>
              <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
                <PiRuler
                  className="text-gray-400"
                  size="1.5rem"
                />
                <input
                  type="number"
                  required
                  onChange={(e) => setRegisterForm({ ...registerForm, height: parseInt(e.target.value) })}
                  placeholder="Height"
                  className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
                />
              </div>
            </div>
            <div className="flex gap-4 mb-6">
              <div className="flex items-center ps-4 w-full border rounded-md">
                <input
                  id="bordered-radio-1"
                  type="radio"
                  onClick={() => setRegisterForm({ ...registerForm, gender: "male" })}
                  checked={registerForm.gender === "male"}
                  name="bordered-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="bordered-radio-1"
                  className="w-full py-4 ms-2 text-base font-medium text-start text-gray-400">
                  Male
                </label>
              </div>
              <div className="flex items-center ps-4 w-full border rounded-md">
                <input
                  id="bordered-radio-2"
                  type="radio"
                  onClick={() => setRegisterForm({ ...registerForm, gender: "female" })}
                  checked={registerForm.gender === "female"}
                  name="bordered-radio"
                  className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="bordered-radio-2"
                  className="w-full py-4 ms-2 text-base font-medium text-start text-gray-400">
                  Female
                </label>
              </div>
            </div>
            <div className="mb-10">
              <button
                type="submit"
                className="w-full px-5 py-3 text-base font-medium text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90">
                Sign In
              </button>
            </div>
          </form>
          <p className="text-base text-secondary gap-2">
            <span className="pr-0.5">Sudah punya akun?</span>
            <Link
              to="javascript:void(0)"
              className="text-primary hover:underline">
              {" "}
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
