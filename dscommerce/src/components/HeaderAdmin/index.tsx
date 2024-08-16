
import { LoggedUser } from "../LoggedUser";

import productImg from "../../assets/images/products.svg";
import homeImg from "../../assets/images/home.svg";

import "./styles.css";
import { NavLink } from "react-router-dom";

export default function HeaderAdmin() {
  return (
      <header className="dsc-header-admin">
        <nav className="dsc-container">
          <h1>DSCAdmin</h1>

          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">

              <NavLink to="/admin">
                <div className="dsc-menu-item">
                  <img src={homeImg} alt="home" />
                  <p>Dashboard</p>
                </div>
              </NavLink>

              <NavLink to="/admin/products" >
                <div className="dsc-menu-item">
                  <img src={productImg} alt="produto" />
                  <p>Produtos</p>
                </div>
              </NavLink>
            </div>
            
            <LoggedUser />
          </div>
        </nav>
      </header>
  );
}
