import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";
import BackgroundColorWrapper from "./components/BackgroundColorWrapper/BackgroundColorWrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));

export default function App()
{
  let sensorData = [];
  let temperature = [];
  let mq3 = []
  let soilmoisture = [];
  let rain = [];

  setTimeout(async () => {
      try {
        const response = await axios.get("https://technothunder-unplugged1-0-hardwarehack.onrender.com/api/ideal-crop");
      
        console.log("Response: " + JSON.stringify(response.data));
        if(response.status === 200)
        {
            sensorData = response.data;   //set the 'user' global state
            console.log(sensorData);
            toast.success("Past 12 records retrieved!");
            sensorData.map((object) => temperature.push(object.Temperature));
            sensorData.map((object) => mq3.push(object.GasData));
            sensorData.map((object) => soilmoisture.push(object.SoilMoisture));
            sensorData.map((object) => rain.push(object.Rain));
        }
      } catch (error) {
          const errorMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
          console.error(errorMessage);
          toast.error(errorMessage);
      }
  }, 10000);

  return(
      <ThemeContextWrapper>
      <BackgroundColorWrapper>
        <BrowserRouter>
          <Routes>
            <Route path="/admin/*" element={<AdminLayout />} />
            <Route
              path="*"
              element={<Navigate to="/admin/dashboard" replace />}
            />
          </Routes>
        </BrowserRouter>
      </BackgroundColorWrapper>
    </ThemeContextWrapper>
  );
}

root.render(
  <App />
);
