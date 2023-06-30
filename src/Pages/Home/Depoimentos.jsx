import style from './Depoimentos.module.css';

import React, { useState } from 'react';

import eleanor from '../../Images/eleanor_teste.jpg';
import holly from '../../Images/Holly Greenhow - Depoimentos.jpg';

import seta_esquerda from '../../Images/Seta esquerda.png';
import seta_direita from '../../Images/Seta direita.png';


function Depoimentos() {

    //Código para tornar o carrossel funcional

    const [posicao, setPosicao] = useState(0);

    const handleClickLeft = () => {
        setPosicao((posicao - 1 + 4) % 4);
    }

    const handleClickRight = () => {
        setPosicao((posicao + 1) % 4);
    }

    //Props dos Depoimentos

    const depoimentos = [
        {
            image: eleanor, 
            name: 'Eleanor Marques', 
            text: 'Excelente! Graças à Pecto, a minha filha, que tem dificuldades para falar, está conseguindo interagir-se melhor com outras pessoas! Estou bastante feliz por ela.'
        },
    ]

    const depoimentos2 = [
        {
            image: holly, 
            name: 'Holly Greenhow', 
            text: 'Escrevo por aqui pela ajuda de meus pais. Sou profundamente grata pela iniciativa da Pecto, é tão importante conseguir me comunicar com a minha família e amigos sem depender do outro.'
        },
    ]

    const depoimentos3 = [
        {
            image: eleanor, 
            name: 'Eleanor Marques', 
            text: 'Excelente! Graças ao Pecto, a minha filha, que tem dificuldades para falar, está conseguindo interagir-se melhor com outras pessoas! Estou bastante feliz por ela.'
        },
    ]

    const depoimentos4 = [
        {
            image: eleanor, 
            name: 'Eleanor Marques', 
            text: 'Excelente! Graças ao Pecto, a minha filha, que tem dificuldades para falar, está conseguindo interagir-se melhor com outras pessoas! Estou bastante feliz por ela.'
        },
    ]


    //Código JSX

    return (
        <section id={style.depoimentos}>
            <h1>Depoimentos</h1>
            <div id={style.box}>

                 {/*Botão Esquerda*/}

                <div id={style.button_left}>
                    <img src={seta_esquerda} alt="clique para ver o depoimento à esquerda" onClick={handleClickLeft} />
                </div>

                {/*Depoimento 1*/}

                <div className={style.box2} style={{ transform: `translateX(${posicao * -110}%)`}}>
                    {depoimentos.map((depoimento, index) => (
                        <div key={index} className={style.content} style={{transform: 'translateX(0%)'}}>
                            <div className={style.image_name}>
                                <img src={depoimento.image} alt={depoimento.name} />
                                <h3>{depoimento.name}</h3>
                            </div>
                            <div className={style.text}>
                                <p>{depoimento.text}</p>
                            </div>
                        </div> 
                    ))}
                </div>

                {/*Depoimento 2*/}

                <div className={style.box2} style={{ transform: `translateX(${posicao * -110}%)`}}>
                    {depoimentos2.map((depoimento, index) => (
                        <div key={index} className={style.content} style={{transform: 'translateX(110%)'}}>
                            <div className={style.image_name}>
                                <img src={depoimento.image} alt={depoimento.name} />
                                <h3>{depoimento.name}</h3>
                            </div>
                            <div className={style.text}>
                                <p>{depoimento.text}</p>
                            </div>
                        </div> 
                    ))}
                </div>

                {/*Depoimento 3*/}

                <div className={style.box2} style={{ transform: `translateX(${posicao * -110}%)`}}>
                    {depoimentos3.map((depoimento, index) => (
                        <div key={index} className={style.content} style={{transform: 'translateX(220%)'}}>
                            <div className={style.image_name}>
                                <img src={depoimento.image} alt={depoimento.name} />
                                <h3>{depoimento.name}</h3>
                            </div>
                            <div className={style.text}>
                                <p>{depoimento.text}</p>
                            </div>
                        </div> 
                    ))}
                </div>

                {/*Depoimento 4*/}

                <div className={style.box2} style={{ transform: `translateX(${posicao * -110}%)`}}>
                    {depoimentos4.map((depoimento, index) => (
                        <div key={index} className={style.content} style={{transform: 'translateX(330%)'}}>
                            <div className={style.image_name}>
                                <img src={depoimento.image} alt={depoimento.name} />
                                <h3>{depoimento.name}</h3>
                            </div>
                            <div className={style.text}>
                                <p>{depoimento.text}</p>
                            </div>
                        </div> 
                    ))}
                </div>

                {/*Botão Direito*/}

                <div id={style.button_right}>
                    <img src={seta_direita} alt="clique para ver o depoimento à direita" onClick={handleClickRight} />
                </div>
            </div>
        </section>
    )
}

export default Depoimentos