import React from "react";
import "./Synonyms.css";



export default function Synonyms(props) {


let finalSynonym = props.synonyms[0].synonyms;

if (finalSynonym.length > 0) {
   

    return (
        
        <div className="Synonyms">
            <h2 className="headline-section"> Synonyms 🖇️</h2>
        
            {finalSynonym.map(function (synonym, index) {
                return (
                
                    
                        <li className="single-synonym" key={index} >{synonym}</li>
                    
                    
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
