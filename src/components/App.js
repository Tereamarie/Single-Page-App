import React, { useState } from "react";

// to get out of the current directory and go up a level in the directory
// use ../
import { placesInUtah } from "../data.js";

// to point to current file directory, use ./
import DataProps from "./DataProps";
import Greeting from "./Greeting";
import PersonDescription from "./PersonDescription";

const App = () => {
  const initialState = placesInUtah;
  // use Array[strs] as initial value of places
  const [places, setPlaces] = useState(initialState);

  // this is a function we pass as a prop
  // this function is not executed in App, it's passed as a non-executed material
  const favNumberFn = () => {
    return `fav Number: ${Math.random() * 100}`;
  };

  return (
    <div>
      {/* passing a set state fn to update state within DataProps. 
      When state changes within DataProps, "places" in App will update 
      and whenever there is a state change, JSX that references "places" will update.
      There for <DataProps> will update with the new "places" value*/}
      <DataProps utahIsTheBest={places} setPlacesFn={setPlaces} />
      <h1>This is our new app</h1>

      <Greeting name="Emily" fakeProp={123} fakePropTwo={false} />
      <PersonDescription description={"Teach"} favNum={favNumberFn} />
      <Greeting name="Don" fakeProp={123} fakePropTwo={false} />
      <PersonDescription description={"Student"} favNum={favNumberFn} />

      <Greeting name="Jeannine" fakeProp={123} fakePropTwo={false} />
      <PersonDescription description={"Boss lady"} favNum={favNumberFn} />
    </div>
  );
};

export default App;

