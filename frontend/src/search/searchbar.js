import React from 'react';

const SearchBar = ({input:keyword, onChange:setKeyword}) => {
const BarStyling = {width:"50rem",height:"2.5rem",background:"#F2F1F9", border:"none", padding:"1rem", borderRadius:"10px", fontSize:20, fontFamily:'Oxygen'};

  return (
    <input 
     style={BarStyling}
     key="random1"
     value={keyword}
     placeholder={"Enter a product"}
     onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar