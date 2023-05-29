import React from "react";
import {UserInfoProps} from "./user-info.props";
import {withTranslation} from "react-i18next";

const UserInfoComponent = (props: UserInfoProps) => {
  return(
      <div id={`user-info`}>
        <div className={`row `}>
            <div className={`avatar`}>
                <a href="#">
                    <img src="/assets/images/user.png" alt="" />
                </a>
            </div>
        </div>
          <div className={`row `}>
              <div className={`name`}>
                  <label htmlFor="name">Ho ten:
                  </label>
                  <span id="name">Pham Cong Tuan</span>
              </div>
          </div>
          <div className={`row `}>
              <div className={`phone`}>
                  <label htmlFor="phone">So dien thoai:
                  </label>
                  <span id="phone">0394.008.704</span>
              </div>
          </div>
          <div className={`row `}>
              <div className={`address`}>
                  <label htmlFor="address">Dia chi:
                  </label>
                  <span id="address">266/11 Hoang Van Thu</span>
              </div>
          </div>
      </div>
  )
}

export default withTranslation()(UserInfoComponent);