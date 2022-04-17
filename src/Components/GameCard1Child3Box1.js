import React from "react";
import Styles from "./GameCard1Child3Box1.module.css";

const GameCard1Child3Box1 = (props) => {
    const {text} = props;
    return(
        <div className={Styles.Child3_Box1}>
            <div className={Styles.Child3_Box1_Top}>00</div>
            <div className={Styles.Child3_Box1_Bottom}>{text}</div>
        </div>
    )
}

export default GameCard1Child3Box1;