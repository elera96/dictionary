import React from "react";
import "./Definitions.css";

export default function Definitions (props) {


return (
    <div >

        {props.meaning.definitions.map(function (definition, index) {

        return(
            <div>
        <ul key={index} className="definition">
        <li className="single-definition">{definition.definition}</li>
        </ul>
        </div>
        );
})}
    </div>


)


}
