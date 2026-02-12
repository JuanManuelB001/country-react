import { useEffect, useState } from "react";
import { CountryCoatOfArms } from "../components/CountryCoatOfArms";
import "../styles/borderForCountry.css";

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

      {props.length > 0 ? (
        props.map((arrayCountry, i) =>
          arrayCountry.map((country) => (
            <div key={country.cca3}>
              <div className="container">

              <h4>{country.name.common}</h4>
              <div className="containerDetails">
                <CountryCoatOfArms
                  className="image-container"
                  type="flag"
                  png={country.flags?.png}
                  svg={country.flags?.svg}
                  alt={`Coat of Arms of ${country?.name.common}`}
                />
                <div className="details">
                  <p>CCA3: {country.cca3}</p>
                  <p>Capital: {country.capital?.join(", ")}</p>
                  <p>Continent: {country.continents}</p>
                  <p>Population: {country.population}</p>
                </div>
              </div>
              </div>
            </div>
          )),
        )
      ) : (
        <p>No borders</p>
      )}
    </div>
  );
}
