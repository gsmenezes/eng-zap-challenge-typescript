import React from "react";
import { BrowserRouter, Router } from "react-router-dom";

import Routes from "./Routes/app.routes";
import History from "./Services/historyService";

import GlobalStyles from "./Styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <Router history={History}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Router>
    </>
  );
};

export default App;
