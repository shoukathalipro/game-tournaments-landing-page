import React from "react";
import Styles from "./HeaderTop.module.css";

const HeaderTop = () => {
    return(
        <div className={Styles.HeaderTop}>
            <div className={Styles.HeaderTop_Left}>
                <div className={Styles.HeaderTop_Left_Text}>NEXT TOURNAMENT BEGINS IN</div>
                <div className={Styles.HeaderTop_45}>45 Days</div>
            </div>
            <div className={Styles.HeaderTop_Right}>
                <div className={Styles.HeaderTop_Right_Text}>FOLLOW US ON</div>
                <div className={Styles.HeaderTop_Slash}></div>
                <div><i className="fa-brands fa-facebook-square fa-lg"></i></div>
                <div><i className="fa-brands fa-instagram fa-lg"></i></div>
                <div><i className="fa-brands fa-twitter fa-lg"></i></div>
                <div><i className="fa-brands fa-discord fa-lg"></i></div>
            </div>
        </div>
    )
}

export default HeaderTop;