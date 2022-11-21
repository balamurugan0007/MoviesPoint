
import { useState } from 'react';
import './App.css';
import {Heading} from "./Header/Heading.js";

import { Navbar } from './navbar/Navbar.js';
import requests from './components/requests';
import Results from './components/resuolt/Results';


const App=()=>{
  const [selectedOption,setSelectedOption]=useState(requests.fetchTrending);
  console.log(selectedOption);
  
  return(
    <div>
      <Heading/>
      <Navbar setSelectedOption={setSelectedOption}/>
      <Results selectedOption={selectedOption}/>
      
    </div>
  )
}

export default App;
