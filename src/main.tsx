import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import AppBar from "./components/AppBar.tsx";
import Footer from "./pages/Footer.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AppBar />
      <App />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
