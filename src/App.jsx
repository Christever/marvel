import { useEffect, useState } from "react";
import "./App.css";

import Superhero from "./components/Superhero/Superhero";
import Superheros from "./components/Superheros/Superheros";
import Loki from "./components/LesHeros/Loki";
import CaptainAmerica from "./components/LesHeros/CaptainAmerica";
import Ironman from "./components/LesHeros/Ironman";
import NouveauHero from "./components/LesHeros/NouveauHero";
export default function App() {
  // State
  const [heroPrefere, setHeroPrefere] = useState("");

  // Fonctions
  const superHeroClique = (nom) => {
    setHeroPrefere(nom);
  };

  return (
    <main>
      <h1>Marvel</h1>
      <Superheros>
        {/* Super hero 1 */}
        <Ironman heroPrefere={heroPrefere} superHeroClique={superHeroClique} />

        {/* Super hero 2 */}
        <CaptainAmerica
          heroPrefere={heroPrefere}
          superHeroClique={superHeroClique}
        />

        {/* Super hero 3 */}
        <Loki heroPrefere={heroPrefere} superHeroClique={superHeroClique} />

        {/* Nouveau superhéro */}
        <NouveauHero />
        
      </Superheros>
    </main>
  );
}
