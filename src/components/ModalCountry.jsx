import "../styles/modalCountry.css";

export function ModalCountry({ country }) {
  const current = country.currencies
    ? Object.values(country.currencies)[0]
    : null;
  return (
    <>
      <h4>{country?.name.common}</h4>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
      <p>
        Currencies: {current.name} {current.symbol}
      </p>
    </>
  );
}
