import React from "react";
import { Add, Filter, FilterAlt } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import ReportList from "../components/ReportList";
import { useOutletContext } from "react-router-dom";

const WorkSiteScreen = () => {
  const { querySearch } = useOutletContext();

  const payList = [
    {
      name: "WorkSite Number 1",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 2",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 3",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 4",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 5",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 6",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 7",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 8",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 9",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 10",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 11",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 12",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 13",
      location: "Worksite Location",
    },
    {
      name: "WorkSite Number 14",
      location: "Worksite Location",
    },
  ];
  const filteredData = payList.filter((item, index) =>
    item.name.toLowerCase().includes(querySearch.toLowerCase())
  );
  return (
    <Box sx={{ padding: "20px" }}>
      <Box className="flex md:flex-row flex-col justify-between">
        <Box className="my-auto">
          <Typography sx={{ fontWeight: 500, fontSize: "24px", my: 2 }}>
            My Worksites
          </Typography>
        </Box>
        <Box className="my-auto flex flex-col">
          <Button
            sx={{
              width: "178px",

              height: "36px",
              bgcolor: "#A8A8A8",
              borderRadius: "10px",
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            <Add />
            Add Worksite
          </Button>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />

      {filteredData && querySearch ? (
        filteredData.map((item, index) => {
          return (
            <Grid>
              <ReportList
                key={index}
                name={item.name}
                location={item.location}
              />
            </Grid>
          );
        })
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            {payList.slice(0, 7).map((item, index) => (
              <ReportList
                key={index}
                name={item.name}
                location={item.location}
              />
            ))}
          </Grid>

          <Grid item xs={12} sm={6}>
            {payList.slice(7).map((item, index) => (
              <ReportList
                key={index}
                name={item.name}
                location={item.location}
              />
            ))}
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default WorkSiteScreen;
