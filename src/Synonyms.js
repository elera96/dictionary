import React from "react";



export default function Synonyms(props) {


let finalSynonym = props.synonyms[0].synonyms;

if (finalSynonym.length > 0) {
    console.log(finalSynonym);
   

    return (
        
        <div className="Synonyms">
            <strong> Synonym</strong>
        
            {finalSynonym.map(function (synonym, index) {
                return (
                
                    <div key={index} background-color="red">
                        <ul><li>{synonym}</li></ul>
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
