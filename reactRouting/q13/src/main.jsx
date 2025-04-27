import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FirebaseProvider } from "./context/FirebaseContext.jsx";
import { MovieProvider } from "./context/MovieContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
   
    <FirebaseProvider>
      <MovieProvider>
     
        <App />
      </MovieProvider>
    </FirebaseProvider>
   
  </StrictMode>
);
