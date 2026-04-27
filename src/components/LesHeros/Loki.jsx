import Superhero from "../Superhero/Superhero";

export default function Loki({heroPrefere, superHeroClique}){
    return(
        <Superhero
          name={"Loki"}
          description={
            " Loki Laufeyson, également connu sous le nom de Loki Odinson, est un personnage de fiction créé par Stan Lee, Larry Lieber et Jack Kirby,apparaissant pour la première fois dans Journey into Mystery #85 en octobre 1962. Originaire de Jötunheim en tant que fils du roi des géants des glaces Laufey, il est adopté et élevé à Asgard par Odin, ce qui en fait le frère adoptif de Thor."
          }
          photo={"./loki.webp"}
          details="Ce personnage est inspiré de son homologue de la mythologie nordique. Une première adaptation de Loki, différente de celle du personnage actuel, était apparue dans Venus (en) #6, publié par Timely Comics en août 1949.

Loki tient le rôle du pire ennemi de son demi-frère Thor. À l'origine un super-vilain, il est parfois dépeint comme un anti-héros. Dieu de la tromperie et manipulateur remarquable, c'est un puissant sorcier qui a été adopté par Odin, Loki appartenant à la race des géants des glaces de Jötunheim."
          estLePrefere={heroPrefere == "Loki"}
          superHeroClique={superHeroClique}
        />
    )
}