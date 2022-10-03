import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import {useState} from "react"


function App() {
  const [appDark, setDarkMode] = useState("");
  const appClass = appDark ? "App dark" : "App light";

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
  function handleDark() {
    setDarkMode((appDark => appDark = !appDark))
  }


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDark}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
