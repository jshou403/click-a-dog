import React from "react";
import "./style.css";

// dog = name of prop being passed in 
// image, id, name, insta, onClick = named on App.js
// on App.js image=doggos.json key name which is imageUrl

function DogCard(dog) {
    return (
        <div className="card col-3 border-0 rounded-0 p-0 doggo-card"
            onClick={() => dog.onClick(dog.id)}>
            <img src={dog.image} className="card-img-top" id={dog.id} alt={dog.name} />
            <div className="card-body doggo-card-body">
                <h6 className="card-text doggo-card-text">{dog.name} ({dog.insta})</h6>
            </div>
        </div>
    )
}

export default DogCard;