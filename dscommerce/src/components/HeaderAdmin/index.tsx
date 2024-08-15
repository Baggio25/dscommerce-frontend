
import { LoggedUser } from "../LoggedUser";

import productImg from "../../assets/images/products.svg";
import homeImg from "../../assets/images/home.svg";

import "./styles.css";

export default function HeaderAdmin() {
  return (
      <header className="dsc-header-admin">
        <nav className="dsc-container">
          <h1>DSCAdmin</h1>

          <div className="dsc-navbar-right">
            <div className="dsc-menu-items-container">
              <div className="dsc-menu-item">
                <img src={homeImg} alt="home" />
              </div>
              <div className="dsc-menu-item">
                <img src={productImg} alt="produto" />
              </div>
            </div>
            
            <LoggedUser />
          </div>
        </nav>
      </header>
  );
}
