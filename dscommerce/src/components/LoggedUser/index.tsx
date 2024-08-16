
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ContextToken } from "../../utils/context-token";
import * as authService from "../../services/auth-service";

import "./styles.css";

export function LoggedUser() {
  const { contextTokenPayload ,setContextTokenPayload } = useContext(ContextToken);
  const navigate = useNavigate();


  function handleLogoutClick() {
    authService.logout();
    setContextTokenPayload(undefined);
    navigate("/login");
  }

  return (
      contextTokenPayload && authService.isAuthenticated() 
      ?
        <div className="dsc-logged-user">
          <p>{contextTokenPayload.user_name}</p>
          <span onClick={handleLogoutClick}>Sair</span>
        </div>
      :
        <Link to="/login">
          Entrar
        </Link>

  )
}