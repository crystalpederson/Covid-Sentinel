import React from "react";
import { render } from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";
import VaccineMap from "./components/VaccineMap";
import CovidMap from "./components/CovidMap";
import Dashboard from "./components/Dashboard";
import Styles from "./stylesheets/styles.css";

render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<CovidMap />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="home" element={<CovidMap />} />
          <Route
            path="country"
            element={<VaccineMap />}
            render={(props) => <VaccineMap {...props} />}
          />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
