import React from "react";
import {ContainerComponentProps} from "./container-component.props";

const ContainerComponent = (props: ContainerComponentProps) => {
  return(
      <main id="main-content">
          {props.children}
      </main>
  )
}

export default (ContainerComponent);