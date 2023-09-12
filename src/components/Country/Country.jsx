import { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags }) => {
    const {name, flags, capital, population, area, cca3} = country;

    const [visited, setVisited] = useState(false); 

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountries(country);
    
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color: visited ? 'purple' : 'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <h3>Capital: {capital}</h3>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={() => handleVisitedCountries(country)} className='btn-visited'>Mark Visited</button><br />
            <button onClick={() => handleVisitedFlags(country.flags.png)} className='btn-visited'>Add Flag</button><br />
            <button onClick={handleVisited} className='btn-visited'>{visited ? 'Visited' : 'Going'}</button><br />
            {
                visited ? 'I Have Visited' : 'I Have Not Visited'
            }
        </div>
    );
};

export default Country;