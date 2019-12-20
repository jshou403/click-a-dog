import React from 'react';

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

  shuffleCards = () => {
    this.setState({ doggosState: this.state.doggosState.sort(() => Math.random() - 0.5) })
  }

  resetGameStats = () => {
    this.setState({ score: 0 })
    this.setState({ clickedDogs: [] })
  }

  // whenClicked is run when a doggoCard has been clicked.
  whenClicked = id => {
    // console.log(`\n ID Clicked: ${id} \n`);

    // 1 - Shuffle the cards.
    this.shuffleCards();

    // 2 - Declare the states that we will update.
    const { score } = this.state;
    const { highScore } = this.state;

    // 3 - Check if the id passed in from the doggoCard is already in the clickedDogs array.
    if (this.state.clickedDogs.includes(id)) {
      // 3A // If id IS IN array... 
      // 3A - Display loss alert.
      // 3A - Reset score and array.

      alert("You pet this dog already! You lose this round but please try again!");
      // console.log(`GAME OVER\nALREADY in array: ${this.state.clickedDogs}`);

      this.resetGameStats();
      // this.setState({ score: 0 })
      // this.setState({ clickedDogs: [] })

    } else {
      // 3B // If id is NOT in array... 
      // 3B - Add it to the clickedDogs array.
      // 3B - Increase the score by one. 
      // 3B - Check for high score. 

      this.state.clickedDogs.push(id);
      // console.log(`Added to array: ${this.state.clickedDogs}`);

      // let scoreTracker use the value of const score to add to score
      // set the value of the score property to the value of the scoreTracker
      let scoreTracker = score + 1;
      this.setState({ score: scoreTracker });
      // console.log(`\nscoreTracker: ${scoreTracker}`);

      // 3B - Check for high score.
      // let highScoreTracker use the value of the const highScore
      var highScoreTracker = highScore
      // console.log(`highScoreTracker = ${highScoreTracker}`);

      if (scoreTracker > highScoreTracker) {
        // 3B 1 // If the current score > current high score... 
        // 3B 1 - Update the highScore to scoreTracker (current score).
        // 3B 1 - Check if current score = 12... 
        //// Display win alert.
        //// Reset score and array.

        this.setState({ highScore: scoreTracker });
        // console.log(`highScore = ${highScore}`);

        if (scoreTracker === 12) {
          alert("Yay! All the doggos are grateful for your pets! Want to give more pets?")
          this.resetGameStats();
        }

      } else if (scoreTracker === 12) {
        // 3B 2 // If current score = 12... 
        // 3B 2 - Alert win.
        // 3B 2 - Reset game stats.
        alert("Yay! You pet all the doggos and all the doggos are grateful for your pets! Want to give more pets?")
        this.resetGameStats();
      }
    }
  }

  render() {
    // console.log(doggos);
    return (
      <Wrapper>

        <Header />

        <div className="row">
          <Instructions />
          <Score highScore={this.state.highScore} score={this.state.score} />
        </div>

        <Wrapper>
          <div className="row">
            {this.state.doggosState.map(doggo => (
              <DogCard 
              onClick={() => this.whenClicked(doggo.id)} 
              image={doggo.imageUrl} 
              id={doggo.id} key={doggo.id} 
              name={doggo.name} 
              insta={doggo.insta.handle} />
            ))}
          </div>
        </Wrapper>
        
      </Wrapper>
    );
  }
}

export default App;
