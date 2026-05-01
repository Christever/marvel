import { useState } from "react";
import "./Superhero.css";
export default function Superhero({
  name = "Anonymous",
  description = "Pas de description actuellement",
  films = ["Aucun film"],
  photo = "./anonymous.webp",
  details = "Aucun détail",
  estLePrefere,
  superHeroClique = () => {},
}) {
  // States
  const [showDetails, setShowDetails] = useState(false);
  const [afficherInfo, setAfficherInfo] = useState(false);

  // Functions
  const handleClickShowDetails = (event) => {
    event.stopPropagation();
    setShowDetails((statePrecedent) => !statePrecedent);
  };

  const nomClique = (event) => {
    event.stopPropagation();
    setAfficherInfo(true);
  };

  return (
    <div
      className={`superhero ${estLePrefere && "heroPrefere"}`}
      onClick={() => superHeroClique(name)}
    >
      {/* Carte */}
      <img alt={`photo de ${name}`} src={photo} />
      <h2 onClick={nomClique} className="text-3xl">{name}</h2>
      <p>{description}</p>

      {/* Details */}
      <div
        className="font-bold mb-[10px] cursor-pointer hover:text-red-marvel"
        onClick={(event) => handleClickShowDetails(event)}
      >
        {showDetails ? "Masquer les détails" : "En savoir plus"}
      </div>
      {showDetails && (
        <div
          style={{
            whiteSpace: "pre-line",
          }}
        >
          {details}
        </div>
      )}

      {/* Films */}
      <div className="">
        <b>Films: </b>
        <ul>
          {films.map((film) => (
            <li key={film}>{film}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
