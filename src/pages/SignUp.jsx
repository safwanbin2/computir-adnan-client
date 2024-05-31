import logo from "../assets/images/logo.png";
import signUpBg from "../assets/images/signUp-bg.png";
import google from "../assets/svgs/google-black.svg";
import github from "../assets/svgs/github-black.svg";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { PasswordInput } from "@saas-ui/react";
import { Input } from "@chakra-ui/react";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center md:justify-between overflow-hidden h-screen">
      <div className="flex items-center justify-center w-full md:w-[55%] lg:w-[60%]">
        <div className="w-11/12 md:w-[450px]">
          <div>
            <div className="flex items-center">
              <img src={logo} alt={"logo"} />
              <div className="ms-[10.89px] font-bold bg-[#FBFBFB] text-[10.608px] rounded-[3.201px] drop-shadow-md">
                CLOUD 1.2
              </div>
            </div>
            <div className="mt-[25px] mb-[28px] text-[20px] font-semibold">
              Welcome Back
            </div>
            <div className="space-y-4 mb-3">
              <button className="p-2 border text-sm font-semibold w-full flex justify-center items-center gap-2 bg-transparent rounded-[6px]">
                <span>
                  <img src={google} />
                </span>{" "}
                Continue with Google
              </button>
              <button className="p-2 border text-sm font-semibold w-full flex justify-center items-center gap-2 bg-transparent rounded-[6px]">
                <span>
                  <img src={github} />
                </span>{" "}
                Continue with Github
              </button>
            </div>
            <div className="flex items-center justify-center mb-[36px]">
              <span className="w-[100%] h-[1px] bg-[#E7E7E8]"></span>
              <span className="text-gray-500 w-[100%] text-center">
                or continue with
              </span>
              <span className="w-[100%] h-[1px] bg-[#E7E7E8]"></span>
            </div>
            <div>
              <form onSubmit={handleSubmit(handleSignUp)} className="space-y-3">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[14px]">
                    Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    {...register("email", {
                      required: "Can not be empty",
                    })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="text-[14px]">
                    Password
                  </label>
                  <PasswordInput
                    name="password"
                    {...register("password", {
                      required: "Can not be empty",
                    })}
                  />
                </div>
                <div>
                  <Link
                    className="text-[13px] hover:underline text-gray-500"
                    to="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <button className="bg-black text-white font-semibold text-sm w-full p-2 rounded-lg">
                  Sign up
                </button>
                <div className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <Link className="text-gray-700" to="/login">
                    Log in
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:w-[45%] lg:w-[40%] overflow-hidden md:flex md:justify-end">
        <img src={signUpBg} className="w-full h-screen" />
      </div>
    </div>
  );
};

export default SignUp;
