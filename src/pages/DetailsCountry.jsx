import { useLocation } from "react-router-dom";
import { CountryCoatOfArms } from "../components/CountryCoatOfArms";
import "../styles/detailsCountry.css";
import { use, useEffect, useState } from "react";
import { BordersCountry } from "../components/BordersCountry";
import { StartRate } from "../components/StartRate";


export function DetailsCountry({ props }) {
  const { state } = useLocation();
  const country = state?.country;
  const [border, setBorder] = useState([]);
  const handleBorder = () => {
    setBorder(country.borders ?? []);
  };

  useEffect(()=>{
    handleBorder()
  },[] )
  const countCoats = () => {
    return !!(country.coatOfArms?.png || country.coatOfArms?.svg);
  };
  console.log(country);

  return (
    <div className="container-detail">
      <div className="flags">
        {
          /* ESCUDO */
          countCoats() && (
            <CountryCoatOfArms
              png={country.coatOfArms?.png}
              svg={country.coatOfArms?.svg}
              alt={`coat of amrs of ${country.name?.common}`}
            />
          )
        }
        {
          /*BANDERA */
          <CountryCoatOfArms
            png={country.flags?.png}
            svg={country.flags?.svg}
            alt={country.flags.alt}
          />
        }
      </div>
      <div className="info">
        <p>capital: {country.capital?.[0] || "no capital"}</p>
        <p>Continent: {country.continents?.[0] || "No continet "}</p>
        {country.currencies &&
          Object.values(country.currencies).map((current) => (
            <p key={current.name}>
              currencies: {current.name}, Symbol {current.symbol} 
            </p>
          ))}
          {country.languages && (
            <p>Languages: {Object.values(country?.languages).join(", ")}</p>
          )}
          <div>Population: {<StartRate popularity={country.population}/>}</div>

        {
          /* MAPA GOOGLE MAPS */
          <a href={country.maps?.googleMaps} target="_blank">
            Ir a Google maps
          </a>
        }
      </div>
      {
        border.length >0 && (<BordersCountry props={border}/>)
      }
    </div>

  );
}
