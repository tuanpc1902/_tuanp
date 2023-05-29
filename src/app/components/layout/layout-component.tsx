import { withTranslation } from "react-i18next";
import { LayoutCommponentProps } from "./layout-component.props";
import React from "react";
import HeaderComponent from "./header/header-component";
import BodyComponent from "./body/body-component";

const LayoutCommponent = (props: LayoutCommponentProps) => {
    return(
        <React.Fragment>
            <HeaderComponent/>
            <BodyComponent />
        </React.Fragment>
    )
}

export default withTranslation()(LayoutCommponent);