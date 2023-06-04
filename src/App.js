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


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Hero /> */}
      <ReservationPopup />
      {/* <DatePick />
      <TimePick />
      <ListPick /> */}
      {/* <Example /> */}
      <Feature />
      {/* <SeparateButton /> */}
      {/* <MyComponent /> */}
    </div>
  );
}

export default App;
