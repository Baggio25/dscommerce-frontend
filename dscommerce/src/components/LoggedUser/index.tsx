
import { Link } from "react-router-dom";

import * as authService from "../../services/auth-service";

import "./styles.css";

export function LoggedUser() {


  return (
      authService.isAuthenticated() 
      ?
        <div className="dsc-logged-user">
          <p>Olá Maria Silva</p>
          <a href="#">Sair</a>
        </div>
      :
        <Link to="/login">Entrar</Link>

  )
}