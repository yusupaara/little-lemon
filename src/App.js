import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useRoutes } from "react-router-dom";
import Navbar from "./component/navbar";
import Hero from "./component/hero";
import Feature from "./component/features";
import Example from "./component/example";
import MyComponent from "./component/dialog";
import ReservationPopup from "./component/reservationPopup";
import DatePick from "./component/element/datePicker";
import TimePick from "./component/element/timePicker";
import ListPick from "./component/element/listPicker";
import BookingForm from "./component/testing/BookingForm";
import BookingPage from "./component/testing/BookingPage";
import Registration from "./component/regist";
import Layout from "./component/layout/layout";
import Home from "./component/layout/home";
import Maintenance from "./component/maintenance";


function App() {

  const EmptyPage = () => useRoutes([
    { path:"/about", element: <Maintenance /> },
    { path:"/menu", element: <Maintenance /> },
    { path:"/order", element: <Maintenance /> },
  ])

  return (
    <>
    <Router>
      <Layout>
        <Routes>
          {/* <Route exact path="/" element={<Navigate to="/home" replace />} /> */}
          <Route exact path="/" element={<Home />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
        <EmptyPage />
      </Layout>
    </Router>
    </>
      // <Navbar />
      // <ReservationPopup />
      // <Feature />
      // <Registration />
      // {/* <Hero /> */}
      // {/* <DatePick />
      // <TimePick />
      // <ListPick /> */}
      // {/* <Example /> */}
      // {/* <SeparateButton /> */}
      // {/* <MyComponent /> */}
      // {/* <BookingPage /> */}
  );
}

export default App;
