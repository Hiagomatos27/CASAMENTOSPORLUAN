import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";

import "./styles.css";

const queryClient = new QueryClient();
const router = getRouter();

// Provide queryClient to router context
declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} context={{ queryClient }} />
  </StrictMode>
);
