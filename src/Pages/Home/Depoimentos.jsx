import style from './Depoimentos.module.css';

import React from 'react';

import eleanor from '../../Images/eleanor_teste.jpg';
import seta_esquerda from '../../Images/Seta esquerda.png';
import seta_direita from '../../Images/Seta direita.png';

function Depoimentos() {
    return (
        <section id={style.depoimentos}>
            <h1>Depoimentos</h1>
            <div id={style.box}>
                <div id={style.button_left}>
                    <img src={seta_esquerda} alt="clique para ver o depoimento à esquerda" />
                </div>
                <div id={style.image_name}>
                    <div>
                        <img src={eleanor} alt="eleanor" />
                        <h3>Eleanor Marques</h3>
                    </div>
                </div>
                <div id={style.text}>
                    <p>Excelente! Graças ao Pecto, a minha filha, que tem dificuldades para falar, está conseguindo interagir-se melhor com outras pessoas! Estou bastante feliz por ela.</p>
                </div>
                <div id={style.button_right}>
                    <img src={seta_direita} alt="clique para ver o depoimento à direita" />
                </div>
            </div>
        </section>
    )
}

export default Depoimentos