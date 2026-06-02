import "./Login.css";
import logo from "../../logo/logoeco.png";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // futuramente você valida email/senha aqui
    navigate("/inicial");
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
          />

          <input
            type="password"
            placeholder="Senha"
          />

          <button type="submit">
            Entrar
          </button>

          <Link to="#">
            Esqueceu sua senha?
          </Link>

          <Link to="/cadastro">
            Não possui uma conta? Cadastre-se
          </Link>

        </form>

      </div>
    </div>
  );
}
