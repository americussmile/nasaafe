import React from 'react';
import './App.css';
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookcounterThree from "./components/HookCounterThree";
import HookCounterFourth from "./components/HookCounterFour";

function App() {
  return (
    <div className="App">
        <HookCounterTwo></HookCounterTwo>
        <HookcounterThree></HookcounterThree>
        <HookCounterFourth></HookCounterFourth>
    </div>
  );
}

export default App;
