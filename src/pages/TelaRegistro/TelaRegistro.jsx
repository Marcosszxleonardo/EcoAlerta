import "./TelaRegistro.css";
import logoEco from "../../logo/logoeco.png";

import {
  FaHome,
  FaBell,
  FaPhoneAlt,
  FaClipboardList,
  FaSignOutAlt,
  FaSearch,
  FaRegBell,
  FaUserCircle,
  FaMapMarkerAlt,
  FaUpload,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function TelaRegistro() {
  const [localizacao, setLocalizacao] = useState(null);

  async function pegarLocalizacao() {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
          const resposta = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );

          const dados = await resposta.json();

          setLocalizacao({
            latitude,
            longitude,
            endereco: dados.display_name,
          });

        } catch (erro) {
          console.log("Erro ao buscar endereço", erro);
        }
      },
      (erro) => {
        alert("Erro ao pegar localização");
        console.log(erro);
      }
    );
  }

  return (
    <div className="dashboard">

      <aside className="sidebar">

        <div>
          <div className="logoArea">
            <img src={logoEco} alt="EcoAlerta" />
          </div>

          <nav className="menu">

            <Link to="/inicial" className="menuItem">
              <FaHome />
              <span>Tela inicial</span>
            </Link>

            <Link to="/registro" className="menuItem active">
              <FaBell />
              <span>Registrar alerta</span>
            </Link>

            <Link to="/TelefonesUteis" className="menuItem">
              <FaPhoneAlt />
              <span>Telefones úteis</span>
            </Link>

            <button className="menuItem">
              <FaClipboardList />
              <span>Meus Alertas</span>
            </button>

          </nav>
        </div>

        <div className="bottomMenu">
          <button className="sairBtn">
            <FaSignOutAlt />
            <span>Sair</span>
          </button>
        </div>

      </aside>

      <main className="mainContent">

        <header className="topbar">

          <div className="searchBar">
            <FaSearch />
            <input
              type="text"
              placeholder="Buscar alerta ou localização..."
            />
          </div>

          <div className="rightTop">
            <FaRegBell />
            <div className="avatar">M</div>
          </div>

        </header>

        <div className="registroContainer">

          <div className="registroCard">

            <div className="userInfo">

              <FaUserCircle className="userIcon" />

              <div>
                <h2>João</h2>
                <p>
                  Adicione uma descrição do desastre urbano para o seu post.
                </p>
              </div>


              <button>
                Enviar
              </button>


            </div>

            <textarea
              maxLength="500"
              placeholder="Descreva o que está acontecendo..."
            ></textarea>

            <span className="contador">0/500</span>

            <div className="linha"></div>

            <div className="opcoes">

              <div className="opcaoCard" onClick={pegarLocalizacao}>

                <div className="iconeBox">
                  <FaMapMarkerAlt />
                </div>

                {localizacao && (
                  <div className="localizacaoInfo">
                    <p>{localizacao.endereco}</p>
                  </div>
                )}


                <h3>Localização em tempo real</h3>

                <p>
                  Use sua localização atual para marcar o alerta no mapa.
                </p>

              </div>

              <div className="opcaoCard">

                <div className="iconeBox">
                  <FaUpload />
                </div>

                <h3>Upload de imagem</h3>

                <p>
                  Adicione fotos para ajudar a demonstrar a situação.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

