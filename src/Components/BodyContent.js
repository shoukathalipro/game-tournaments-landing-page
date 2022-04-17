import React from "react";
import Character1 from "../Assets2/characters.png";
import Logo1 from "../Assets2/ValorantLogo.png";
import Styles from "./BodyContent.module.css";

const BodyContent = () => {
    

    return(
        <div className={Styles.MainBody}>
            <div className={Styles.MainBody_Left}>
                <div><img className={Styles.MainBody_Logo} src={Logo1} alt="Logo1"/></div>
                <div className={Styles.MainBody_Titles}>
                    <h1 className={Styles.MainBody_Title1}>Kill For</h1>
                    <h1 className={Styles.MainBody_Title2}>Cash</h1>
                </div>
                <div className={Styles.MainBody_Content_Box}>
                    <p className={Styles.MainBody_Content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Erat imperdiet sed euismod nisi porta lorem mollis aliquam.</p>
                </div>
                <div className={Styles.MainBody_Btn_Container}>
                    <button className={Styles.MainBody_Btn}><span className={Styles.MainBody_Btn_In}>REGISTER NOW</span></button>
                    <div className={Styles.MainBody_EmptyDiv}></div>
                </div>
            </div>
            <div className={Styles.MainBody_Right}><img className={Styles.MainBody_Image} src={Character1} alt="Character1" /></div>
        </div>
    )
}

export default BodyContent;