import React from "react";
import {BodyComponentProps} from "./body-component.props";
import {withTranslation} from "react-i18next";
import Routers from "../../../router/router";
import LefMenuComponent from "./left-menu/lef-menu-component";
import {BrowserRouter} from "react-router-dom";

const BodyComponent = (props: BodyComponentProps) => {
  return(
      <div id="body">
        <LefMenuComponent/>
        <Routers />
      </div>
  )
}

export default withTranslation()(BodyComponent);