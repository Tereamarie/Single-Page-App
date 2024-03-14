import React from "react";

const DataProps = props => {
  console.log(props.utahIsTheBest);

  return (
    <div>
      <h3>List of utah places</h3>
      <ul>
        {/* props.utahIsTheBest is Array["str"]. 
        Map transforms from Arr["str"] to Array[JSX Obj], 
        which can now render. You can use li or any component or HTML element.
        
        Iterating over & creating a list of components in JSX requires you to add 
        a key so that React can tell the different between each element you're creating
        
        For more info: https://reactjs.org/docs/lists-and-keys.html#keys*/}
        {props.utahIsTheBest.map((placeStr, index) => {
          return <li key={index}>{placeStr}</li>;
        })}
      </ul>
      {/* setPlacesFn - this is the same function as the state setter, just passed through
      props. Here we are updating the places state variable in App.js*/}
      <button
        onClick={() => props.setPlacesFn(["test", "test two", "test three"])}
      >
        Change Places
      </button>
    </div>
  );
};

export default DataProps;

// another way to export/declare a functional component
// export default function DataProps() {
//   return <div>DataProps</div>;
// }
