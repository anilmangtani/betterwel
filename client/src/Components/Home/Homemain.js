import React from "react";
import Fourthsec from "./Fourthsec";
import Home from "./Home";
import Secpage from "./secpage";
import Thirdsec from "./Thirdsec";

const Mainhome = () =>{
 
    return(
        <div>
            <Home/>
            <Secpage/>
            <Thirdsec/>
            <Fourthsec/>
        </div>

    )
     

}

export default Mainhome;