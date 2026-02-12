import { useEffect, useState } from "react";
import { CountryCoatOfArms } from "../components/CountryCoatOfArms";
export function BorderForCountry({ props }) {
  const [countryArray, setCountryArray] = useState([]); // ARRAY
  useEffect(() => {
    if (!props) return;

    // Si props ya es un array, lo dejamos igual
    if (Array.isArray(props)) {
      setCountryArray(props);
    } else {
      // Si es un objeto, lo convertimos a un array con un solo elemento
      setCountryArray([props]);
    }
  }, [props]);
  return (
    <div className="border-country-list">
      <h1>Borders</h1>
      {
      props.length >0 ? (
        props.map((arrayCountry, i) => (
          arrayCountry.map((country)=>(
            <div key={country.cca3}>
              <h4>{country.name.common}</h4>
              <p>CCA3: {country.cca3}</p>
              <p>Capital: {country.capital?.join(", ")}</p>
              <p>Continent: {country.continents}</p>
              <p>Population: {country.population}</p>
              <CountryCoatOfArms 
                type="flag"
                png={country.flags?.png}
                svg={country.flags?.svg}
                alt={`Coat of Arms of ${country?.name.common}`}
              />
            </div>
          ))
        ))
      ) : (
        <p>No borders</p>
      )}
    </div>
  );
}
