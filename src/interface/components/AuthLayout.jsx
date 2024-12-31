import React from "react";
import { Typography } from "@mui/material";
import CleanLogo from "../../assets/clean.png";
import "./css/components.css";
const AuthLayout = ({ children, title, description, className }) => {
  return (
    <div className="flex flex-row">
      <div className="wrapper">
        {/* Left Side Section */}
        <div
          className="lg:flex flex-col gap-y-10 ps-10 hidden"
          style={{ position: "absolute", top: "100px" }}
        >
          <img
            src={CleanLogo}
            className="w-[106px] h-[22px]"
            alt="Clean Logo"
          />
          <div className="lg:w-[574px] xl:w-[673px] h-[110px]">
            <Typography
              sx={{
                fontSize: "44px",
                fontWeight: "700",
                lineHeight: "55px",
                letterSpacing: "0.02em",
                textAlign: "left",
                color: "#FFFFFF",
              }}
            >
              Superior scheduling system for cleaning companies.
            </Typography>
          </div>
        </div>

        {/* Right Side Section */}
        <div className="lg:w-[480px] flex flex-col ms-auto bg-white w-[768px] h-[900px] items-center justify-center  z-10 rounded-l-xl gap-y-10">
          <div
            className={`  flex flex-col justify-evenly items-center   ${className}`}
          >
            <div>
              {title && (
                <Typography
                  sx={{
                    fontSize: "36px",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {title}
                </Typography>
              )}
              {description && (
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letterSpacing: "0.02em",
                    textAlign: "center",
                    color: "#8B8B8B",
                    mt: "20px",
                  }}
                >
                  {description}
                </Typography>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
