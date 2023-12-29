import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Registration from "./component/regist";
import Layout from "./component/layout/layout";
import Home from "./component/layout/home";
import Maintenance from "./component/elements/maintenance";
import { selectIsLoggedIn, autologin } from "./component/redux/auth";


function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const fetchUser = () => {
    if (localStorage.getItem("user-little-lemon")) {
      dispatch(autologin(JSON.parse(localStorage.getItem("user-little-lemon"))));
    }
  }

  useEffect(() => {
    fetchUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={ isLoggedIn? <Maintenance /> : <Registration /> } />
          <Route path="/*" element={<Maintenance />} />
        </Routes>
      </Layout>
    </Router>
    </>
  );
}

export default App;
