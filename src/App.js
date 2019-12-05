import React, { useState } from "react";
import SearchParams from "./SearchParams";
import { Router } from "@reach/router";
import Details from "./Details";
import ThemeContext from "./ThemeContext";
import Navbar from "./Nav";
export default function App() {
  const themeHook = useState("peru");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
       <Navbar />
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
}
