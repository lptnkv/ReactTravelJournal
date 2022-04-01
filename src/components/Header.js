import react from "react";
import logo from "../img/planet.svg";

export default function Header() {
  return (
    <header>
      <img src={logo} />
      <p>my travel journal</p>
    </header>
  );
}
