import React from "react";
import { Switch, Route } from "react-router-dom";

import LayoutPage from "../Components/LayoutPage";
import CardsDetails from "../Components/CardsDetails";
import Home from "../Pages/Home";
import List from "../Pages/List";

const AppRoutes: React.FC = () => {
  return (
    <LayoutPage>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/list:type" exact component={List} />
        <Route path="/details-property:id" exact component={CardsDetails} />
      </Switch>
    </LayoutPage>
  );
};

export default AppRoutes;
