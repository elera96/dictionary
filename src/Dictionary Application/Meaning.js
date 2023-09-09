import React from "react";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning (props) {


    if (props.meaning){

return (

    <div className="meaning">

         {props.meaning.map(function (meaning, index) {
         
             return(
                 <div key={index} className="information">
                    <h2 className="partOfSpeech"> {meaning.partOfSpeech} </h2>
                    <h3 className="headline-section">Definition 📖</h3>
                   <Definitions meaning={meaning} />
                   <Synonyms synonyms={meaning.definitions} />
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

