import React from "react";
import { Switch, Route } from "react-router-dom";

import LayoutPage from "../Components/LayoutPage";
import CardsDetails from "../Components/CardsDetails";
import Home from "../Pages/Home";
import Cards from "../Components/Cards";

const AppRoutes: React.FC = () => {
  return (
    <LayoutPage>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cards" exact component={Cards} />
        <Route path="/details" exact component={CardsDetails} />
      </Switch>
    </LayoutPage>
  );
};

export default AppRoutes;
