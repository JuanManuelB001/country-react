import "../styles/modalCountry.css"

export function ModalCountry({country, onClose}){
    return(
         <>
      <h4>{country.name.common}</h4>
      <p>Capital: {country.capital}</p>
      <p>Region: {country.region}</p>
    </>
    );
}