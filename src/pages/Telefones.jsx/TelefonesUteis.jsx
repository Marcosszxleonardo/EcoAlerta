import styles from "./TelefonesUteis.module.css";

import logoEco from "../../logo/logoeco.png";

import {
    FaHome,
    FaBell,
    FaPhoneAlt,
    FaClipboardList,
    FaSignOutAlt,
    FaSearch,
    FaRegBell,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export default function TelefonesUteis() {
    return (
        <div className={styles.dashboard}>

            {/* SIDEBAR */}
            <aside className={styles.sidebar}>

                <div>

                    <div className={styles.logoArea}>
                        <img src={logoEco} alt="EcoAlerta" />
                    </div>

                    <nav className={styles.menu}>

                        <Link
                            to="/inicial"
                            className={styles.menuItem}
                        >
                            <FaHome />
                            <span>Tela inicial</span>
                        </Link>

                        <Link
                            to="/registro"
                            className={styles.menuItem}
                        >
                            <FaBell />
                            <span>Registrar alerta</span>
                        </Link>

                        <Link
                            to="/telefones"
                            className={`${styles.menuItem} ${styles.activeMenu}`}
                        >
                            <FaPhoneAlt />
                            <span>Telefones úteis</span>
                        </Link>

                        <button className={styles.menuItem}>
                            <FaClipboardList />
                            <span>Meus alertas</span>
                        </button>

                    </nav>

                </div>

                <div className={styles.bottomMenu}>

                    <button className={styles.sairBtn}>
                        <FaSignOutAlt />
                        <span>Sair</span>
                    </button>

                </div>

            </aside>

            {/* CONTEÚDO */}
            <main className={styles.mainContent}>

                {/* TOPO */}
                <header className={styles.topbar}>

                    <div className={styles.searchBar}>

                        <FaSearch />

                        <input
                            type="text"
                            placeholder="Buscar alerta ou localização..."
                        />

                    </div>

                    <div className={styles.rightTop}>

                        <FaRegBell />

                        <div className={styles.avatar}>
                            M
                        </div>

                    </div>

                </header>

                {/* CARD */}
                <div className={styles.telefonesContainer}>

                    <div className={styles.telefonesCard}>

                        <div className={styles.telefonesTitulo}>

                            <FaPhoneAlt />

                            <h1>Telefones úteis</h1>

                        </div>

                        <div className={styles.linha}></div>

                        <div className={styles.telefoneItem}>
                            Defesa Civil — 199
                        </div>

                        <div className={styles.telefoneItem}>
                            Polícia Militar — 190
                        </div>

                        <div className={styles.telefoneItem}>
                            Corpo de Bombeiros — 193
                        </div>

                        <div className={styles.telefoneItem}>
                            SAMU — 192
                        </div>

                    </div>

                </div>

            </main>

        </div>
    );
}
