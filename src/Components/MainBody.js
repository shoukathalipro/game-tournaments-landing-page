import React, { useState } from "react";
import Character1 from "../Assets/Character1.png";
import Styles from "./MainBody.module.css";

const MainBody = () => {
    const [readMoreBtn, setReadMoreBtn] = useState(false);
    const [btn_Text, setBtn_Text] = useState("READ MORE");

    const handleClick = () => {
        if (!readMoreBtn) {
            setReadMoreBtn(!readMoreBtn);
            setBtn_Text("READ LESS")
        } else {
            setReadMoreBtn(!readMoreBtn);
            setBtn_Text("READ MORE")
        }
    }

    

    return(
        <div className={Styles.MainBody}>
            <div className={Styles.MainBody_Left}>
                <div className={Styles.MainBody_Titles}>
                    <h1 className={Styles.MainBody_Title1}>GameStation</h1>
                    <h1 className={Styles.MainBody_Title2}>Tournaments</h1>
                </div>
                <div className={Styles.MainBody_Content_Box}>
                    <p className={Styles.MainBody_Content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Erat imperdiet sed euismod nisi porta lorem mollis aliquam.</p>
                     {
                         readMoreBtn?
                         <p className={Styles.MainBody_Content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          Erat imperdiet sed euismod nisi porta lorem mollis aliquam.</p>
                          :
                          null
                     }
                </div>
                <div className={Styles.MainBody_Btn_Container}>
                    <button className={Styles.MainBody_Btn} onClick={handleClick}><span className={Styles.MainBody_Btn_In}>{btn_Text}</span></button>
                    <div className={Styles.MainBody_EmptyDiv}></div>
                </div>
            </div>
            <div className={Styles.MainBody_Right}><img className={Styles.MainBody_Image} src={Character1} alt="Character1" /></div>
        </div>
    )
}

export default MainBody;