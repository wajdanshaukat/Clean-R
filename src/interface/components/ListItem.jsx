import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Image from "../../assets/image.png";


export default function AlignItemsList() {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        maxHeight: 300, // Set the height of the list
        overflowY: "auto", // Enable vertical scrolling
        "&::-webkit-scrollbar": {
          width: "8px", // Width of the scrollbar
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#DEDEDE", // Scrollbar thumb color
          borderRadius: "4px", // Rounded corners for the thumb
        },
        "&::-webkit-scrollbar-thumb:hover": {
          backgroundColor: "#555", // Thumb color on hover
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#f1f1f1", // Scrollbar track color
        },
      }}
    >
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            variant="square"
            src={Image}
            sx={{
              borderRadius: "10px",
            }}
          />
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              />
              {" Worksite 1"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            variant="square"
            src={Image}
            sx={{
              borderRadius: "10px",
            }}
          />
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              />
              {" Worksite 1"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            variant="square"
            src={Image}
            sx={{
              borderRadius: "10px",
            }}
          />
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              />
              {" Worksite 1"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            variant="square"
            src={Image}
            sx={{
              borderRadius: "10px",
            }}
          />
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                sx={{ color: "text.primary", display: "inline" }}
              />
              {" Worksite 1"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
