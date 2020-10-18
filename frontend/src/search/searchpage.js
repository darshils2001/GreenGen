import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import CountryList from './list.js';
import Switch from '../components/switch/switch.js';
import Button from '../components/button/button.js';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setCountryList(data) 
         setCountryListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setCountryList(filtered);
  }

  useEffect( () => {fetchData()},[]);
  
  const [isToggled, setIsToggled] = useState(false);


  return (
    <>
      <h1 className="title">GreenGen</h1>
      <span>      </span>
      <Switch rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
      <span>      </span>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <span>     </span>
      <Button onClick={() => alert("you clicked on me!")}>Search</Button>
      <CountryList countryList={countryList}/>
    </>
   );
}

export default SearchPage