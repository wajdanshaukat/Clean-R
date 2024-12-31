import React from "react";
import { CalendarMonthRounded } from "@mui/icons-material";
import { Box, Divider, Grid, Typography } from "@mui/material";
import Button from "../components/Button";
import AccordionUsage from "../components/Accordian";
import CalendarIcon from "../../assets/calendar.png";

const HomeScreen = () => {
  const cardStyles = {
    width: "100%",
    maxWidth: "501px",
    height: "205px",
    borderRadius: "10px",
    background: "#DEDEDE",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    p: 2,
  };

  const headingStyles = {
    fontWeight: 500,
    fontSize: "22px",
    color: "#202020",
  };

  const subTextStyles = {
    fontWeight: 500,
    fontSize: "14px",
    color: "#818080",
  };

  return (
    <Box>
      <Typography sx={{ fontWeight: 500, fontSize: "24px", my: 4 }}>
        My Dashboard
      </Typography>
      <Divider />
      <Grid container spacing={3} sx={{ mt: 2 }} direction={{ xs: "column", lg: "row" }}>
        <Grid item xs={12} lg={6}>
          <Box sx={cardStyles}>
            <Box display="flex" alignItems="center" gap={2}>
              <img
                src={CalendarIcon}
                className="-translate-y-5"
                alt="calendar"
              />
              <Box>
                <Typography sx={headingStyles}>Upcoming Shift</Typography>

                <Typography sx={{ ...headingStyles, fontSize: 14 }}>
                  Worksite number 1
                </Typography>
                <Typography sx={subTextStyles}>Location</Typography>
              </Box>
            </Box>
            <Button
              label="Clock in"
              className="text-[16px] h-[42px] font-[500] text-[white] bg-[#06726A] w-full"
            />
          </Box>
        </Grid>

        <Grid item xs={12} lg={6}>
          <AccordionUsage
            FirstAccordian="Active employees"
            SecondAccordian="Pay period to date: 23h"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeScreen;
