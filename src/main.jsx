import { StrictMode } from "react";

import { createRoot } from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "./fitness/App";

import Auth from "./fitness/components/Auth";

createRoot(
  document.getElementById("root")
).render(

  <StrictMode>

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Auth />}
        />

        <Route
          path="/home"
          element={<App />}
        />

      </Routes>

    </BrowserRouter>

  </StrictMode>

);