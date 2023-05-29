import React, {useRef} from "react";
import {HeaderComponentProps} from "./header-component.props";
import {withTranslation} from "react-i18next";
import "./skin/common-header-component.css";
const HeaderComponent = (props: HeaderComponentProps) => {

    const LeftHeader = () => {
        return (
            <div className="header__left-header">
                <div className="header__left-header-logo">
                    <a href="#">
                    </a>
                </div>
            </div>
        )
    };

    const RightHeader = () => {

        const onChangeTheme = () => {
            // document.body?.classList.toggle("dark");
        }

        return (
            <div className="header__right-header">
                <div className="header__right-header--language">
                    <input type="checkbox" className="toggle" id="toggle" onChange={onChangeTheme} />
                        <label htmlFor="toggle" id="toggle-theme" className="toggle-theme">
                            <span className="ball"></span>
                        </label>
                </div>

                <div className="header__right-header-user-avatar">
                    <a href="#">
                    </a>
                </div>
            </div>
        )
    }

    return(
        <header className="header">
            <LeftHeader/>
            <RightHeader/>
        </header>
    )
}

export default withTranslation()(HeaderComponent);