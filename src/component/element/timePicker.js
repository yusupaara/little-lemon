import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import dayjs from "dayjs";

function TimePick() {
  const nineAM = dayjs().set('hour', 9).startOf('hour');
  const ninePM = dayjs().set('hour', 21).startOf('hour');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopTimePicker label="Pick Time" sx={{ width: 450}} minTime={nineAM} maxTime={ninePM} />
    </LocalizationProvider>
  );
}

export default TimePick;
