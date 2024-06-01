// App.js
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Routes/AllRoutes";
import { ThemeProvider } from "./Components/ThemeContext/ThemeContext";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AllRoutes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
