import { useLocation } from "react-router-dom";
import { CountryCoatOfArms } from "../components/CountryCoatOfArms";
import "../styles/detailsCountry.css";
import { useEffect, useState } from "react";
import { BordersCountry } from "../components/BordersCountry";
import { StartRate } from "../components/StartRate";
import { BorderForCountry } from "../components/BorderForCountry";
import { UrlData } from "../data/UrlData";
import { all } from "axios";

export function DetailsCountry() {
  const { state } = useLocation();
  const country = state?.country;

  const [allBorder, allSetBorder] = useState([]);
  const handleCountry = ((border) =>{
    allSetBorder(border)
  })
  useEffect(() => {
    if(!country?.borders) return;


    if (country?.borders) {
      // BUSCAR LOS DATOS DE BORDERS
      handleCountry(country.borders)
        
    }
  },[]);
  console.log(allBorder)




  const countCoats = () => {
    return !!(country?.coatOfArms?.png || country?.coatOfArms?.svg);
  };

  if (!country) {
    return <p>No country data available</p>;
  }

  return (
    <div className="wraper-details">
      <h2 className="country-title">{country.name.common}</h2>

      <div className="container-detail">
        <div className="flags">
          {/* ESCUDO */}
          {countCoats() && (
            <CountryCoatOfArms
              type="coat"
              png={country.coatOfArms?.png}
              svg={country.coatOfArms?.svg}
              alt={`coat of arms of ${country.name?.common}`}
            />
          )}

          {/* BANDERA */}
          <CountryCoatOfArms
            type="flag"
            png={country.flags?.png}
            svg={country.flags?.svg}
            alt={country.flags?.alt}
          />
        </div>

        <div className="info">
          <p className="country-info">
            Capital: {country.capital?.[0] || "No capital"}
          </p>

          <p className="country-info">
            Continent: {country.continents?.[0] || "No continent"}
          </p>

          {/* CURRENCIES (sin div dentro de p) */}
          {country.currencies &&
            Object.values(country.currencies).map((current) => (
              <p className="country-info" key={current.name}>
                Currency: {current.name}, Symbol {current.symbol}
              </p>
            ))}

          {country.languages && (
            <p className="country-info">
              Languages: {Object.values(country.languages).join(", ")}
            </p>
          )}

          {/* Population (sin div dentro de p) */}
          <div className="country-info">
            Population: <StartRate popularity={country.population} />
          </div>

          {/* MAPA GOOGLE MAPS */}
          <a
            href={country.maps?.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir a Google Maps
          </a>
        </div>

        {/* BORDERS */}
        <div className="borderCountry">
           {allBorder && (
          <BorderForCountry
            props={allBorder}
            className="borderCountry"
          />
        )}
        </div>
       
      </div>
    </div>
  );
}
