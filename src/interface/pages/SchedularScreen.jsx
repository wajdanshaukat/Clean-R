import React from "react";
import { FilterAlt } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import BigCalendar from "../components/BigCalendar";

const SchedularScreen = () => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, maxWidth: "1200px", margin: "0 auto" }}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <Typography sx={{ fontWeight: 500, fontSize: { xs: "20px", sm: "24px" } }}>
          Scheduler
        </Typography>
        <div className="flex flex-row gap-2">
          <Button
            sx={{
              width: { xs: "140px", sm: "178px" },
              height: "36px",
              borderRadius: "10px",
              bgcolor: "#A8A8A8",
              color: "white",
              fontSize: { xs: "12px", sm: "14px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <FilterAlt sx={{ width: "16px", height: "14px" }} />
            Filter
          </Button>
          <Button
            sx={{
              width: { xs: "140px", sm: "178px" },
              height: "36px",
              borderRadius: "10px",
              bgcolor: "#A8A8A8",
              color: "white",
              fontSize: { xs: "12px", sm: "14px" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Publish All
          </Button>
        </div>
      </div>
      <Divider sx={{ my: "20px" }} />
      <Box sx={{ height: { xs: "10vh", sm: "80vh" } }}>
        <BigCalendar />
      </Box>
    </Box>
  );
};

export default SchedularScreen;
