import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BoxProvider } from "./contexts/BoxContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false /* Don't refetch on page changes */,
      refetchOnWindowFocus: false /* Don't refetch on tab changes */,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <BoxProvider>
        <App />
      </BoxProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
