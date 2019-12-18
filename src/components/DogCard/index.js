import React from "react";
import "./style.css";

function DogCard(dog) {
    return (
        <div className="card col-3 border-0 rounded-0 pt-2 doggo-card">
            <img src={dog.image} className="card-img-top" id={dog.id} alt={dog.name} />
            <div className="card-body doggo-card-body">
                <h6 className="card-text doggo-card-text">{dog.name} ({dog.insta})</h6>
                <p>{dog.insta}</p>
            </div>
        </div>
    )
}

export default DogCard;