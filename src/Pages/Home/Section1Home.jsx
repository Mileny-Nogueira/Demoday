import { Nav } from 'react-bootstrap'
import style from './Section1Home.module.css';

import menina1 from '../../Images/Mulher_Tablet_Home.png';
import balao1 from '../../Images/Balãozinho1_Home.png';

function Section1Home() {
    return (
        <section id={style.section1Home}>
            <div id={style.home_div}>
                <div className={style.main_div}>
                    <img src={menina1} alt="Imagem de uma mulher demostrando a nossa plataforma" />
                </div>
                <div className={style.main_div}>
                    <div>
                        <h1>Comunicação & Autonomia</h1>
                        <img src={balao1} alt="balão de comunicação" />
                    </div>
                    <p>Ferramenta que auxilia pessoas com deficiência a se expressarem de forma mais independente. Quem quer falar sabe o que usar: Pecto! </p>
                    <Nav.Link href='/Demo' style={{ textDecoration: 'none', cursor: 'default' }}><button>Comece a explorar</button></Nav.Link>
                </div>
            </div>
        </section>
    )
}

export default Section1Home