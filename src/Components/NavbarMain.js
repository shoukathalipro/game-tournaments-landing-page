import React from "react";
import { NavLink } from "react-router-dom";
import MobileNavigation from "./MobileNavigation";
import Styles from "./NavbarMain.module.css";

const NavbarMain = () => {


    const activeNavLink = ( {isActive} ) => {
        // console.log({isActive});

        return{
            backgroundColor : isActive? "#7600FF" : "black"
        }
    }

    const activeCart = ( {isActive} ) => {
        return{
            color : isActive? "#7600FF" : "white"
        }
    }

    return(
        <div className={Styles.NavbarMain}>
            <div><NavLink className={Styles.NavItem_In} to="/home" style={activeNavLink}><span className={Styles.NavItem_Text}>HOME</span></NavLink></div>
            <div><NavLink className={Styles.NavItem_In} to="/community" style={activeNavLink}><span className={Styles.NavItem_Text}>COMMUNITY</span></NavLink></div>
            <div><NavLink className={Styles.NavItem_In} to="/blog" style={activeNavLink}><span className={Styles.NavItem_Text}>BLOG</span></NavLink></div>
            <div><NavLink className={Styles.NavItem_In} to="/contact" style={activeNavLink}><span className={Styles.NavItem_Text}>CONTACT</span></NavLink></div>
            <div><NavLink className={Styles.Cart_Icon} to="/cart" style={activeCart}><i className="fa-solid fa-bag-shopping fa-lg"></i></NavLink></div>
            <div><button className={Styles.Search_Icon}><i className="fa-solid fa-magnifying-glass fa-lg"></i></button></div>
            <MobileNavigation/>
        </div>
    )
}

export default NavbarMain;