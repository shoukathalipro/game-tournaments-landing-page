import React from "react";
import BodyContent from "./BodyContent";
import BodyContent2 from "./BodyContent2";
import BodyContent3 from "./BodyContent3";
import BodyContent4 from "./BodyContent4";
import MainBody from "./MainBody";

const Home = () => {
    return(
        <div>
            <MainBody/>
            <BodyContent/>
            <BodyContent2/>
            <BodyContent3/>
            <BodyContent4/>
        </div>
    )
}

export default Home;