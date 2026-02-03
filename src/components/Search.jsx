import { useState } from "react";
import "../styles/search.css";
import { UrlData } from "../data/UrlData";
import { Loading } from "./Loading";
import { Country } from "./Country";

export function Search() {
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleSubmit = (event) => {
    //URL DATOS
    setLoading(true);
    event.preventDefault();

    const url = UrlData("/name/" + characterName)
      .then((result) => {
        setCharacterData(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (event) => {
    setCharacterName(event.target.value);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setCharacterName("")
    setCharacterData(null);
  };
  return (
    <div>
      <form className="formulario" onSubmit={handleSubmit}>
        <label htmlFor="dato">Ingrese pais</label>
        <input
          type="text"
          id="dato"
          name="dato"
          value={characterName}
          placeholder="Ingrese datos paises"
          onChange={handleChange}
        />

        <div className="buttons">
          <button type="submit">Submit</button>
          <button type="reset" className="reset" onClick={handleReset}>
            Reset{" "}
            
          </button>
        </div>
      </form>
      {loading && (
        <Loading />
      )}
      {!loading && characterData.length >0 && (
  <Country props={characterData} />
)}
    </div>
  );
}
