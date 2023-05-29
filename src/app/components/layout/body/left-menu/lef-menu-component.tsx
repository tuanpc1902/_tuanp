import React from "react";
import {LefMenuComponentProps} from "./lef-menu-component.props";
import {withTranslation} from "react-i18next";

const LefMenuComponent = (props: LefMenuComponentProps) => {
    const {t} = props;

    return(
        <>
            <div className="left__menu">

            </div>
        </>
    )
}

export default withTranslation()(LefMenuComponent)