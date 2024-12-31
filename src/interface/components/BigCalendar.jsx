import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "../components/css/calendarStyles.css";

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    title: "Worksite 1",
    start: new Date(2024, 11, 22, 0, 0),
    end: new Date(2024, 11, 22, 6, 0),
    color: "#ffe082",
  },
  {
    title: "Worksite 2",
    start: new Date(2024, 11, 22, 4, 0),
    end: new Date(2024, 11, 22, 8, 0),
    color: "#ff7043",
  },
  {
    title: "Worksite 3",
    start: new Date(2024, 11, 22, 9, 0),
    end: new Date(2024, 11, 22, 12, 0),
    color: "#64b5f6",
  },
  {
    title: "Worksite 4",
    start: new Date(2024, 11, 24, 0, 0),
    end: new Date(2024, 11, 24, 6, 0),
    color: "#ffe082",
  },
  {
    title: "Worksite 5",
    start: new Date(2024, 11, 24, 4, 0),
    end: new Date(2024, 11, 24, 8, 0),
    color: "#ff7043",
  },
  {
    title: "Worksite 6",
    start: new Date(2024, 11, 24, 9, 0),
    end: new Date(2024, 11, 24, 12, 0),
    color: "#64b5f6",
  },
  {
    title: "Worksite 7",
    start: new Date(2024, 11, 26, 1, 0),
    end: new Date(2024, 11, 26, 7, 0),
    color: "#E0EE8A",
  },
  {
    title: "Worksite 8",
    start: new Date(2024, 11, 26, 9, 0),
    end: new Date(2024, 11, 26, 12, 0),
    color: "#64b5f6",
  },
];

const eventStyleGetter = (event) => {
  const style = {
    backgroundColor: event.color,
    borderRadius: "5px",
    opacity: 0.8,
    color: "black",
    border: "0",
    display: "block",
    padding: "5px",
  };
  return { style };
};

const CustomToolbar = (toolbar) => (
  <div className="rbc-toolbar">
    <span className="rbc-btn-group">
      <button onClick={() => toolbar.onNavigate("PREV")}>Prev</button>
      <button onClick={() => toolbar.onNavigate("NEXT")}>Next</button>
    </span>
    <span className="rbc-toolbar-label">{toolbar.label}</span>
    <span className="rbc-btn-group">
      <button onClick={() => toolbar.onView("month")}>Month</button>
      <button onClick={() => toolbar.onView("week")}>Week</button>
      <button onClick={() => toolbar.onView("day")}>Day</button>
    </span>
  </div>
);

const BigCalendar = () => (
  <div style={{ height: "75vh", padding: "10px"}}>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: "600px", mixWidth: "100%" }}
      eventPropGetter={eventStyleGetter}
      components={{
        toolbar: CustomToolbar,
      }}
    />
  </div>
);

export default BigCalendar;
