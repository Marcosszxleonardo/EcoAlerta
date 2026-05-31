import "./Login.css";
import logo from "../../logo/logoeco.png";
import { Link } from "react-router-dom";

function Login() {
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

        <form className="formLogin">

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

export default Login;