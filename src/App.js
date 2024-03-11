import React from "react";
 import CharacterCard from "./components/CharacterCard/CharacterCard.js";
// import WelcomePage from "./components/WelcomePage/WelcomePage.js";
// import Header from "./components/Header/Header.js";
import { Route } from"react-router-dom";
import './App.css';

export default function App() {

  return (
    <main>
      < CharacterCard />
      {/* <Header /> */}
      {/* <Route exact path="/Search" component={SearchForm}/>
      <Route exact path ="/" component={WelcomePage}/>
      <Route exact path="/Characters" component={CharacterList}/> */}
    </main>
  );
}