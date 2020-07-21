import React from "react";
import "./style.css";


function Card(props) {
  return (
    <div className = "border">
    
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>hobbies:</strong> {props.hobbies}
          </li>
        </ul>
      </div>
      
    </div>
  );
}

export default Card;
