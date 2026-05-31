import "./Home.css";
import logo from "../../logo/logoeco.png";

function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="logoArea">
          <img src={logo} alt="EcoAlerta" />
        </div>

        <div className="headerButtons">
          <button className="btn">Entrar</button>
          <button className="btn">Cadastrar</button>
          <button className="btn">Anônimo</button>
        </div>
      </header>

      <main className="content">
        <h1>Bem-vindo ao EcoAlerta</h1>

        <div className="divider">
          <span>🌱</span>
        </div>

        <p className="subtitle">
         <strong>Conectando pessoas em tempo real para informar e prevenir desastres urbanos.</strong> 
        </p>

        <p>
          O EcoAlerta é uma plataforma colaborativa desenvolvida com React e Vite
          para facilitar o compartilhamento rápido de ocorrências urbanas,
          ajudando comunidades a se manterem informadas e seguras.
        </p>

        <h3>🎯 Objetivo do Projeto</h3>

        <p>
          Propor uma solução digital colaborativa para auxiliar na comunicação
          rápida de desastres urbanos e problemas que impactam a comunidade.
        </p>
      </main>
    </div>
  );
}

export default Home;