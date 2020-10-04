import React from "react";

import LayoutPage from "./Components/LayoutPage";
import Home from "./Pages/Home";

import GlobalStyles from "./Styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <LayoutPage>
      <Home />
      </LayoutPage>
    </>
  );
};

export default App;
