import React from "react";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Feature from "./component/features";
import Example from "./component/example";
import MyComponent from "./component/dialog";
import SeparateButton from "./component/separateButton";
import ReservationPopup from "./component/reservationPopup";
import DatePick from "./component/element/datePicker";
import TimePick from "./component/element/timePicker";
import ListPick from "./component/element/listPicker";
import BookingForm from "./component/testing/BookingForm";
import BookingPage from "./component/testing/BookingPage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <ReservationPopup />
      <Feature />
      {/* <Hero /> */}
      {/* <DatePick />
      <TimePick />
      <ListPick /> */}
      {/* <Example /> */}
      {/* <SeparateButton /> */}
      {/* <MyComponent /> */}
      {/* <BookingPage /> */}
    </div>
  );
}

export default App;
