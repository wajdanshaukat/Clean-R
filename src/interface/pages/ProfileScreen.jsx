import React from "react";
import { Avatar, Box, Divider, Typography, Button } from "@mui/material";
import { Chat, Edit, Delete } from "@mui/icons-material"; // Material Icons
import Image from "../../assets/image.png";

const ProfileScreen = () => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 500, fontSize: "24px", my: 4 }}>
        View Employee
      </Typography>

      <Divider />
      <Box sx={{ my: "30px", display: "flex", gap: "20px" }}>
        <Avatar
          sx={{ width: "102px", height: "102px", borderRadius: "10px" }}
          src={Image}
        />
        <div className="my-auto">
          <Typography
            sx={{ fontWeight: "500", fontSize: "22px", color: "#202020" }}
          >
            John Doe
          </Typography>
          <Typography sx={{ fontSize: "14px", fontWeight: "400" }}>
            <span className="font-[400] text-[12px] text-[#818080]">
              Position:
            </span>{" "}
            Cleaner
          </Typography>
        </div>
      </Box>
      <div className="flex flex-col gap-y-10">
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Date of birth:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            6/16/1985
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Email Address:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            johndoe@gmail.com
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Phone Number:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            +1122334455
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Address:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            Street number 1. New York
          </Typography>
        </div>
        <div>
          <Typography
            sx={{ fontWeight: "400", fontSize: "12px", color: "#818080" }}
          >
            Hourly Rate:
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "#202020" }}
          >
            $10/hr
          </Typography>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          flexDirection:{sm:'row',xs:'column'},
          justifyContent: "space-between",
          marginTop: "30px",
          gap: "10px",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<Chat />} 
          sx={{
            color: "#06726A",
            borderColor: "#06726A",
            flex: 1,
            fontSize: "10px",
            padding: "6px 8px",
          }}
        >
          Message
        </Button>
        <Button
          variant="outlined"
          startIcon={<Edit />}
          sx={{
            color: "#06726A",
            borderColor: "#06726A",
            flex: 1,
            fontSize: "10px",
            padding: "6px 8px",
          }}
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          startIcon={<Delete />} 
          sx={{
            color: "#06726A",
            borderColor: "#06726A",
            flex: 1,
            fontSize: "10px",
            padding: "6px 8px",
          }}
        >
          Delete Employee
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileScreen;
