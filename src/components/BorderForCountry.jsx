import { useEffect, useState } from "react";

export function BorderForCountry({ props }) {
  const [countryArray, setCountryArray] = useState([]); // ARRAY

  console.log(props)
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
      {countryArray.length > 0 ? (
        countryArray.map((c, i) => (
          <div key={i} style={{ border: '1px solid #ccc', padding: '10px', margin: '5px' }}>
            <h4>{c.name?.common || "Sin nombre"}</h4>
            <p>CCA3: {c.cca3}</p>
            <p>Capital: {c.capital?.join(", ")}</p>
            <p>Population: {c.population}</p>
            <img src={c.flags?.png} alt={c.name?.common} width={100} />
          </div>
        ))
      ) : (
        <p>No borders</p>
      )}
    </div>
  );
}
