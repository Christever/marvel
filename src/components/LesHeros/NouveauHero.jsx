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
  const sauvegarderHero = (e) => {
    e.preventDefault();
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
      <form className="border px-[15px] bg-red-marvel text-white rounded">
        <h3 className="text-center text-3xl font-semibold uppercase my-5">
          Crée ton superhero
        </h3>
        <div>
          <label htmlFor="photo" className="mb-10">
            Photo
          </label>
          <input
            type="text"
            className="input"
            name="photo"
            id="photo"
            ref={photo}
          />
        </div>
        <div>
          <label htmlFor="nom" className="label">
            Nom
          </label>
          <input type="text" name="nom" id="nom" className="input" ref={nom} />
        </div>
        <div>
          <label htmlFor="description" className="label">
            Description
          </label>
          <input
            className="input"
            type="text"
            name="description"
            id="description"
            ref={description}
          />
        </div>

        <div className="flex justify-end gap-2 mt-5">
          <Button click={(event) => sauvegarderHero(event)}>Sauvegarder</Button>
          <Button click={effacerHero}>Effacer</Button>
        </div>
      </form>
    </>
  );
}
