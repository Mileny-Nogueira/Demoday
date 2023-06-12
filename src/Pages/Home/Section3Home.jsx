import style from './Section3Home.module.css';

import cartas from '../../Images/Cartas_Home.png'
import balao2 from '../../Images/Balãozinho2_Home.png';
import card_comunicacao from '../../Images/Card_Comunicação_Home.png';
import card_acessibilidade from '../../Images/Card_Acessibilidade_Home.png';
import menina_mae from '../../Images/Menina_Mãe_Home.png';

function Section3Home() {
    return (
        <section id={style.section3Home}>
            <div id={style.section3Home_topo}>
                <img src={cartas} alt="cartas da Pecto" id={style.cartas_home} />
                <h1>Comunicação humanizada e acessível</h1>
                <img src={balao2} alt="balão de comunicação" id={style.balao2} />
            </div>
            <div id={style.section3Home_inferior}>
                <div id={style.part1}>
                    <div>
                        <img src={card_comunicacao} alt="Card de comunicação humanizada" />
                        <p>Comunique-se por cards humanizados</p>
                    </div>
                    <div>
                        <img src={card_acessibilidade} alt="Card de 100% de acessibilidade" />
                        <p>Plataforma <span>100%</span> acessível</p>
                    </div>
                </div>
                <div id={style.part2}>
                    <img src={menina_mae} alt="uma criança com a sua mãe desmonstrando o app" />
                </div>
            </div>
        </section>
    )
}

export default Section3Home