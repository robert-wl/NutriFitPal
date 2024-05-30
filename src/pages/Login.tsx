import Layout from "../components/Layout.tsx";
import { Link } from "react-router-dom";
import { MdOutlineEmail, MdOutlineLock } from "react-icons/md";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../hooks/use-auth.ts";

const defaultLogin = {
  email: "",
  password: "",
};

type LoginForm = typeof defaultLogin;

export default function Login() {
  const [loginForm, setLoginForm] = useState<LoginForm>(defaultLogin);
  const { login } = useAuth();

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await login(loginForm.email, loginForm.password);

    if (!response) {
      toast.error("Login failed");
      return;
    }

    toast.success("Login success");
  };

  return (
    <Layout>
      <div className="flex items-center justify-center w-full px-4">
        <div className="w-[30rem] overflow-hidden rounded-lg bg-white shadow-md pt-16 pb-8 px-10 t  ext-center my-32">
          <div className="mb-10 text-center md:mb-16">
            <div className="mx-auto inline-block max-w-[160px]">
              <h1 className="text-primary font-bold text-3xl">Sign In</h1>
            </div>
          </div>
          <form onSubmit={handleLogin}>
            <div className="flex mb-6 px-5 py-3 gap-2 items-center border has-[:focus]:border-primary rounded-md">
              <MdOutlineEmail
                className="text-gray-400"
                size="1.5rem"
              />
              <input
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                type="text"
                required
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
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                type="password"
                required
                placeholder="Password"
                className="w-full text-base text-black bg-transparent outline-none border-stroke text-body-color"
              />
            </div>
            <div className="mb-10">
              <input
                type="submit"
                value="Sign In"
                className="w-full px-5 py-3 text-base font-medium text-white transition border rounded-md cursor-pointer border-primary bg-primary hover:bg-opacity-90"
              />
            </div>
          </form>
          <Link
            to="javascript:void(0)"
            className="inline-block mb-2 text-base text-primary hover:text-primary hover:underline">
            Lupa Kata Sandi?
          </Link>
          <p className="text-base text-secondary gap-2">
            <span className="pr-0.5">Belum punya akun?</span>
            <Link
              to="javascript:void(0)"
              className="text-primary hover:underline">
              {" "}
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
}
