import React, { useState } from "react";
import Styles from "./BodyContent2.module.css";
import GameCard1 from "./GameCard1";

const BodyContent2 = () => {
    const [readMoreBtn, setReadMoreBtn] = useState(false);
    const [btn_Text, setBtn_Text] = useState("VIEW ALL");

    const handleClick = () => {
        if (!readMoreBtn) {
            setReadMoreBtn(!readMoreBtn);
            setBtn_Text("VIEW SOME")
        } else {
            setReadMoreBtn(!readMoreBtn);
            setBtn_Text("VIEW ALL")
        }
    }

    

    return(
        <div className={Styles.MainBody}>
            <div className={Styles.MainBody_Titles}>
                <h1 className={Styles.MainBody_Title1}>Focus And Game</h1>
                <h1 className={Styles.MainBody_Title2}>Manage</h1>
            </div>
            <div className={Styles.MainBody_Content_Box}>
                <div className={Styles.Content_Box_Inner}>
                    <GameCard1/>
                    <GameCard1/>
                    <GameCard1/>
                </div>
            </div>
            <div className={Styles.MainBody_Btn_Container}>
                <button className={Styles.MainBody_Btn} onClick={handleClick}><span className={Styles.MainBody_Btn_In}>{btn_Text}</span></button>
                <div className={Styles.MainBody_EmptyDiv}></div>
            </div>
        </div>
    )
}

export default BodyContent2;