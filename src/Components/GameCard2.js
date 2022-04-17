import React from "react";
import  Styles from "./GameCard2.module.css";
import Team1 from "../Assets3/Team1.png";
import Team2 from "../Assets3/Team2.png";
import Versus from "../Assets3/Vs.png";




const GameCard2 = () => {
    return(
        <div className={Styles.GameCard2}>
            <div className={Styles.GameCard_Child1}></div>
            <div className={Styles.GameCard_Child2}>
                <div className={Styles.LeftChild}>
                    <img className={Styles.LeftChild_Image} src={Team1} alt="Team1"/>
                    <img className={Styles.LeftChild_Image} src={Versus} alt="Versus"/>
                    <img className={Styles.LeftChild_Image} src={Team2} alt="Team2"/>
                </div>
                <div className={Styles.RightChild}>
                    <div className={Styles.RightChild_Left}>
                        <div className={Styles.RightChild_Left_Top}><span className={Styles.Left_Top_In}>Completed</span></div>
                        <div className={Styles.RightChild_Left_Middle}>Valorant Deathmatch</div>
                        <div className={Styles.RightChild_Left_Bottom}>10th March 2022</div>
                    </div>
                    <div className={Styles.RightChild_Right}>
                        <div><button className={Styles.RightChild_Btn}><i className="fa-solid fa-tv fa-xl"></i></button></div>
                        <div className={Styles.RightChild_Right_Text}>Watch stream</div>
                    </div>
                </div>
            </div>
            <div className={Styles.GameCard_Child3}></div>
        </div>
    )
}

export default GameCard2;