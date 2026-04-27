import { useEffect, useRef, useState } from "react";
import Superhero from "../Superhero/Superhero";
import Button from "../Button/Button";

export default function NouveauHero() {
  // State
  const [nouveauHero, setNouveauHero] = useState({
    nom: "",
    description: "",
    photo: "",
  });

  // Variables
  const nom = useRef();
  const description = useRef();
  const photo = useRef();

  // Cycle
  useEffect(() => {
    photo.current.focus();
    nom.current.value = "";
    description.current.value = "";
    photo.current.value = "";
  }, [nouveauHero.nom]);

  // Fonctions
  const sauvegarderHero = () => {
    setNouveauHero((ancienHero) => ({
      ...ancienHero,
      nom: nom.current.value,
      description: description.current.value,
      photo: photo.current.value,
    }));
  };
  const effacerHero = () => {
    setNouveauHero({ nom: "", description: "", photo: "" });
    nom.current.value = "";
    description.current.value = "";
    photo.current.value = "";
  };

  return (
    <>
      <Superhero
        name={nouveauHero.nom != "" ? nouveauHero.nom : undefined}
        description={
          nouveauHero.description != "" ? nouveauHero.description : undefined
        }
        photo={nouveauHero.photo != "" ? nouveauHero.photo : undefined}
      />
      {/* Parametrage du nouveau Superhéro */}
      <div
        style={{
          border: "1px black solid",
          padding: "15px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Crée ton superhero</h3>
        <div style={{ marginTop: 10 }}>
          <label htmlFor="photo">Photo</label>
          <input
            type="text"
            className="input"
            name="photo"
            id="photo"
            ref={photo}
          />
        </div>
        <div style={{ marginTop: 15 }}>
          <label htmlFor="nom">Nom</label>
          <input type="text" name="nom" id="nom" className="input" ref={nom} />
        </div>
        <div style={{ marginTop: "15px" }}>
          <label htmlFor="description">Description</label>
          <input
            className="input"
            type="text"
            name="description"
            id="description"
            ref={description}
          />
        </div>

        <div
          style={{
            marginTop: 10,
            display: "flex",
            gap: 5,
            justifyContent: "end",
          }}
        >
          <Button click={sauvegarderHero}>Sauvegarder</Button>
          <Button click={effacerHero}>Effacer</Button>
        </div>
      </div>
    </>
  );
}
