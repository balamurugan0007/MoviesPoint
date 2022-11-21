
import "./navbar.css"
import React from 'react';
import requests from "../components/requests";

export const Navbar = ({setSelectedOption}) => {
  return (
    <div className="nav">
        <h4 onClick={()=>setSelectedOption(requests.fetchTrending)}>
          Trending</h4>
        <h4 onClick={()=>setSelectedOption(requests.fetchAction)}>Action</h4>
        <h4 onClick={()=>setSelectedOption(requests.fetchHorror)}>Horror</h4>
        <h4 onClick={()=>setSelectedOption(requests.fetchScifi)}>Sci-fi</h4>
        <h4 onClick={()=>setSelectedOption(requests.fetchComedy)}>Comedy</h4>
        <h4 onClick={()=>setSelectedOption(requests.fetchMystery)}>Mystery</h4>
    </div>
  )
}
