import React from "react";
import "./Phonetics.css";

export default function Phonetics (props) {
    


if (props.phonetics) {

    return (
        
    <div>
        {props.phonetics.map(function (phonetics, index) {

            return(
            <div key={index} className="phonetics">
                 <a href={phonetics.audio} target="_blank"  rel="noreferrer" className="audio">🎧 </a>
                 {phonetics.text}  
           

            </div>   
            )


        })}

    </div>    
    
    
    );
}
else {return (null);}
}