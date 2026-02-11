import { Link } from "react-router-dom";
import { ModalCountry } from "./ModalCountry";
import "../styles/country.css";
import { useState } from "react";

export function Country({ props }) {
  const [open, setOpen] = useState(null);
  console.log(props, 'country')
  return (
    <div className="country">
      {props.map((country, index) => (
        <div key={index} className="country-index">
          
          <button
            className="info-btn"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(open === index ? null : index);
            }}
          ><p className="p-i">i</p>
          </button>

          <Link
            to={`country-details/${country.cca3}`}
            state={{ country }}
            className="link-country"
          >
            <div className="container-country">
              <img
                src={country.flags?.png}
                alt={country.name?.common}
              />
              <p className="name-common">
                {country.name?.common}
              </p>
            </div>
          </Link>

          {open === index && (
            <div className="popover">
              <ModalCountry country={country} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
