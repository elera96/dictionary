import React from "react";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";

export default function Meaning (props) {


    if (props.meaning){

return (

    <div className="meaning">
         {props.meaning.map(function (meaning, index) {
         
             return(
                 <div key={index}>
                    <h2> {meaning.partOfSpeech}</h2>
                    <strong>Definition</strong>
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

