import React from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import IndexField from "../components/IndexField";
import Button from "../components/Button";
import AuthLayout from "../components/AuthLayout";
import { Link, useNavigate } from "react-router-dom";

const SignUpScreen = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout
      title="How do you refer to your employees?"
      description="Employees will see this term"
      className="h-auto w-full max-w-[352px] px-4 sm:px-4 gap-y-4"
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "340px" },
          height: "auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: { xs: "16px", sm: "0" },
        }}
      >
        <IndexField
          sx="w-full h-[50px] rounded-[10px] border-[#CECECE] bg-[#F7F7F7] placeholder-[#818080] text-[14px] font-[400] ps-5 focus:outline-none"
          placeholder="e.g., Cleaners, Janitors, Crew, Team..."
          label="What do you call your employees?"
        />

        <Box display="flex" flexDirection="row" alignItems="center">
          <Checkbox />
          <Typography sx={{ fontSize: "12px", textAlign: "left" }}>
            I agree to the{" "}
            <span className="font-[500] text-[#06726A]">
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span className="font-[500] text-[#06726A]">Privacy Policy</span>.
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" gap="10px">
          <Link to="/twofactorauthentication">
            <Button className="bg-[#06726A] text-white w-full" label="Sign Up" />
          </Link>
          <Button
            className="text-[#06726A] w-full"
            label="Back"
            onClick={() => navigate("/signin")}
          />
        </Box>
      </Box>
    </AuthLayout>
  );
};

export default SignUpScreen;
