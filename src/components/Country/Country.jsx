import { useState } from 'react';
import './Country.css';
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    const {name, flags, population, area, cca3} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited = () =>{
        setVisited(!visited);
    }


    const passWithParams = () =>{
        handleVisitedCountry(country);
    }

    return (
        <div  className={`country ${visited ? 'visited-style': 'non-visited'}`}>
            <h3 style={{color: visited ? 'purple': 'black'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="Country flags" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParams}>Mark as Visited</button>
            <br />
            <button onClick={() =>handleVisitedFlags(country.flags.png)}>Add visited Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ?'Visited':'Going'}</button>
            {visited ? 'I have visited this country' : 'I want to visit this country'}
            <hr />
            <CountryDetail>
                country = {country}
                handleVisitedCountry = {handleVisitedCountry}
                handleVisitedFlags = {handleVisitedFlags}
            </CountryDetail>
        </div>
    );
};

export default Country;