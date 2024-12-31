import React from "react";
import { Box } from "@mui/material";
import CustomTabs from "../components/Tabs";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";
import SignInComponent from "../components/SignInComponent";
import { Link } from "react-router-dom";
import SignUpComponent from "../components/SignUpComponent";

const SignInScreen = () => {
  const tabs = [
    { label: "Sign In", content: <SignInComponent /> },
    { label: "Sign Up", content: <SignUpComponent /> },
  ];

  return (
    <AuthLayout title="Welcome back" description="Login to your account">
      <Box
        sx={{
          width: { xs: "100%", sm: "352px" },
          height: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: {sm: "0" },
        }}
      >
        <CustomTabs tabs={tabs} />

        <Link to={"/twofactorauthentication"}>
          <Button className="bg-[#06726A] text-white w-full h-[50px] rounded-[10px]" label="Login" />
        </Link>
      </Box>
    </AuthLayout>
  );
};

export default SignInScreen;
