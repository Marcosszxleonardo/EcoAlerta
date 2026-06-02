import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./TelaInicial.css";
import logoEco from "../../logo/logoeco.png";
import alerta1 from "../../logo/alerta1.png";
import alerta2 from "../../logo/alerta2.png";
import alerta3 from "../../logo/alerta3.png";

import {
    FaHome, FaBell, FaPhoneAlt, FaClipboardList, FaSignOutAlt,
    FaSearch, FaRegBell, FaUserCircle, FaArrowCircleUp,
    FaRegComment, FaExclamationCircle, FaTimes
} from "react-icons/fa";

// ... (mantenha os imports iguais)

export default function TelaInicial() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [usuario, setUsuario] = useState(null);

    // Estados exclusivos para o post fixo do João
    const [upCountJoao, setUpCountJoao] = useState(20);
    const [isUpvotedJoao, setIsUpvotedJoao] = useState(false);

    const handleUpvote = async (postId) => {
        try {
            const userLogged = JSON.parse(localStorage.getItem("usuarioLogado"));
            if (!userLogged) return;

            const response = await api.post(`/posts/${postId}/upvote`, {
                usuarioId: userLogged.id
            });

            console.log("Dados recebidos do Back:", response.data);

            setPosts(prevPosts =>
                prevPosts.map(p => {
                    if (p.id === postId) {
                        // Verifique se o nome do campo no console é 'upvotesCount'
                        return {
                            ...p,
                            upvotesCount: response.data.upvotescount,
                            isUpvoted: !p.isUpvoted
                        };
                    }
                    return p;
                })
            );
        } catch (error) {
            console.error("Erro ao atualizar upvote:", error);
        }
    };

    useEffect(() => {
        const userLogged = JSON.parse(localStorage.getItem("usuarioLogado"));
        if (!userLogged) {
            navigate("/");
            return;
        }
        setUsuario(userLogged);
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await api.get("/posts");
            setPosts(response.data);
        } catch (error) {
            console.error("Erro ao buscar posts:", error);
        }
    };

    // Função de clique específica para o João (Exemplo)
    const handleUpvoteJoao = () => {
        setIsUpvotedJoao(!isUpvotedJoao);
        setUpCountJoao(prev => isUpvotedJoao ? prev - 1 : prev + 1);
    };

    const inicialNome = usuario?.nomeUsuario ? usuario.nomeUsuario.charAt(0).toUpperCase() : "U";

    return (
        <div className="dashboard">
            {/* ... Sidebar igual ... */}
            <aside className="sidebar">
                <div>
                    <div className="logoArea"><img src={logoEco} alt="EcoAlerta" /></div>
                    <nav className="menu">
                        <Link to="/inicial" className="menuItem activeMenu"><FaHome /><span>Tela inicial</span></Link>
                        <Link to="/registro" className="menuItem"><FaBell /><span>Registrar alerta</span></Link>
                        <Link to="/TelefonesUteis" className="menuItem"><FaPhoneAlt /><span>Telefones úteis</span></Link>
                        <Link to="/meus-alertas" className="menuItem"><FaClipboardList /><span>Meus alertas</span></Link>
                    </nav>
                </div>
                <div className="bottomMenu">
                    <button className="sairBtn" onClick={() => { localStorage.clear(); navigate("/") }}>
                        <FaSignOutAlt /><span>Sair</span>
                    </button>
                </div>
            </aside>

            <main className="mainContent">
                <header className="topbar">
                    <div className="searchBar">
                        <FaSearch />
                        <input type="text" placeholder="Buscar alerta..." />
                    </div>
                    <div className="rightTop">
                        <FaRegBell />
                        <div className="avatar">{inicialNome}</div>
                    </div>
                </header>

                <div className="pageContent">
                    <section className="feed">

                        {/* ================= POST EXEMPLO (FIXO) ================= */}
                        {/* AQUI ESTAVA O ERRO: Substituí 'post.id' por 'handleUpvoteJoao' */}
                        <div className="alertCard examplePost">
                            <div className="userHeader">
                                <FaUserCircle className="userIcon" />
                                <div>
                                    <h3>João (Exemplo)</h3>
                                    <span>há 23 min · Vila Mariana, SP</span>
                                </div>
                            </div>
                            <p>Desde as 14h sem luz na Rua Domingos de Morais...</p>
                            <div className="gallery">
                                <img src={alerta1} alt="Alerta 1" />
                                <img src={alerta2} alt="Alerta 2" />
                                <img src={alerta3} alt="Alerta 3" />
                            </div>
                            <div className="actions">
                                <div className="upvoteContainer" onClick={handleUpvoteJoao}>
                                    <FaArrowCircleUp
                                        className={`actionIcon upvoteIcon ${isUpvotedJoao ? 'upvoted' : ''}`}
                                    />
                                    <span className="upvoteCount">{upCountJoao}</span>
                                </div>
                                <FaRegComment className="actionIcon commentIcon" />
                                <FaExclamationCircle className="actionIcon danger" />
                            </div>
                        </div>

                        <hr className="feedDivider" />
                        <br />
                        <h4 className="feedTitle">Alertas Recentes</h4>
                        <br />

                        {/* ================= LISTA DINÂMICA (DO BANCO) ================= */}
                        {posts.length === 0 ? (
                            <p className="emptyFeed">Nenhum alerta recente registrado.</p>
                        ) : (
                            posts.map(post => (
                                <div className="alertCard" key={post.id}>
                                    <div className="userHeader">
                                        <FaUserCircle className="userIcon" />
                                        <div>
                                            <h3>{post.nomeAutor || "Usuário Anônimo"}</h3>
                                            <span>{post.endereco ? `📍 ${post.endereco}` : "Localização não informada"}</span>
                                        </div>
                                    </div>

                                    <p className="postDescricao">{post.descricao}</p>

                                    <div className="actions">
                                        <div className="upvoteContainer" onClick={() => handleUpvote(post.id)}>
                                            <FaArrowCircleUp
                                                className={`actionIcon upvoteIcon ${post.isUpvoted ? 'upvoted' : ''}`}
                                            />
                                            <span className="upvoteCount">{post.upvotesCount || 0}</span>
                                        </div>
                                        <FaRegComment className="actionIcon commentIcon" />
                                        <FaExclamationCircle className="actionIcon danger" />
                                    </div>
                                </div>
                            ))
                        )}
                    </section>

                    <aside className="stats">
                        <div className="statBox">
                            <small>Total de Alertas</small>
                            <h2>{posts.length}</h2>
                            <span>Relatos Reais</span>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
}