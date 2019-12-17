import React from 'react';
// import logo from './logo.svg';
import './App.css';

// importing Components for use on main page
import doggos from "./components/DogInfo/doggos.json"; 
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import DogCard from "./components/DogCard";


function App() {
  return (
    <Wrapper>

      <Header />

      <Instructions />

      <Score />
      <Score />

      <DogCard image={doggos[0].imageUrl} id={doggos[0].id} name={doggos[0].name} insta={doggos[0].insta.handle} />
      <DogCard image={doggos[1].imageUrl} id={doggos[1].id} name={doggos[1].name} insta={doggos[1].insta.handle} />
      <DogCard image={doggos[2].imageUrl} id={doggos[2].id} name={doggos[2].name} insta={doggos[2].insta.handle} />
      <DogCard  />
      <DogCard  />

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

export default App;
