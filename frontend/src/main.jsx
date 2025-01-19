import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { WatchListProvider } from "./Components/WatchListContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WatchListProvider>
      <App />
    </WatchListProvider>
  </StrictMode>
);
