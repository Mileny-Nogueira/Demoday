import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import style from './Demo.module.scss';

import Cards from './Cards';

//Imagens das Cards - Formalidade

import boa_noite_img from './Images/Formalidade/Boa noite.png';
import bom_dia_img from './Images/Formalidade/bom dia.png';
import boa_tarde_img from './Images/Formalidade/boa tarde.png';
import desculpa_img from './Images/Formalidade/Desculpa.png';
import obrigada_img from './Images/Formalidade/Obrigada.png';
import por_favor_img from './Images/Formalidade/por favor .png';

//Áudios das Cards - Formalidade - Vozes femininas (Mileny)

import boa_noite_audio from './Audios/Formalidades/Boa noite.m4a';
import bom_dia_audio from './Audios/Formalidades/Bom dia.m4a';
import boa_tarde_audio from './Audios/Formalidades/Boa tarde.m4a';
import desculpa_audio from './Audios/Formalidades/Desculpa.m4a';
import obrigada_audio from './Audios/Formalidades/Obrigada.m4a';
import por_favor_audio from './Audios/Formalidades/Por favor.m4a'

//Imagens gerais da página

import logo from '../../Images/logo.png';
import home from '../../Images/Home_demo.png';
import conta from '../../Images/Login_conta_demo.png';

const Demo = () => {

    //Script para tornar a Header e a Main (style.main) funcionais e móveis

    const [menuLateralVisible, setMenuLateralVisible] = useState(false);
    const [mainVisible, setMainVisible] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(false);

    const handleMenuClickMenu = () => {
        setMenuLateralVisible(!menuLateralVisible);
        setHeaderVisible(!headerVisible);
    }

    const handleMenuClickMain = () => {
        setMainVisible(!mainVisible);
    }

    //Variável para as cores de fundo das cards

    let formalidade_color = 'linear-gradient(180deg, #469BD2 0%, #0069AD 100%)';

    //Função para os audios das cards

    const [currentAudio, setCurrentAudio] = useState(null);

    const handleCardAudio = (audioSrc) => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }

        const card_audio = new Audio(audioSrc);
        setCurrentAudio(card_audio);
        card_audio.play();
    }

    //Props das Cards - Informações

    const cardsData = [
        { card_img: boa_noite_img, card_alt: 'Boa noite', card_text: 'Boa Noite', card_audio: boa_noite_audio },
        { card_img: bom_dia_img, card_alt: 'Bom dia', card_text: 'Bom Dia', card_audio: bom_dia_audio },
        { card_img: boa_tarde_img, card_alt: 'Bom tarde', card_text: 'Boa Tarde', card_audio: boa_tarde_audio },
        { card_img: desculpa_img, card_alt: 'Desculpa', card_text: 'Desculpa', card_audio: desculpa_audio },
        { card_img: obrigada_img, card_alt: 'Obrigado ou Obrigada', card_text: 'Obrigado(a)', card_audio: obrigada_audio },
        { card_img: por_favor_img, card_alt: 'Por favor', card_text: 'Por Favor', card_audio: por_favor_audio }
    ]

    //Código para tornar a barra de busca funcional

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    const filteredCards = cardsData.filter((card) => 
        card.card_text.toLowerCase().includes(searchText.toLowerCase())
    );

    //Código JSX

    return (
        <main id={style.demo}>
            <div className={`${style.main} ${mainVisible ? style.visible : ''}`}>
            {/* ou: className={style.main + (mainVisible ? ' ' + style.visible2 : '')} */}

                {/*Menu lateral*/}
                <div className={`${style.menu_lateral} ${menuLateralVisible ? style.visible2 : ''}`}>
                    <nav>
                        <img src={logo} alt="logo Pecto" id={style.logo} />
                        <ul>
                            <li>
                               <Nav.Link href='/' style={{textDecoration: 'none', color: "#000"}}>
                                    <div>
                                        <img src={home} alt="Clique aqui para ir à home" />
                                        <p>Home</p>
                                    </div>
                               </Nav.Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/*Seção principal*/}
                <div id={style.section_main}>

                    {/*Header*/}
                    <header id={style.header} className={`${style.header} ${headerVisible ? style.visible2 : ''}`}>
                        <nav>
                            <div id={style.menu} onClick={() => {handleMenuClickMenu(); handleMenuClickMain()}} ></div>
                            <div id={style.nav_right}>
                                <input type="search" placeholder='Procurar' value={searchText} onChange={handleSearchChange} />
                                <img src={conta} alt="Clique para ver a sua conta" id={style.conta} title='Minha Conta' />
                            </div>
                        </nav>
                    </header>

                    {/*Cards de Formalidade*/}
                        
                    <section id={style.formalidade}>
                        <h2>Formalidade:</h2>
                        <div>
                            {filteredCards.length > 0 ? (
                                filteredCards.map((card, index) => (
                                    <Cards
                                        key={index}
                                        card_color={formalidade_color}
                                        card_img={card.card_img}
                                        card_alt={card.card_alt}
                                        card_text={card.card_text}
                                        card_audio={card.card_audio}
                                        handleCardAudio={handleCardAudio}
                                    />
                                ))
                            ) : (
                                <p>Nenhum Resultado encontrado</p>
                            )}
                        </div>
                    </section>

                </div>
            </div>
        </main>
    )
}

export default Demo