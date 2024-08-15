import { Link } from "react-router-dom";

import * as authService from "../../services/auth-service";
import CartIcon from "../CartIcon";
import iconAdmin from "../../assets/images/admin.svg";

import "./styles.css";

export default function HeaderClient() {
  return (
    <>
      <header className="dsc-header-client">
        <nav className="dsc-container">
          <Link to="/">
            <h1>DSCommerce</h1>
          </Link>
          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              
              {authService.hasAnyRoles(["ROLE_ADMIN"]) && (
                <Link to="/admin">
                  <div className="dsc-menu-item">
                    <img src={iconAdmin} alt="Admin" />
                  </div>
                </Link>
              )}

              <Link to="/cart">
                <div className="dsc-menu-item">
                  <CartIcon />
                </div>
              </Link>

              <Link to="/login">Entrar</Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
