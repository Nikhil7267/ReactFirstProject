import React from "react";
import './index.css';


function Show(props){
    console.log(props);

    return(
        <>
        <div className="cards">
            <div className="Profile">
                <img src={props.imgsrc} alt="picturee" className="phuto"/>   
                <h3 className="Name">{props.Name} </h3> 
                <a href={props.link} target="blank" >
                    <button> Know More</button>  </a>
                    </div></div> 
                </>
    );
}
export default Show;