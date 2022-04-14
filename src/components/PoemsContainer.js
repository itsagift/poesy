import React from "react";
import { useEffect, useState } from "react";
import Poem from "./Poem";

function PoemsContainer({poems, setPoems}) {
  
  useEffect(() => {
    async function fetchPoems() {
      let req = await fetch('http://localhost:8004/poems')
      let res = await req.json()
      
      setPoems(res)
    }
    fetchPoems()
  }, [])
  
  return (
    <div className="poems-container">
      {
        poems.map((poem) => {
          return(
            <Poem poem={poem} key={poem.id}/>
          )
        })
      }
    </div>
  );
}

export default PoemsContainer;
