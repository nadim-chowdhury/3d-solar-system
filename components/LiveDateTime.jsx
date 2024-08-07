"use client";

import React, { useState, useEffect } from "react";

const LiveDateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString(); // Customize the format as needed
  };

  const formatTime = (time) => {
    return time.toLocaleTimeString(); // Customize the format as needed
  };

  return (
    <div className="live-date-time">
      <div className="date text-slate-300">{formatDate(dateTime)}</div>
      {/* <div className="time">{formatTime(dateTime)}</div> */}
    </div>
  );
};

export default LiveDateTime;
