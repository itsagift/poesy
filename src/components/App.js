import React from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";
import {useState} from "react";

function App() {
  const [poems, setPoems] = useState([]);
  const [poemFormVisible, setPoemFormVisible] = useState(true);
  return (
    <div className="app">
      <div className="sidebar">
        <button onClick={()=> {setPoemFormVisible(!poemFormVisible)}}>Show/hide new poem form</button>
        {poemFormVisible ? <NewPoemForm setPoems={setPoems}/> : null }
      </div>
      <PoemsContainer poems={poems} setPoems={setPoems}/>
    </div>
  );
}

export default App;
