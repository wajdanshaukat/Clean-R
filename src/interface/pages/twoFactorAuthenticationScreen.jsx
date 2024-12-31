import React from "react";
// import IndexField from "../components/IndexField";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import TokenField from "../components/TokenField";
import { Link } from "react-router-dom";

const TwoFactorAuthenticationScreen = () => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      document.getElementById("submitted").checked = true;
    }
  };

  return (
    <AuthLayout
      title="Token Input"
      description="Please enter the 4-digit code sent to your email address"
      className="w-full max-w-[352px] px-4 sm:px-6 md:px-8 gap-y-8"
    >
      <TokenField />
      {/* Buttons */}
      <div className="flex flex-col w-full gap-4 mt-4">
        <Link to="/dashboard">
          <Button label="Submit" className="block bg-[#06726A] text-white w-full h-[50px] " />
        </Link>
        <Button label="Resend Token" className="text-[#06726A] w-full h-[50px]" />
      </div>
    </AuthLayout>
  );
};

export default TwoFactorAuthenticationScreen;
