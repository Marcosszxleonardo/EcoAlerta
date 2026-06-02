import { useState } from "react";
import "./Login.css";
import logo from "../../logo/logoeco.png";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const loginData = {
      email,
      senha
    };

    try {
      const response = await api.post("/auth/login", loginData);

      if (response.status === 200) {
        localStorage.setItem("usuarioLogado", JSON.stringify(response.data));
        
        alert(`Bem-vindo de volta, ${response.data.nomeUsuario}!`);
        navigate("/inicial");
      }
    } catch (error) {
      console.error("Erro ao entrar:", error);
      alert("Email ou senha incorretos.");
    }
  };

  return (
    <div className="login">
      <div className="cardLogin">
        <div className="topo">
          <img src={logo} alt="EcoAlerta" />
          <div className="tituloLogin">
            <h1>Entrar</h1>
          </div>
          <div></div>
        </div>

        <form className="formLogin" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">
            Entrar
          </button>

          <Link to="/cadastro">
            Não possui uma conta? Cadastre-se
          </Link>
        </form>
      </div>
    </div>
  );
}