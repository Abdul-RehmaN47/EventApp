import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";
import EventDashboard from "./components/events/EventDashboard";
import EventCardsPage from "./components/Auth/EventsCardPage";
import CrudPage from "./components/common/Crud";// Adjust the path if necessary
import { Provider } from "react-redux";
import store from "./redux/store"; // Adjust the path if necessary

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <EventCardsPage />
      <CrudPage />
      <Footer />
    </Provider>
  );
};

export default App;
