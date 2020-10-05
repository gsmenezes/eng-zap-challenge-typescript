import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LayoutPage from "./Components/LayoutPage";
import Home from "./Pages/Home";

import GlobalStyles from "./Styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <LayoutPage>
          <Route path="/" exact component={Home} />
        </LayoutPage>
      </BrowserRouter>
    </>
  );
};

export default App;
