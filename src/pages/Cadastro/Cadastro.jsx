import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../../services/api"; 
import "./Cadastro.css";
import logo from "../../logo/logoeco.png";

export default function Cadastro() {
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    const userData = {
      nomeUsuario,
      email,
      senha
    };

    try {
      const response = await api.post("/auth/register", userData);
      
      if (response.status === 201 || response.status === 200) {
        alert("Conta criada com sucesso!");
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao criar conta. Verifique os dados ou tente novamente.");
    }
  };

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

        <form className="formCadastro" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Nome de Usuário"
            value={nomeUsuario}
            onChange={(e) => setNomeUsuario(e.target.value)}
            required
          />

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
            Criar Conta
          </button>

          <a href="/">
            Já possui uma conta? Clique Entrar
          </a>
        </form>
      </div>
    </div>
  );
}