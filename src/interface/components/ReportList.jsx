import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const ReportList = ({ name, location }) => {
  return (
    <div>
      <ListItem
        disablePadding
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ListItemText
            primary={name}
            secondary={
              <Typography
                sx={{
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                {location}
              </Typography>
            }
            sx={{
              marginLeft: "8px",
              "& .MuiTypography-body1": {
                fontSize: "14px",
                fontWeight: 500,
              },
            }}
          />
        </Box>

        {/* Right Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end", // Align text to the right
          }}
        >
          <Typography
            sx={{
              color: "#A8A8A8",
              fontSize: "12px",
              fontWeight: 500,
            }}
          >
            View Details
          </Typography>
        </Box>
      </ListItem>
      <Divider sx={{ mt: 1.5 }} />
    </div>
  );
};

export default ReportList;
