import React from 'react';

const CountryList = ({countryList=[]}) => {

  return (
    <>
    { countryList.map((data,index) => {
        if (data) {
          return (
            <div className="test" key={data.name}>
              <h1>{data.name}</h1>
	    </div>	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default CountryList