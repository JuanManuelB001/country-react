import { useState } from "react";
import "../styles/countryCoatOfArms.css";
import { FaLess } from "react-icons/fa6";

export function CountryCoatOfArms({ type, png, svg, alt }) {
  const [src, setSrc] = useState(png || svg || "/no-image.png");
  const [openFlag, setOpenFlag] = useState(false);

  const handleError = () => {
    if (src === png && svg) {
      setSrc(svg);
    } else {
      setSrc("/no-image.png");
    }
  };

    return src !== "/no-image.png" ? (
    <div className={`country-${type}`}>
      <img src={src} alt={alt} onError={handleError} />
      <p className="country-type">Country {type}</p>
    </div>
  ) : (
    <p>No Image</p>
  );
}
