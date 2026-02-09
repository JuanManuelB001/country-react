
import {FaStar} from "react-icons/fa"

export function StartRate({popularity}){
    
    if (!popularity)  return null;

    const MAX_POPULARITY =500;
    const star = Math.round(
        Math.min(popularity, MAX_POPULARITY) /MAX_POPULARITY *5
    )

    return(
    
        <div>
            {[ ... Array(5)].map((_, index)=>{
                
            return <FaStar key={index}
            
                    color={index< star ?"gold": "lightgray"}
            />;
        })}
        </div>
    );
}