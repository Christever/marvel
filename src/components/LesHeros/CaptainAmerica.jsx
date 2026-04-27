import Superhero from "../Superhero/Superhero"

export default function CaptainAmerica({heroPrefere, superHeroClique}){
    return (
               <Superhero
                  name={"Captain America"}
                  description={
                    "Steve Rogers, alias Captain America, est un super-héros créé par JoeSimon et Jack Kirby pour Timely Comics (futur Marvel Comics), apparaissant pour la première fois en 1941. Initialement un jeunehomme frêle et malade, il devient le premier Super-Soldat après avoir reçu expérimentalement le sérum de super-soldat développé par le Dr Abraham Erskine durant la Seconde Guerre mondiale, le transformant en un être au summum du potentiel humain."
                  }
                  photo={"./captainamerica.webp"}
                  details="Conçu à l'origine comme une figure patriotique américaine en réaction au régime nazi, le personnage devient actif avant même l'entrée en guerre officielle des États-Unis dans la Seconde Guerre mondiale, en décembre 1941. Dès le début de sa publication, il est perçu comme le porte-drapeau des valeurs démocratiques de son pays et comme un défenseur du monde libre contre les totalitarismes, notamment le Troisième Reich[4].
        
        Doté d'une condition physique au summum du potentiel humain, Captain America est un combattant hors pair, un chef-né et un stratège militaire accompli. Il porte un costume reconnaissable entre tous, inspiré du drapeau américain et est équipé d'un bouclier quasi indestructible, composé d'un alliage d'acier et du fictif vibranium, qu'il utilise comme une protection ainsi que comme une arme."
                  estLePrefere={heroPrefere == "Captain America"}
                  superHeroClique={superHeroClique}
                />
    )
}