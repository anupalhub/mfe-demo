import React from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter } from "react-router-dom";

import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const genClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={genClassName}>
        <Header />
        <MarketingApp />
      </StylesProvider>
    </BrowserRouter>
  );
};
