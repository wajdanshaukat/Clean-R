import { FilterAlt } from "@mui/icons-material";
import { Box, Button, Divider, Grid, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import BasicCard from "../components/Card";
import ReusableModal from "../components/Modal";
import { useOutletContext } from "react-router-dom";
import Image from "../../assets/image.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";
import Image4 from "../../assets/image4.png";
import Image5 from "../../assets/image5.png";
import Image6 from "../../assets/image6.png";

const PayrollScreen = () => {
  const { querySearch } = useOutletContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [filterCardData, setFilterCardData] = useState([]);
  const [displayEarnings, setDisplayEarnings] = useState(true);
  const [noDataFound, setNoDataFound] = useState(false); // Added state for "No data found"

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  const payList = [
    {
      name: "John Doe",
      location: "Location",
      image: Image,
      hours: "25h",
      pay: "$250",
    },
    {
      name: "Jason",
      location: "Window",
      image: Image5,
      hours: "45h",
      pay: "$450",
    },
    {
      name: "Steve Fox",
      location: "Floor",
      image: Image6,
      hours: "50h",
      pay: "$400",
    },
    {
      name: "Jane Doe",
      location: "Waste",
      image: Image4,
      hours: "50h",
      pay: "$400",
    },
    {
      name: "Samantha",
      location: "Waste",
      image: Image3,
      hours: "10h",
      pay: "$100",
    },
    {
      name: "Jennifer",
      location: "Floor",
      image: Image2,
      hours: "12h",
      pay: "$96",
    },
    {
      name: "John Doe",
      location: "Location",
      image: Image,
      hours: "25h",
      pay: "$250",
    },
    {
      name: "Jason",
      location: "Window",
      image: Image5,
      hours: "45h",
      pay: "$450",
    },
    {
      name: "Steve Fox",
      location: "Floor",
      image: Image6,
      hours: "50h",
      pay: "$400",
    },
    {
      name: "Jane Doe",
      location: "Waste",
      image: Image4,
      hours: "50h",
      pay: "$400",
    },
    {
      name: "Samantha",
      location: "Waste",
      image: Image3,
      hours: "10h",
      pay: "$100",
    },
    {
      name: "Jennifer",
      location: "Floor",
      image: Image2,
      hours: "12h",
      pay: "$96",
    },
  ];

  const filteredData = payList.filter((item) =>
    item.name.toLowerCase().includes(querySearch.toLowerCase())
  );

  const submitHandler = (data) => {
    const applyFilter = payList.filter(
      (item) =>
        item.name.toLowerCase().includes(data.name.toLowerCase()) &&
        item.location.toLowerCase().includes(data.location.toLowerCase())
    );
    setFilterCardData(applyFilter);

    if (applyFilter.length === 0) {
      setNoDataFound(true);
    } else {
      setNoDataFound(false);
    }

    setModalOpen(false);
  };

  const renderCardList = (data) => {
    return (
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid
            key={`${item.name}-${index}`}
            item
            xs={12} // Full-width on extra-small screens
            lg={6} // 2 columns on large screens
            md={6}
            sm={12}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "end",
                marginBottom: "4px",
                paddingRight: "20px",
                gap: "30px",
              }}
            >
              <Typography
                sx={{ fontWeight: 500, fontSize: "11px", color: "#818080" }}
              >
                Hours
              </Typography>
              <Typography
                sx={{ fontWeight: 500, fontSize: "11px", color: "#818080" }}
              >
                Pay
              </Typography>
            </Box>
            <BasicCard
              name={item.name}
              location={item.location}
              image={item.image}
              hours={displayEarnings ? item.hours : ""}
              pay={displayEarnings ? item.pay : ""}
            />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Box sx={{ padding: "20px" }}>
      {/* Header Section */}
      <Box className="flex md:flex-row flex-col justify-between">
        <Box>
          <Typography sx={{ fontWeight: 500, fontSize: "24px", my: 2 }}>
            Payroll hours: 220h
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "14px", color: "#8F8F8C" }}
          >
            18. April 2022.
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              width: "178px",
              height: "36px",
              bgcolor: "#A8A8A8",
              borderRadius: "10px",
              color: "white",
            }}
            onClick={handleOpen}
          >
            <FilterAlt />
            Filter
          </Button>
          <Box className="flex flex-row items-center mt-4">
            <Typography sx={{ fontWeight: 400, fontSize: "14px", mr: 1 }}>
              Display earnings
            </Typography>
            <Switch
              onChange={(e) => setDisplayEarnings(e.target.checked)}
              checked={displayEarnings}
              color="success"
            />
          </Box>
        </Box>
      </Box>
      <Divider sx={{ my: 2 }} />

      {/* Content Section */}
      {querySearch &&
      filteredData.length === 0 &&
      filterCardData.length === 0 ? (
        <Typography sx={{ color: "red", textAlign: "center", mt: 4 }}>
          No matching results found.
        </Typography>
      ) : noDataFound ? ( // Conditionally render "No results found"
        <Typography sx={{ color: "red", textAlign: "center", mt: 4 }}>
          No data found with applied filter.
        </Typography>
      ) : filterCardData.length > 0 ? (
        renderCardList(filterCardData)
      ) : (
        filteredData.length > 0 && renderCardList(filteredData)
      )}
      {/* Modal */}
      <ReusableModal
        formData={submitHandler}
        isOpen={modalOpen}
        onClose={handleClose}
      />
    </Box>
  );
};

export default PayrollScreen;
