import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import Tabs from "./Tabs";
import NavBar from "./NavBar";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <NavBar />
      <Tabs />
    </React.Fragment>
  );
}

export default App;
