import React from "react";

export default function Phonetics (props) {
    


if (props.phonetics) {

    return (
        
    <div>
        <strong>Phonetics</strong>
        {props.phonetics.map(function (phonetics, index) {

            return(
            <div key={index}>
            
             <p> {phonetics.text}  </p>
             <a href={phonetics.audio} target="_blank"  rel="noreferrer">Listen </a>

            </div>   
            )


        })}

    </div>    
    
    
    );
}
else {return (null);}
}