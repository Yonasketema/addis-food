import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";
import GlobalStyles from "./styles/GlobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

    <Toaster
      position="top-right"
      gutter={12}
      containerStyle={{ margin: "7px" }}
      toastOptions={{
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
        style: {
          fontSize: "12px",
          maxWidth: "500px",
          padding: "16px 24px",
          backgroundColor: "var(--color-grey-0)",
          color: "var(--color-grey-700)",
        },
      }}
    />
  </React.StrictMode>
);
