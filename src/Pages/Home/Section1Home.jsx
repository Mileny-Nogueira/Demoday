import style from './Section1Home.module.css';

import celular1 from '../../Images/celular.png';
import celular2 from '../../Images/celular2.png';
import linhas from '../../Images/vetorLinhaDecorativa.png';

function Section1Home() {
    return (
        <section id={style.section1Home}>
            <div id={style.home_div}>
                <div className={style.main_div}>
                    <img src={celular1} alt="Imagem que demonstra a nossa ferramenta" id={style.img_celular1} />
                    <img src={celular2} alt="Imagem que demonstra a nossa ferramenta" id={style.img_celular2} />
                </div>
                <div className={style.main_div}>
                    <img src={linhas} alt="Linha pontilhada decorativa" />
                    <h1>Comunicação & Autonomia</h1>
                    <p>Ferramenta que auxilia pessoas com deficiência a se expressarem de forma mais independente. Quem quer falar sabe o que usar: Pecto! </p>
                    <button>Comece a explorar</button>
                </div>
            </div>
        </section>
    )
}

export default Section1Home