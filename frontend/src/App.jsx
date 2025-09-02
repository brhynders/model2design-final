import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import Pocketbase from "pocketbase";

export const pb = new Pocketbase("http://127.0.0.1:8090");

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={HomePage} />
    </Routes>
  </BrowserRouter>
);

const theme = createTheme({});

export const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <Router />
          <Notifications />
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
};
