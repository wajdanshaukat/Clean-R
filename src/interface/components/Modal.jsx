import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import IndexField from "./IndexField";
import Button from "./Button";
import { Cancel } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";

const ReusableModal = ({ isOpen, onClose, formData }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isTabletScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [name, setName] = React.useState("");
  const [location, setLocation] = React.useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    formData({ name, location });
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isSmallScreen ? "90%" : isTabletScreen ? "70%" : "400px",
    height: isSmallScreen ? "auto" : "397px",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    overflowY: "auto", // Enable scrolling for smaller screens
    maxHeight: "90vh", // Prevent modal from exceeding screen height
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <form onSubmit={submitHandler}>
        <Box sx={style}>
          <Cancel
            sx={{
              float: "inline-end",
              position: "relative",
              top: "-15px",
              left: "15px",
              cursor: "pointer",
            }}
            onClick={onClose}
          />
          <Typography
            id="modal-title"
            variant="h6"
            component="h2"
            sx={{ mb: 2 }}
          >
            Filter Employee
          </Typography>
          <div className="flex flex-col justify-around gap-y-3">
            <IndexField
              sx={
                "w-full h-[50px] text-[14px] text-start ps-4 rounded-[10px] border-[#CECECE] bg-[#F9F9F9]"
              }
              placeholder="Enter employee name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <IndexField
              sx={
                "w-full h-[50px] text-[14px] text-start ps-4 rounded-[10px] border-[#CECECE] bg-[#F9F9F9]"
              }
              placeholder="Current location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <IndexField
              sx={
                "w-full h-[50px] text-[14px] text-start ps-4 rounded-[10px] border-[#CECECE] bg-[#F9F9F9]"
              }
              placeholder="Availability"
              type="text"
            />
            <Button
              label={"Apply Filter"}
              type={"submit"}
              className={"w-[180px] bg-[#06726A] text-white"}
            />
            <Button
              label={"Cancel"}
              className={"text-[#06726A] w-[180px]"}
              onClick={onClose}
            />
          </div>
        </Box>
      </form>
    </Modal>
  );
};

export default ReusableModal;
