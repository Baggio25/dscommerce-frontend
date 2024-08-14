
import { useEffect, useState } from "react";

import { UserDTO } from "../../../models/user";

import * as userService from "../../../services/user-service";

import "./styles.css";

export default function Dashboard() {

  const [user, setUser] = useState<UserDTO>();

  useEffect(() => {
    userService.findMe()
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log("Erro de busca do usuários - ", error);
      });
  }, []);

  return (
    <main>
      <section className="dsc-container dsc-admin-section">
        <h2 className="dsc-section-title dsc-mb-20">Dashboard</h2>
        <h4 className="dsc-section-subtitle dsc-mb-20">Bem Vindo - {user?.name}</h4>
      </section>
    </main>
  );
}
