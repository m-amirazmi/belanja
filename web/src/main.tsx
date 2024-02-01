import { ChakraBaseProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "utils/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <RouterProvider router={router} />
    </ChakraBaseProvider>
  </React.StrictMode>
);
