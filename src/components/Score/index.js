import React from "react";
import "./style.css";

function Score() {
    return (
        <div className="col-4 align-text-bottom">
            <div className="highScore">
           <h5>High Score: <span id="highScore">0</span></h5>
           </div>
           <div className="currentScore">
               <h5>Current Score: <span id="currentScore">0</span></h5>
           </div>
        </div>
            )
        }
        
export default Score;