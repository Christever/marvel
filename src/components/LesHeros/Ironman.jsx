import Superhero from "../Superhero/Superhero";

export default function Ironman({heroPrefere, superHeroClique}) {
  return (
    <Superhero
      name={"Iron Man"}
      description={
        "Tony Stark, alias Iron Man, est un super-héros de Marvel Comics créé par Stan Lee, Jack Kirby, Larry Lieber et Don Heck, apparu pour la première fois en mars 1963 dans Tales of Suspense #39. Il est incarné au cinémapar Robert Downey Jr. dans l'univers cinématographique Marvel (MCU)."
      }
      films={["Avenger", "Marvel 1", "Marvel 2"]}
      photo="./ironman.webp"
      details="Au début de sa carrière de super-héros, Tony Stark avait pour principale occupation de lutter contre les communistes dans le contexte de la guerre froide, de manière beaucoup plus systématique que les autres personnages de Marvel Comics. Ce cadre historique a progressivement disparu, au profit d'aventures de science-fiction. Le contexte de la série Iron Man a ensuite continué d'évoluer avec les années, le personnage affrontant en majorité des menaces de type technologique."
      estLePrefere={heroPrefere == "Iron Man"}
      superHeroClique={superHeroClique}
    />
  );
}
