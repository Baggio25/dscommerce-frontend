/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

import { loginRequest } from "../../../services/auth-service";
import { CredentialsDTO } from "../../../models/auth";

import "./styles.css";

export default function Login() {
  const [formData, setFormData] = useState<CredentialsDTO>({
    username: "",
    password: "",
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    loginRequest(formData);
  }

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <main>
      <section className="dsc-container dsc-login-section">
        <div className="dsc-login-form-container">
          <form className="dsc-card dsc-form" onSubmit={handleSubmit}>
            <h2>LOGIN</h2>

            <div className="dsc-form-controls-container">
              <div>
                <input
                  className="dsc-form-control"
                  type="text"
                  placeholder="E-mail"
                  name="username"
                  autoFocus
                  value={formData.username}
                  onChange={handleInputChange}
                  />
              </div>
              <div>
                <input
                  className="dsc-form-control"
                  type="password"
                  placeholder="Senha"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="dsc-mt-20 dsc-login-form-buttons">
              <button type="submit" className="dsc-btn dsc-btn-blue">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
