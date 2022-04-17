import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import Styles from "./Header.module.css";

const Header = () => {
    return(
        <div className={Styles.Header}>
            <HeaderTop/>
            <HeaderBottom/>
        </div>
    )
}

export default Header;