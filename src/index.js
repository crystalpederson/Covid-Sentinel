import React from "react";
import { render } from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./components/App";
import About from "./components/About";
import VaccineMap from "./components/VaccineMap";
import CovidMap from "./components/CovidMap";
import Styles from "./stylesheets/styles.css";

render(
  <BrowserRouter>
    <Routes>
      {/* might look into consolidating these routes so they make more sense */}
      <Route path="/" element={<App />}>
        <Route path="" element={<CovidMap />} />
        <Route path="home" element={<CovidMap />} />
        <Route
          path="country"
          element={<VaccineMap />}
          render={(props) => <VaccineMap {...props} />}
        />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
