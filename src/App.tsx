import React from "react";

import LayoutPage from "./Components/LayoutPage";

import GlobalStyles from "./Styles/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <LayoutPage>
        <h1> Teste Grupo Zap</h1>
      </LayoutPage>
    </>
  );
};

export default App;
