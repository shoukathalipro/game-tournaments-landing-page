import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Styles from './MobileNavigation.module.css';


const MobileNavigation = () => {
    const [showMenu, setShowMenu] = useState(false);

    const activeNavLink = ( {isActive} ) => {
        // console.log({isActive});

        return{
            backgroundColor : isActive? "#7600FF" : "white",
            color : isActive? "white" : "black"
        }
    }

    const handleClick = () => {
        setShowMenu(!showMenu);
    }

    let menu;

    if (showMenu) {
        menu =  <div className={Styles.main_Mobile_Bottom}>
                    <div className={Styles.main_Mobile_Bottom_In}>
                        <div>
                            <NavLink to='/home' className={Styles.main_Header_Items} style={activeNavLink}>Home</NavLink>
                        </div>
                        <div>
                            <NavLink to='/community' className={Styles.main_Header_Items} style={activeNavLink}>Community</NavLink>
                        </div>
                        <div>
                            <NavLink to='/blog' className={Styles.main_Header_Items} style={activeNavLink}>Blog</NavLink>
                        </div>
                        <div>
                            <NavLink to='/contact' className={Styles.main_Header_Items} style={activeNavLink}>Contact</NavLink>
                        </div>
                        <div>
                            <NavLink to='/cart' className={Styles.main_Header_Items} style={activeNavLink}>Cart</NavLink>
                        </div>
                    </div>
                </div>
    }


    return(
        <nav>
            <i className={`fas fa-bars fa-2x ${Styles.mobile_Menu}`} onClick={handleClick}></i>
            <div>
                {menu}
            </div>
        </nav>
    )
}

export default MobileNavigation;