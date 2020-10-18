import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar';
import CountryList from './list.js';
import Switch from '../components/switch/switch.js';
import Button from '../components/button/button.js';
import logo from '../search/logo.png';
import NavBar from '../components/nav/nav.js';

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
      <NavBar/>
      <h1 className="title">GreenGen</h1>
      <img src={logo} alt="Logo" width="200"/>
      <p> Input a product name to find greener alternatives! </p>
      <p id="note">Toggle for link searching.</p>
      <Switch rounded={true} isToggled={isToggled} onToggle={() => setIsToggled(!isToggled)}/>
      <SearchBar 
       input={input} 
       onChange={updateInput}/>
      <Button onClick={() =>alert("This button should search!")}>Search</Button>
      <CountryList countryList={countryList}/>
      <h1 className="bumper"> BUMPER </h1>
      <h1 className="bumper"> BUMPER </h1>
    </>
   );
}

export default SearchPage