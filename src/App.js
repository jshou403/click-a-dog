import React from 'react';
// import logo from './logo.svg';
import './App.css';

// importing Components for use on main page
import doggos from "./doggos.json";
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import DogCard from "./components/DogCard";

class App extends React.Component {

  state = {
    doggosState: doggos,
    score: 0,
    highScore: 0,
    clickedDogs: []
  }

  whenPet = id => {
    console.log(id);
    // check if id is inside of clickedDogs array
    // if it's not, add it to the clickedDogs array and increase the score using setState
      // check if score > highscore, if so, set highScore to currentScore using setState
    // if it is, reset the score to 0 using setState
}

  render() {
    console.log(doggos);
    return (
      <Wrapper>

        <Header />

          <div className="row">
            <Instructions />
            <Score />
          </div>

          <div className="container">
            <div className="row">
              {this.state.doggosState.map(doggo => (
                <DogCard onClick={this.whenPet} image={doggo.imageUrl} id={doggo.id} key={doggo.id} name={doggo.name} insta={doggo.insta.handle} />

              ))}
            </div>
          </div>

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </Wrapper>
    );
  }
}

export default App;
