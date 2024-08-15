/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CredentialsDTO } from "../../../models/auth";
import { ContextToken } from "../../../utils/context-token";

import * as authService from "../../../services/auth-service";
import "./styles.css";

export default function Login() {
  const { setContextTokenPayload } = useContext(ContextToken);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<CredentialsDTO>({
    username: "",
    password: "",
  });

  function handleSubmit(event: any) {
    event.preventDefault();
    authService.loginRequest(formData)
      .then(response => {
        authService.saveAccessToken(response.data.access_token);  
        setContextTokenPayload(authService.getAccessTokenPayload());
        navigate("/cart");
      })
      .catch(error => {
        console.log("Erro no login ", error)
      })
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
