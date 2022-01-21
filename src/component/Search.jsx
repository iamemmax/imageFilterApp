import React, { useState } from 'react';
import * as aiIcons  from "react-icons/ai";

const Search = ({handleInput, handleSubmit, input}) => {

  const [fixedHeader, setFixedHeader] = useState(false);

  const handleHeader = () => {
  
      if(window.pageYOffset >  100){
          setFixedHeader(true)
          
      }else{
          setFixedHeader(false)
      }
  }
  window.addEventListener("scroll", handleHeader)

  return <div className={fixedHeader ? 'form fixedSearch'  : 'form'}>
       <h2>Search from our Unlimited images Gallery </h2>
                <form onSubmit={handleSubmit}>
                    <input onChange={handleInput} type="text" value={input} placeholder='search' />
                    <button type="submit"><aiIcons.AiOutlineSearch/></button>

                </form>
  </div>;
};

export default Search;
