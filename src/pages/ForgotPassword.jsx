import { Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const handleForgotPassword = (data) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center">
      <div className="space-y-5 w-11/12 md:w-[450px]">
        <div>
          <div className="flex items-center justify-center">
            <img src={logo} alt={"logo"} />
            <div className="ms-[10.89px] font-bold bg-[#FBFBFB] text-[10.608px] rounded-[3.201px] drop-shadow-md">
              CLOUD 1.2
            </div>
          </div>
          <h3 className="font-semibold text-[24px] text-center mt-[26px] mb-[28px] leading-[32px]">
            Forgot password
          </h3>
          <div>
            <form onSubmit={handleSubmit(handleForgotPassword)}>
              <div className="space-y-2">
                <label htmlFor="email" className="text-[14px] font-semibold">
                  Your email address
                </label>
                <Input
                  type="email"
                  name="email"
                  {...register("email", {
                    required: "Can not be empty",
                  })}
                />
              </div>
              <div className="mt-[20px]">
                <button className="bg-black text-white font-semibold text-sm w-full p-2 rounded-lg mb-[12px]">
                  Get reset link
                </button>
                <Link to="/login">
                  <button className="bg-gray-200 text-black font-semibold text-sm w-full p-2 rounded-lg text-center">
                    Back to Log in
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
