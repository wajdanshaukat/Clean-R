import React from "react";
import {
  InputBase,
  Button,
  Stack,
  Typography,
  InputAdornment,
  Avatar,
  Box,
} from "@mui/material";
import { KeyboardBackspace, Menu, SearchRounded } from "@mui/icons-material";
import ProfilePic from "../../assets/profilepic.png";
import Notification from "../../assets/notification.png";
import { Link } from "react-router-dom";

const Navbar = ({ onClick, close, value, onChange }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        width: "100%",
        padding: "10px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Search Bar */}
      <Stack direction="row" alignItems="center" sx={{ gap: "10px" }}>
        <Button onClick={close}>
          <KeyboardBackspace />
        </Button>
        <InputBase
          placeholder="Search"
          value={value}
          onChange={onChange}
          sx={{
            display: { lg: "flex", xs: "none" },
            width: "340px",
            height: "45px",
            textAlign: "start",
            border: "1px solid #CECECE",
            borderRadius: "10px",
            backgroundColor: "#F7F7F7",
          }}
          endAdornment={
            <InputAdornment position="end">
              <Button
                sx={{
                  minWidth: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  pt: "7px",
                }}
              >
                <SearchRounded sx={{ color: "#818080" }} />
              </Button>
            </InputAdornment>
          }
        />
      </Stack>

      {/* User Profile or Navigation */}
      <Stack direction="row" spacing={2} alignItems="center">
        <Button variant="text" sx={{ color: "#333", textTransform: "none" }}>
          <img
            src={Notification}
            className="w-[24px] h-[30px]"
            alt=""
            style={{ borderRadius: "5px" }}
          />
        </Button>
        <Avatar
          variant="square"
          component={Link}
          to={"/dashboard/profile"}
          src={ProfilePic}
          sx={{ width: "40px", height: "40px", borderRadius: "10px" }}
        />
        <Box sx={{ marginLeft: "10px" }}>
          <Typography
            component={Link}
            to={"/dashboard/profile"}
            sx={{
              fontWeight: "500",
              fontSize: "16px",
              color: "#202020",
              textDecoration: "none",
            }}
          >
            John Doe
          </Typography>
        </Box>
        <Button variant="text" onClick={onClick}>
          <Menu sx={{ color: "#727272", width: "24px" }} />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;