import React from "react";
import "./Synonyms.css";



export default function Synonyms(props) {


let finalSynonym = props.synonyms[0].synonyms;

if (finalSynonym.length > 0) {
    console.log(finalSynonym);
   

    return (
        
        <div className="Synonyms">
            <h2 className="headline-section"> Synonym</h2>
        
            {finalSynonym.map(function (synonym, index) {
                return (
                
                    <div key={index} >
                        <ul className="definition">
                        <li className="single-definition">{synonym}</li>
                        </ul>
                    </div>
                );
            })}
        

        </div>
        
    );


}
else
{
     return(
        null
     )
}


}
