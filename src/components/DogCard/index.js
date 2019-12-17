import React from "react";
import "./style.css";

function DogCard(dog) {
    return (
        <div className="card col-3 doggo-card">
            <img src={dog.image} className="card-img-top" id={dog.id} alt={dog.name} />
                <div className="card-body">
                    <p className="card-text doggo-card-text">{dog.name} from {dog.insta}</p>
                </div>
        </div>
            )
        }
        
export default DogCard;