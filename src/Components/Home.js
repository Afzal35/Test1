import React from "react";
import JSONDATA from './country_data.json';
import './Home.css';
import{useState} from 'react';
function Home() {
  const[searchTerm, setSearchTerm]= useState('')
  return (
    <div className="country_data">
      <input type="text" placeholder="Search.." onChange={event => {setSearchTerm(event.target.value)}}
      />
      {JSONDATA.filter((val)=>{
        if (searchTerm ==""){
          return val
        }else if(val.first_name.toLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((val, key) => {
        return(
        <div className="user" key={key}>
          <p>{val.Country_name} {val.Capital_name} {val.Currency}</p>

        </div>
        );
      })}
    </div>
  );
}

export default Home;
