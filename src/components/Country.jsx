import { Link } from "react-router-dom";
import { ModalCountry } from "./ModalCountry";
import "../styles/country.css";
import { useState } from "react";

export function Country({ props }) {
  const [open, setOpen] = useState(null);

  return (
    <div className="country">
      {props.map((country, index) => (
        <div key={index} className="country-index">
          <div className="info-wrapper">
            <button
              className="info-btn"
              onClick={() => setOpen(open === index ? null : index)}
            >
              !
            </button>
          {open === index && (
            <div className="popover">
              <ModalCountry country={country} />
            </div>
          )}
          </div>
          <Link
            to={"country-details"}
            state={{ country }}
            className="link-country"
          >
            <div className="container-country">
              <img src={country.flags.png} alt={country.name.common} />
              <p className="name-common">{country.name.common}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
