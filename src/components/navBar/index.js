import { NavBarStyled } from "./styles";
import { useNavigate, useLocation } from "react-router-dom";

export const NavBar = () => {
  const navigation = useNavigate();
  const location = useLocation() 
  return (
    <NavBarStyled>
      <span>Star Wars Catalog</span>
      <ul>
          <li onClick={() => navigation("/")}>Home</li>
          <li onClick={() => navigation("/pilots")}>Pilots</li>
          <li onClick={() => navigation("/starships")}>Starships</li>
      </ul>
    </NavBarStyled>
  );
};
