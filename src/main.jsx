import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./routes/Root.jsx";
import ErrorPage from "./ErrorPage.jsx";
import About from "./routes/About.jsx";
import Capture from "./routes/Capture.jsx";
import Challenges from "./routes/Challenges.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Capture />} />
          <Route path="about" element={<About />} />
          <Route path="challenges" element={<Challenges />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
