import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { SaasProvider } from "@saas-ui/react";
import { theme } from "./theme/theme.js";
import { RouterProvider } from "react-router-dom";
import router from "./router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SaasProvider theme={theme}>
      <RouterProvider router={router} />
    </SaasProvider>
  </React.StrictMode>
);
