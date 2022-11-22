import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [state, setState]= useState([]);
  
  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then((response) => {
      return response.json()
    })
    .then((response) =>{
      setState((response.results))
      console.log(response.results )
    })
    .catch((err) => console.log(err))

  }, [])
  console.log(state)


  return (
    <div className="App">
    {
      state.map((object,index)=>{
        return(
          <div key={index}>
            <p>{index+1}. {object.name}</p>
          </div>
        )
      })
    }
    </div>
  );
}

export default App;
