
import { Country } from "./Country";
import { UrlData } from "../data/UrlData";
import { useEffect, useState } from "react";
export function BordersCountry({props}){
    const [characterData, setCharacterData] = useState([]);
    const [isloading, setIsLoading] =useState(false)
    
    console.log(props)

    const searchBorder = ()=>{
        props.forEach(border => {
            let contador = 0;
            console.log(contador)
            UrlData("/alpha/" + border)
            .then((data) =>{
                setCharacterData(prev => [...prev, data]);
            
            }).finally(()=>{
                setIsLoading(true)
            })
        });
    }
    useEffect(()=>{
        setCharacterData([])
        searchBorder()
    },[])
    console.log('character ',characterData)
    return(
        <div>
            <h4>Borders</h4>
            
            {isloading && (
                <Country props={characterData} style={{'width': '100%'}}/>
            )}
        </div>
    );
}