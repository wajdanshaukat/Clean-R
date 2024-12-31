import * as React from "react";
import Accordion from "@mui/material/Accordion";
// import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Button from "@mui/material/Button";
import AlignItemsList from "./ListItem";

export default function AccordionUsage({ FirstAccordian, SecondAccordian }) {
  return (
    <div>
      <Accordion
        sx={{
          background: "#DEDEDE",
          borderRadius: "10px",
          width: { lg: "514px", xs: "auto" },
          mb: "10px",
        }}
      >
        <AccordionSummary
          sx={{
            height: "79px",
            borderRadius: "10px",
            fontWeight: "500",
            fontSize: "22px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {FirstAccordian}
        </AccordionSummary>
        <AccordionDetails sx={{ bgcolor: "white" }}>
          <AlignItemsList />
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          background: "#DEDEDE",
          borderRadius: "10px",
          width: { lg: "514px", xs: "auto" },
        }}
      >
        <AccordionSummary
          sx={{
            height: "79px",
            fontWeight: "500",
            fontSize: "22px",
          }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          {SecondAccordian}
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
