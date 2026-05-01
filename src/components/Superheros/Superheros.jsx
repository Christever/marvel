import Superhero from "../Superhero/Superhero";
import "./Superheros.css";
export default function Superheros(props) {
  return (
    <>
  <h2 className="text-3xl text-center uppercase font-semibold mt-3 text-white">Le top 3 des superheros</h2>
      <div className="superheros">{props.children}</div>
    </>
  );
}
