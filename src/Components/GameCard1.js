import React from "react";
import Team1 from "../Assets3/Team1.png";
import Team2 from "../Assets3/Team2.png";
import Versus from "../Assets3/Vs.png";
import Star from "../Assets3/star.png";
import Styles from "./GameCard1.module.css";
import GameCard1Child3Box1 from "./GameCard1Child3Box1";
import GameCard1Child3Box2 from "./GameCard1Child3Box2";

const GameCard1 = () => {
    return(
        <div className={Styles.GameCard1}>
            <div className={Styles.GameCard_Child1}>
                <div><img className={Styles.GameCard_Child1_Image} src={Team1} alt="Team1"/></div>
                <div><img className={Styles.GameCard_Child1_Image} src={Versus} alt="Versus"/></div>
                <div><img className={Styles.GameCard_Child1_Image} src={Team2} alt="Team2"/></div>
            </div>
            <div className={Styles.GameCard_Child2}>
                <div className={Styles.GameCard_Child2_Top}>VALORANT</div>
                <div className={Styles.GameCard_Child2_Middle}>
                    <img className={Styles.GameCard_Child2_Image} src={Star} alt="Star"/>
                    <img className={Styles.GameCard_Child2_Image} src={Star} alt="Star"/>
                    <img className={Styles.GameCard_Child2_Image} src={Star} alt="Star"/>
                    <img className={Styles.GameCard_Child2_Image} src={Star} alt="Star"/>
                    <img className={Styles.GameCard_Child2_Image} src={Star} alt="Star"/>
                </div>
                <div className={Styles.GameCard_Child2_Bottom}>
                    <div><button className={Styles.GameCard_Child2_Btn1}>View Details</button></div>
                    <div><button className={Styles.GameCard_Child2_Btn2}>Comments</button></div>
                </div>
            </div>
            <div className={Styles.GameCard_Child3}>
                <GameCard1Child3Box1 text="Days"/>
                <GameCard1Child3Box2/>
                <GameCard1Child3Box1 text="Hours"/>
                <GameCard1Child3Box2/>
                <GameCard1Child3Box1 text="Minutes"/>
                <GameCard1Child3Box2/>
                <GameCard1Child3Box1 text="Seconds"/>
            </div>
        </div>
    )
}

export default GameCard1;