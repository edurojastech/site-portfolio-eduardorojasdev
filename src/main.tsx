import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

// O build gera HTML pré-renderizado por rota (scripts/prerender.mjs).
// Quando ele existe, hidratamos em vez de descartar e renderizar de novo.
if (container.hasChildNodes()) {
  hydrateRoot(container, <App />);
} else {
  createRoot(container).render(<App />);
}
