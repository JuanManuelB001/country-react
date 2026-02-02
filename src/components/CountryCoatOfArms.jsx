import { useState } from "react";

export function CountryCoatOfArms({png, svg, alt}){
    const [src, setSrv] = useState(png || svg || "/no-image.png");

    const handleError = ()=>{
        if(src === png && svg){
            setSrv(svg)
        }
        else{
            setSrv("/no-image.png");
        }
    }

    return(
        <img src={src} alt={alt} onError={handleError} />
    );
}