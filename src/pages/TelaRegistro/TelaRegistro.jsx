import "./TelaRegistro.css";
import logoEco from "../../logo/logoeco.png";
import {
    FaHome, FaBell, FaPhoneAlt, FaClipboardList, FaSignOutAlt,
    FaSearch, FaRegBell, FaUserCircle, FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";

export default function TelaRegistro() {
    const navigate = useNavigate();
    const [descricao, setDescricao] = useState("");
    const [localizacao, setLocalizacao] = useState(null);
    const [usuario, setUsuario] = useState(null);
    const [enviando, setEnviando] = useState(false);

    useEffect(() => {
        const userLogged = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (!userLogged) {
            navigate("/");
            return;
        }
        setUsuario(userLogged);
    }, [navigate]);

    async function pegarLocalizacao() {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
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
                    console.error("Erro ao buscar endereço", erro);
                }
            },
            (erro) => {
                alert("Erro ao pegar localização. Verifique as permissões do navegador.");
                console.log(erro);
            }
        );
    }

    const handleEnviar = async () => {
        if (!descricao.trim()) {
            alert("Por favor, descreva o que está acontecendo.");
            return;
        }

        setEnviando(true);
        try {
            const payload = {
                descricao: descricao,
                endereco: localizacao?.endereco || "Localização não informada",
                latitude: localizacao?.latitude || 0,
                longitude: localizacao?.longitude || 0,
                usuarioId: usuario.id 
            };

            await api.post("/posts", payload);
            alert("Alerta registrado com sucesso!");
            navigate("/inicial");
        } catch (error) {
            console.error("Erro ao enviar post:", error);
            alert("Falha ao registrar alerta. Tente novamente.");
        } finally {
            setEnviando(false);
        }
    };

    const inicialNome = usuario?.nomeUsuario ? usuario.nomeUsuario.charAt(0).toUpperCase() : "U";

    return (
        <div className="dashboard">
            <aside className="sidebar">
                <div>
                    <div className="logoArea"><img src={logoEco} alt="EcoAlerta" /></div>
                    <nav className="menu">
                        <Link to="/inicial" className="menuItem"><FaHome /><span>Tela inicial</span></Link>
                        <Link to="/registro" className="menuItem active"><FaBell /><span>Registrar alerta</span></Link>
                        <Link to="/TelefonesUteis" className="menuItem"><FaPhoneAlt /><span>Telefones úteis</span></Link>
                        <button className="menuItem"><FaClipboardList /><span>Meus Alertas</span></button>
                    </nav>
                </div>
                <div className="bottomMenu">
                    <button className="sairBtn" onClick={() => {localStorage.clear(); navigate("/")}}>
                        <FaSignOutAlt /><span>Sair</span>
                    </button>
                </div>
            </aside>

            <main className="mainContent">
                <header className="topbar">
                    <div className="searchBar">
                        <FaSearch />
                        <input type="text" placeholder="Buscar alerta ou localização..." />
                    </div>
                    <div className="rightTop">
                        <FaRegBell />
                        <div className="avatar">{inicialNome}</div>
                    </div>
                </header>

                <div className="registroContainer">
                    <div className="registroCard">
                        <div className="postHeader">
                            <div className="userInfo">
                                <FaUserCircle className="userIcon" />
                                <div>
                                    <h2>{usuario?.nomeUsuario || "Carregando..."}</h2>
                                    <p>Relate um problema urbano agora.</p>
                                </div>
                            </div>
                            <button 
                                className="enviarBtn" 
                                onClick={handleEnviar}
                                disabled={enviando}
                            >
                                {enviando ? "Enviando..." : "Enviar"}
                            </button>
                        </div>

                        <textarea
                            maxLength="500"
                            placeholder="Descreva o que está acontecendo..."
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        ></textarea>
                        <span className="contador">{descricao.length}/500</span>

                        <div className="linha"></div>

                        <div className="opcoes">
                            <div className={`opcaoCard fullWidth ${localizacao ? 'activeLoc' : ''}`} onClick={pegarLocalizacao}>
                                <div className="iconeBox">
                                    <FaMapMarkerAlt />
                                </div>
                                <div className="textosOpcao">
                                    <h3>{localizacao ? "Localização Fixada" : "Localização em tempo real"}</h3>
                                    <p>{localizacao ? localizacao.endereco : "Clique para usar sua localização atual no alerta."}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}