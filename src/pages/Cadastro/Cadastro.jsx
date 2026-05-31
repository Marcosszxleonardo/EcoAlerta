import "./Cadastro.css";
import logo from "../../logo/logoeco.png";

function Cadastro() {
  return (
    <div className="cadastro">
      <div className="cardCadastro">

        <div className="topo">
          <img src={logo} alt="EcoAlerta" />

          <div className="tituloCadastro">
            <h1>Cadastrar</h1>
          </div>

          <div></div>
        </div>

        <form className="formCadastro">

          <input
            type="text"
            placeholder="Nome de Usuário"
          />

          <input
            type="email"
            placeholder="Email"
          />

          <input
            type="password"
            placeholder="Senha"
          />

          <button type="submit">
            Criar Conta
          </button>

          <a href="/">
            Já possui uma conta? Entrar
          </a>

        </form>

      </div>
    </div>
  );
}

export default Cadastro;