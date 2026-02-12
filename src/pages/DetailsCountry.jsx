import { useLocation } from "react-router-dom";
import { CountryCoatOfArms } from "../components/CountryCoatOfArms";
import "../styles/detailsCountry.css";
import { useEffect, useState } from "react";
import { BordersCountry } from "../components/BordersCountry";
import { StartRate } from "../components/StartRate";
import { BorderForCountry } from "../components/BorderForCountry";
import { UrlData } from "../data/UrlData";

export function DetailsCountry() {
  const { state } = useLocation();
  const country = state?.country;

  const [allBorder, setAllBorder] = useState([]);

  // Función para traer los datos de los países fronterizos
  const fetchBordersData = async (borders) => {
  if (!borders || borders.length === 0) return;

  try {
    const promises = borders.map((border) =>
      UrlData(`/alpha/${border}`)
    );

    // RESOLVER TODAS LAS PROMESAS
    const result = await Promise.all(promises);

    setAllBorder(result);

  } catch (error) {
    console.error("Error fetching border countries: ", error);
  }
};

  useEffect(() => {
    if (!country?.borders) return;
    // Llamamos a la función para traer los datos de las fronteras
    setAllBorder([]);
    fetchBordersData(country?.borders);
  }, [country]);

  const countCoats = () => {
    return !!(country?.coatOfArms?.png || country?.coatOfArms?.svg);
  };

  if (!country) {
    return <p>No country data available</p>;
  }

  return (
    <div className="wraper-details slide-in">
      <h2 className="country-title">{country.name.common}</h2>

      <div className="container-detail">
        <div className="flags">
          {countCoats() && (
            <CountryCoatOfArms
              type="coat"
              png={country.coatOfArms?.png}
              svg={country.coatOfArms?.svg}
              alt={`coat of arms of ${country.name?.common}`}
            />
          )}

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

          <div className="country-info">
            Population: <StartRate popularity={country.population} />
          </div>

          <a
            href={country.maps?.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir a Google Maps
          </a>
        </div>

          <h1 className="border-title">Borders of {country.name.common}</h1>
        {<div className="borderCountry">
          {allBorder.length > 0 && <BorderForCountry props={allBorder} />}
        </div> }
      </div>
    </div>
  );
}
