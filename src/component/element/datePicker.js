import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function DatePick() {
  const tomorrow = dayjs().add(1, 'day');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Pick Date"
        sx={{ width: 300}}
        disablePast="true"
        minDate={tomorrow}
      />
    </LocalizationProvider>
  );
}

export default DatePick;
