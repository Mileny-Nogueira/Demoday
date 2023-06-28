import style from './Depoimentos.module.css';

import React, { useState } from 'react';

import eleanor from '../../Images/eleanor_teste.jpg';
import seta_esquerda from '../../Images/Seta esquerda.png';
import seta_direita from '../../Images/Seta direita.png';

function Depoimentos() {

    //Código para tornar o carrossel funcional

    const [posicao, setPosicao] = useState(0);

    const handleClickLeft = () => {
        if (posicao > 0) {
            setPosicao(posicao - 1);
        } else {
            setPosicao(0);
        }
    }

    const handleClickRight = () => {
        if (posicao < 3) {
            setPosicao(posicao + 1);
        } else {
            setPosicao(0);
        }
    }

    //Props dos Depoimentos

    const depoimentos = [
        {
            image: eleanor, 
            name: 'Eleanor Marques', 
            text: 'Excelente! Graças ao Pecto, a minha filha, que tem dificuldades para falar, está conseguindo interagir-se melhor com outras pessoas! Estou bastante feliz por ela.'
        },

    ]


    return (
        <section id={style.depoimentos}>
            <h1>Depoimentos</h1>
            <div id={style.box}>
                <div id={style.button_left} onClick={handleClickLeft}>
                    <img src={seta_esquerda} alt="clique para ver o depoimento à esquerda" />
                </div>
                <div id={style.image_name} style={{ transform: `translateX(${posicao * 25}%)`}}>
                    {depoimentos.map((depoimento, index) => (
                        <div key={index}>
                            <img src={depoimento.image} alt={depoimento.name} />
                            <h3>{depoimento.name}</h3>
                        </div>
                    ))}
                </div>
                <div id={style.text} style={{ transform: `translateX(${posicao * -25}%)`}}>
                    {depoimentos.map((depoimento, index) => (
                        <p key={index}>{depoimento.text}</p>
                    ))}
                </div>
                <div id={style.button_right} onClick={handleClickRight}>
                    <img src={seta_direita} alt="clique para ver o depoimento à direita" />
                </div>
            </div>
        </section>
    )
}

export default Depoimentos