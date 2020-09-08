import React from 'react';
import './App.css';
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookcounterThree from "./components/HookCounterThree";

function App() {
  return (
    <div className="App">
        <HookCounterTwo></HookCounterTwo>
        <HookcounterThree></HookcounterThree>
    </div>
  );
}

export default App;
