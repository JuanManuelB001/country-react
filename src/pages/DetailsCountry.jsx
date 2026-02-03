import { useLocation } from "react-router-dom";
import { CountryCoatOfArms } from "../components/CountryCoatOfArms";


export function DetailsCountry({props}){
    const {state} = useLocation();
    const country = state?.country;
    
    
    const countCoats = ()=>{
       return !!(country.coatOfArms?.png || country.coatOfArms?.svg);
    }

    console.log(country);
    
    return(
        <div >
            Details Country Page

            {/* ESCUDO */
                countCoats() &&(
                <CountryCoatOfArms
                png={country.coatOfArms?.png} svg={country.coatOfArms?.svg} alt={`coat of amrs of ${country.name?.common}`} />
            )
            }
            {
                <CountryCoatOfArms png={country.flags?.png} svg={country.flags?.svg} alt={country.flags.alt} />
            }

            <p>capital: {country.capital?.[0] || "no capital"}</p>
            {
                country.currencies &&
                Object.values(country.currencies).map((current) =>(
                    <p key={current.name} >{current.symbol} {current.name}</p>
                ))
            }
            {
                country.borders?.map((border) =>(
                    <p key={border}>{border}</p>
                ))
            }
            {
                /* MAPA GOOGLE MAPS */
                <a href={country.maps?.googleMaps}>Ir a Google maps</a>
            }
        </div>
    );
}