import React, { useState } from "react";
import PlayBtn from "../Assets4/PlayIcon.png";
import Styles from "./BodyContent3.module.css";

const BodyContent3 = () => {
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
                    <div className={Styles.TitleBox1}>
                        <h1 className={Styles.MainBody_Title1}>Split</h1>
                        <h1 className={Styles.MainBody_Title2}>Deathmatch</h1>
                    </div>
                    <div className={Styles.TitleBox2}>
                        <h1 className={Styles.MainBody_Title3}>Tournament</h1>
                    </div>
                </div>
                <div className={Styles.MainBody_Content_Box}>
                    <p className={Styles.MainBody_Content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Erat imperdiet sed euismod nisi porta lorem mollis aliquam.</p>

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
            <div className={Styles.MainBody_Right}>
                <div className={`${Styles.MainBody_Circle1} ${Styles.MainBody_Circle}`}></div>
                <div className={`${Styles.MainBody_Circle2} ${Styles.MainBody_Circle}`}></div>
                <div className={`${Styles.MainBody_Circle3} ${Styles.MainBody_Circle}`}></div>
                <img className={Styles.MainBody_Image2} src={PlayBtn} alt="PlayBtn"/>
            </div>
        </div>
    )
}

export default BodyContent3;