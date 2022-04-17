import React from "react";
import Styles from "./BodyContent4.module.css";
import GameCard2 from "./GameCard2";

const BodyContent4 = () => {
    return(
        <div className={Styles.MainBody}>
            <div className={Styles.MainBody_Top}>
                <div className={Styles.MainBody_Text1}>See My</div>
                <div className={Styles.MainBody_Text2}>Matches</div>
            </div>
            <div className={Styles.MainBody_Bottom}>
                <div className={Styles.Bottom_Inner}>
                    <GameCard2/>
                    <GameCard2/>
                    <GameCard2/>
                </div>
            </div>
        </div>
    )
}

export default BodyContent4;