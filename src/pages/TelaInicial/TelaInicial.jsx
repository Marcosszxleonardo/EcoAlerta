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
    FaTimes,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useState } from "react";

export default function TelaInicial() {
    // Estados para Comentários
    const [showComments, setShowComments] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState([
        { user: "Maria Silva", time: "agora", text: "Que absurdo! Aqui em Moema também está sem luz há horas 😤" },
        { user: "Carlos Mendes", time: "5 min", text: "Alguém já conseguiu falar com a Enel? Eles não atendem." },
    ]);

    // Estados para Reportar
    const [showReport, setShowReport] = useState(false);
    const [reportReason, setReportReason] = useState("");
    const [reportDetails, setReportDetails] = useState("");

    const handleAddComment = () => {
        if (newComment.trim() === "") return;
        setComments([...comments, { user: "Você", time: "agora", text: newComment }]);
        setNewComment("");
    };

    const handleSubmitReport = () => {
        if (!reportReason) {
            alert("Por favor, selecione um motivo para a denúncia.");
            return;
        }
        alert(`✅ Denúncia enviada com sucesso!\nMotivo: ${reportReason}`);
        setShowReport(false);
        setReportReason("");
        setReportDetails("");
    };

    return (
        <div className="dashboard">
            {/* SIDEBAR */}
            <aside className="sidebar">
                <div>
                    <div className="logoArea">
                        <img src={logoEco} alt="EcoAlerta" />
                    </div>

                    <nav className="menu">
                        <Link to="/inicial" className="menuItem activeMenu">
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

            {/* MAIN */}
            <main className="mainContent">
                <header className="topbar">
                    <div className="searchBar">
                        <FaSearch />
                        <input type="text" placeholder="Buscar alerta ou localização..." />
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

                            <p>Desde as 14h sem luz na Rua Domingos de Morais entre a Av. Jabaquara e Rua Vergueiro. Semáforos apagados, comércios fechando. Já liguei pra ENEL mas disseram que não há previsão de retorno.</p>

                            <div className="gallery">
                                <img src={alerta1} alt="Alerta 1" />
                                <img src={alerta2} alt="Alerta 2" />
                                <img src={alerta3} alt="Alerta 3" />
                            </div>

                            <div className="actions">
                                <FaArrowCircleUp className="actionIcon" />
                                <FaRegComment 
                                    className="actionIcon commentIcon" 
                                    onClick={() => setShowComments(true)} 
                                />
                                <FaExclamationCircle 
                                    className="actionIcon danger" 
                                    onClick={() => setShowReport(true)} 
                                />
                            </div>
                        </div>
                    </section>

                    <aside className="stats">
                        <div className="statBox">
                            <small>Últimas 24h</small>
                            <h2>8</h2>
                            <span>Alertas</span>
                        </div>
                    </aside>
                </div>
            </main>

            {/* ==================== MODAL COMENTÁRIOS ==================== */}
            {showComments && (
                <div className="commentsModalOverlay" onClick={() => setShowComments(false)}>
                    <div className="commentsModal" onClick={e => e.stopPropagation()}>
                        {/* ... (seu modal de comentários anterior) ... */}
                    </div>
                </div>
            )}

            {/* ==================== MODAL REPORTAR ==================== */}
            {showReport && (
                <div className="reportModalOverlay" onClick={() => setShowReport(false)}>
                    <div className="reportModal" onClick={e => e.stopPropagation()}>
                        <button className="closeModal" onClick={() => setShowReport(false)}>
                            <FaTimes />
                        </button>

                        <div className="reportContent">
                            <h2>Denunciar Publicação</h2>
                            <p className="reportSubtitle">Por favor, informe o motivo da denúncia:</p>

                            <div className="reportOptions">
                                {["Conteúdo impróprio", "Informação falsa", "Spam", "Discurso de ódio", "Violência", "Outro"].map((reason) => (
                                    <label key={reason} className="reportOption">
                                        <input
                                            type="radio"
                                            name="reportReason"
                                            value={reason}
                                            checked={reportReason === reason}
                                            onChange={(e) => setReportReason(e.target.value)}
                                        />
                                        <span>{reason}</span>
                                    </label>
                                ))}
                            </div>

                            <textarea
                                placeholder="Descreva o problema com mais detalhes (opcional)..."
                                value={reportDetails}
                                onChange={(e) => setReportDetails(e.target.value)}
                                rows="4"
                            />

                            <div className="reportActions">
                                <button className="cancelBtn" onClick={() => setShowReport(false)}>
                                    Cancelar
                                </button>
                                <button className="submitReportBtn" onClick={handleSubmitReport}>
                                    Enviar Denúncia
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}