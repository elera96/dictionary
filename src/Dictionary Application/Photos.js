import React from "react";
import "./Photos.css";
import 'bootstrap/dist/css/bootstrap.min.css';




export default function Photos(props) {



if (props.photos){
  

  return (
    <div className="row images">
     {props.photos.map(function (photo, index) {
         if (index < 9) {
        return (
         <div className="col-3 single-image" key={index}>
          <img className="single-image" src={photo.src.landscape} alt="image" />
          </div>
         );
        }
        })
    
    }      
    
    </div>
  )

}
else {
    return(null);
}
}
