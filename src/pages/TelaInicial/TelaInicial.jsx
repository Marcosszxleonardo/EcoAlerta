import "./TelaInicial.css";
import logoEco from "../../logo/logoeco.png";
import alerta1 from "../../logo/alerta1.png";
import alerta2 from "../../logo/alerta2.png";
import alerta3 from "../../logo/alerta3.png";

import {
    FaHome,
    FaBell,
    FaPhoneAlt,
    FaClipboardList,
    FaSignOutAlt,
    FaSearch,
    FaRegBell,
    FaUserCircle,
    FaArrowCircleUp,
    FaRegComment,
    FaExclamationCircle,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function TelaInicial() {
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

                        <Link to="/registro" className="menuItem">
                            <FaBell />
                            <span>Registrar alerta</span>
                        </Link>

                        <button className="menuItem">
                            <FaPhoneAlt />
                            <span>Telefones úteis</span>
                        </button>

                        <button className="menuItem">
                            <FaClipboardList />
                            <span>Meus alertas</span>
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

                <div className="pageContent">

                    <section className="feed">

                        <div className="alertCard">

                            <div className="userHeader">
                                <FaUserCircle className="userIcon" />

                                <div>
                                    <h3>João</h3>
                                    <span>há 23 min · Vila Mariana, SP</span>
                                </div>
                            </div>

                            <p>
                                Desde as 14h sem luz na Rua Domingos de Morais.
                                Semáforos apagados e comércios fechando.
                            </p>

                            <div className="gallery">
                                <img src={alerta1} alt="Alerta 1" />
                                <img src={alerta2} alt="Alerta 2" />
                                <img src={alerta3} alt="Alerta 3" />
                            </div>

                            <div className="actions">
                                <FaArrowCircleUp />
                                <FaRegComment />
                                <FaExclamationCircle className="danger" />
                            </div>

                        </div>

                    </section>

                    <aside className="stats">

                        <div className="statBox">
                            <small>Últimas 24h</small>
                            <h2>8</h2>
                            <span>Alertas</span>
                        </div>

                        <div className="statBox">
                            <small>Últimos 14 dias</small>
                            <h2>12</h2>
                            <span>Resolvidos</span>
                        </div>

                        <div className="statBox">
                            <small>Regiões críticas</small>
                            <h2>4</h2>
                            <span>Hoje</span>
                        </div>

                    </aside>

                </div>

            </main>

        </div>
    );
}

