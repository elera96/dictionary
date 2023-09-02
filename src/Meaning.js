import React from "react";
import Definitions from "./Definitions";

export default function Meaning (props) {

 
    if (props.meaning){

return (

    <div className="meaning">
         {props.meaning.map(function (meaning, index) {
             return(
                 <div key={index}>
                   
                    <h2> {meaning.partOfSpeech}</h2>
                   <Definitions meaning={meaning} />
                 </div>
             );
         })}
    </div>
)
        }
else
 {
     return(
        null
     )
    }

        
}

