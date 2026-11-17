import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Legacy hash links (/#/about) -> clean paths (/about)
if (window.location.hash.startsWith("#/")) {
  window.history.replaceState(null, "", window.location.hash.slice(1));
}

createRoot(document.getElementById("root")!).render(<App />);
