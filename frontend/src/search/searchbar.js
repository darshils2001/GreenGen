import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
  const BarStyling = {width:"50rem",height:"3rem",background:"#F2F1F9", border:"none", padding:"1rem", borderRadius:"10px", fontSize:20};
  
  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Search a product"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar