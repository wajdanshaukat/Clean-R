import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

const BasicCard = ({ name, location, image, hours, pay }) => {
  return (
    <Card
      sx={{
        margin: "10px 0",
        height: "79px",
        borderRadius: "10px",
        background: "#F9F9F9",
        display: "flex",
        alignItems: "center",
      }}
    >
      <CardContent
        sx={{
          padding: "20px 16px",
          width: "100%",
        }}
      >
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                variant="square"
                src={
                  typeof image === "string"
                    ? image
                    : "/path-to-default-image.jpg"
                }
                sx={{ width: 45, height: 45, borderRadius: "5px" }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  component="span"
                  sx={{
                    fontSize: { lg: "14px", sm: "12px", xs: "11px" },
                    fontWeight: 500,
                  }}
                >
                  {name}
                </Typography>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: { lg: "12px", sm: "10px", xs: "9px" },
                      color: "gray",
                    }}
                  >
                    {location}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      display: "block",
                      fontSize: { lg: "10px", sm: "8px", xs: "8px" },
                      color: "#202020",
                      fontWeight: "400",
                    }}
                  >
                    Hourly Rate: $20/hr
                  </Typography>
                </React.Fragment>
              }
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "20px",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: { lg: "16px", sm: "14px", xs: "12px" },
                }}
              >
                {hours}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontWeight: 400,
                  fontSize: { lg: "16px", sm: "14px", xs: "12px" },
                }}
              >
                {pay}
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#A8A8A8",
                fontSize: { lg: "12px", sm: "10px", xs: "9px" },
                fontWeight: "500",
                marginLeft: "15px",
              }}
            >
              View Details
            </Typography>
          </Box>
        </ListItem>
      </CardContent>
    </Card>
  );
};

export default BasicCard;
