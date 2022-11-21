import { useEffect, useState } from 'react';

import axios from '../axios.js';
import Videocard from '../videocard/Video';
import "./result.css"


 const Results = ({selectedOption}) => {
const [movies,setmovies]=useState([])
    useEffect(()=>{
        const fetchData=async()=>{
            const request=await axios.get(selectedOption)
            setmovies(request.data.results)
           
            console.log(request)
        }
        fetchData();
    },[selectedOption])
 
  return (
    <div className='res'>
   
        {movies.map((movie) => (
          <Videocard key={movie.id} movie={movie}/>
        ))}
        
     
    </div>
  )
}
export default Results