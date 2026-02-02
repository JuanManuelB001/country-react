import { useLocation } from "react-router-dom";

export function DetailsCountry({props}){
    const {state} = useLocation();
    const country = state?.country;
    console.log(country);
    return(
        <div>
            Details Country Page
        </div>
    );
}