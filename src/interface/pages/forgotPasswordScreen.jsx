import React from "react";
import IndexField from "../components/IndexField";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const ForgotPasswordScreen = () => {
  return (
    <AuthLayout
      title="Forgot Password"
      description="Please enter your email address in order to reset your password"
      className="w-full max-w-[352px] gap-y-8 px-4 sm:px-6 md:px-8"
    >
      {/* Input field styled to match Submit button */}
      <IndexField
        variant={"outlined"}
        label={"Email Address"}
        sx={
          "w-[280px] h-[50px] rounded-[10px] text-start border border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
        }
        placeholder={"Email Address"}
        name={"email"}
        type={"email"}
      />
      <div className="flex flex-col mx-auto w-full mt-6">
        {/* Submit button */}
        <Link to="/signup">
          <Button label="Submit" className="block bg-[#06726A] text-white h-[50px]" />
        </Link>

        {/* Resend Token button */}
        <Button label="Resend Token" className="text-[#06726A] w-full h-[50px] mt-3" />
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordScreen;
