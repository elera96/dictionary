import React from "react";

export default function Definitions (props) {


return (
    <div className="definition">

        {props.meaning.definitions.map(function (definition, index) {

        return(
        <ul key={index}>
        <li>{definition.definition}</li>
        </ul>
        );
})}
    </div>


)


}
