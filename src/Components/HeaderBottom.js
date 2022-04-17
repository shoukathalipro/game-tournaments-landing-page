import React from "react";
import Styles from "./HeaderBottom.module.css";
import NavbarMain from "./NavbarMain";
import Logo from "../Assets/Logo.png";

const HeaderBottom = () => {
    return(
        <div className={Styles.HeaderBottom}>
            <div className={Styles.HeaderBottom_Left}>
                <div className={Styles.HeaderBottom_Left_In}><img className={Styles.HeaderBottom_Image} src={Logo} alt="Logo"/></div>
            </div>
            <div className={Styles.HeaderBottom_Right}>
                <div>
                    <NavbarMain/>
                </div>
            </div>
        </div>
    )
}

export default HeaderBottom;