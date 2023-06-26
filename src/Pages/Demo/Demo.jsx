import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import style from './Demo.module.scss';

import Cards from './Cards';


//Imagens das Cards

//Formalidade

import boa_noite_img from './Images/Formalidade/Boa noite.png';
import bom_dia_img from './Images/Formalidade/bom dia.png';
import boa_tarde_img from './Images/Formalidade/boa tarde.png';
import desculpa_img from './Images/Formalidade/Desculpa.png';
import obrigada_img from './Images/Formalidade/Obrigada.png';
import por_favor_img from './Images/Formalidade/por favor .png';

//Desejos

import comer_img from './Images/Desejos/Comer.png';
import beber_img from './Images/Desejos/Beber.png';
import dormir_img from './Images/Desejos/Dormir.png';
import brincar_img from './Images/Desejos/Brincar.png';
import andar_img from './Images/Desejos/Andar.png';
import sair_img from './Images/Desejos/Sair.png';

//Sentimentos - Emoções

import triste_img from './Images/Sentimentos/Triste.png';
import nojo_img from './Images/Sentimentos/Nojo.png';
import curiosa_img from './Images/Sentimentos/Curioso.png';
import dor_img from './Images/Sentimentos/Dor.png';
import duvida_img from './Images/Sentimentos/Duvida.png';
import calma_img from './Images/Sentimentos/Calmo.png';


//Áudios das Cards

//Formalidade - Vozes femininas (Mileny)

import boa_noite_audio from './Audios/Formalidades/Boa noite.m4a';
import bom_dia_audio from './Audios/Formalidades/Bom dia.m4a';
import boa_tarde_audio from './Audios/Formalidades/Boa tarde.m4a';
import desculpa_audio from './Audios/Formalidades/Desculpa.m4a';
import obrigada_audio from './Audios/Formalidades/Obrigada.m4a';
import por_favor_audio from './Audios/Formalidades/Por favor.m4a';

//Desejos - Vozes femininas (Mileny)

import comer_audio from './Audios/Desejos/Comer.m4a';
import beber_audio from './Audios/Desejos/Beber.m4a';
import dormir_audio from './Audios/Desejos/Dormir.m4a';
import brincar_audio from './Audios/Desejos/Brincar.m4a';
import andar_audio from './Audios/Desejos/Andar.m4a';
import sair_audio from './Audios/Desejos/Sair.m4a';

//Sentimentos - Emoções

import triste_audio from './Audios/Sentimentos - Emoções/Triste.m4a';
import nojo_audio from './Audios/Sentimentos - Emoções/Nojo.m4a';
import curiosa_audio from './Audios/Sentimentos - Emoções/Curiosa.m4a';
import dor_audio from './Audios/Sentimentos - Emoções/Dor.m4a';
import duvida_audio from './Audios/Sentimentos - Emoções/Dúvida.m4a';
import calma_audio from './Audios/Sentimentos - Emoções/Calma.m4a';


//Imagens gerais da página

import logo from '../../Images/logo.png';
import home from '../../Images/Home_demo.png';
import seta from '../../Images/Seta_demo.png';
import lupa from '../../Images/Search_lupa.png';
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

    let formalidade_color = 'linear-gradient(180deg, #38B1FF 0%, rgba(138.96, 206.69, 250.75, 0) 100%)';
    let desejos_color = 'linear-gradient(180deg, #FFFF00 0%, #FFFFFF 100%';
    let sentimentos_color = 'linear-gradient(180deg, #FF4646 0%, rgba(255, 172.13, 172.13, 0) 100%)';


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

    //Formalidade

    const cardsFormalidade = [
        { card_img: boa_noite_img, card_alt: 'Boa Noite', card_text: 'Boa Noite', card_audio: boa_noite_audio },
        { card_img: bom_dia_img, card_alt: 'Bom Dia', card_text: 'Bom Dia', card_audio: bom_dia_audio },
        { card_img: boa_tarde_img, card_alt: 'Boa Tarde', card_text: 'Boa Tarde', card_audio: boa_tarde_audio },
        { card_img: desculpa_img, card_alt: 'Desculpa', card_text: 'Desculpa', card_audio: desculpa_audio },
        { card_img: obrigada_img, card_alt: 'Obrigado ou Obrigada', card_text: 'Obrigado(a)', card_audio: obrigada_audio },
        { card_img: por_favor_img, card_alt: 'Por favor', card_text: 'Por Favor', card_audio: por_favor_audio }
    ]

    //Desejos

    const cardsDesejos = [
        { card_img: comer_img, card_alt: 'Comer', card_text: 'Comer', card_audio: comer_audio },
        { card_img: beber_img, card_alt: 'Beber', card_text: 'Beber', card_audio: beber_audio },
        { card_img: dormir_img, card_alt: 'Dormir', card_text: 'Dormir', card_audio: dormir_audio },
        { card_img: brincar_img, card_alt: 'Brincar', card_text: 'Brincar', card_audio: brincar_audio },
        { card_img: andar_img, card_alt: 'Andar', card_text: 'Andar', card_audio: andar_audio },
        { card_img: sair_img, card_alt: 'Sair', card_text: 'Sair', card_audio: sair_audio }
    ]

    //Sentimentos

    const cardsSentimentos = [
        { card_img: triste_img, card_alt: 'Triste', card_text: 'Triste', card_audio: triste_audio },
        { card_img: nojo_img, card_alt: 'Nojo', card_text: 'Nojo', card_audio: nojo_audio },
        { card_img: curiosa_img, card_alt: 'Curioso ou Curiosa', card_text: 'Curioso(a)', card_audio: curiosa_audio },
        { card_img: dor_img, card_alt: 'Dor', card_text: 'Dor', card_audio: dor_audio },
        { card_img: duvida_img, card_alt: 'Dúvida', card_text: 'Dúvida', card_audio: duvida_audio },
        { card_img: calma_img, card_alt: 'Calma ou Calmo', card_text: 'Calmo(a)', card_audio: calma_audio }
    ]


    //Código para tornar a barra de busca funcional

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    //Buscar cards - Formalidade

    const filteredCardsFormalidade = cardsFormalidade.filter((card) => 
        card.card_text.toLowerCase().includes(searchText.toLowerCase())
    );

    //Buscar cards - Desejos

    const filteredCardsDesejos = cardsDesejos.filter((card) =>
        card.card_text.toLowerCase().includes(searchText.toLowerCase())
    );

    //Buscar cards - Sentimentos - Emoções

    const filteredCardsSentimentos = cardsSentimentos.filter((card) =>
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
                            <Nav.Link href='/' style={{textDecoration: 'none', color: '#000'}}>
                               <li>
                                    <div>
                                        <img src={home} alt="Clique aqui para ir à home" />
                                        <p>Home</p>
                                    </div>
                               </li>
                            </Nav.Link>
                        </ul>
                    </nav>
                </div>

                {/*Seção principal*/}
                <div id={style.section_main}>

                    {/*Header*/}
                    <header id={style.header} className={`${style.header} ${headerVisible ? style.visible2 : ''}`}>
                        <nav>
                            <img src={seta} alt='Clique para abrir o menu lateral' id={style.menu} onClick={() => {handleMenuClickMenu(); handleMenuClickMain()}} title='Ver Menu' />
                            <div id={style.nav_right}>
                                <div>
                                    <input type="search" placeholder='Procurar' value={searchText} onChange={handleSearchChange} />
                                    <img src={lupa} alt="Lupa" />
                                </div>
                                <img src={conta} alt="Clique para ver a sua conta" id={style.conta} title='Minha Conta' />
                            </div>
                        </nav>
                    </header>

                    <section id={style.menu_central}></section>

                    {/*Cards de Formalidade*/}
                        
                    <section id={style.formalidade}>
                        <h2>Formalidade: </h2>
                        <div>
                            {filteredCardsFormalidade.length > 0 ? (
                                filteredCardsFormalidade.map((card, index) => (
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
                                <p>Nenhum resultado encontrado :(</p>
                            )}
                        </div>
                    </section>

                    {/*Cards de Desejos*/}

                    <section id={style.desejos}>
                        <h2>Desejos: </h2>
                        <div>
                            {filteredCardsDesejos.length > 0 ? (
                                filteredCardsDesejos.map((card, index) => (
                                    <Cards 
                                        key={index}
                                        card_color={desejos_color}
                                        card_img={card.card_img}
                                        card_alt={card.card_alt}
                                        card_text={card.card_text}
                                        card_audio={card.card_audio}
                                        handleCardAudio={handleCardAudio}
                                    />
                                ))
                            ) : (
                                <p>Nenhum resultado encontrado :(</p>
                            )}
                        </div>
                    </section>

                    {/*Cards de Sentimentos - Emoções */}

                    <section id={style.sentimentos}>
                        <h2>Sentimentos: </h2>
                        <div>
                            {filteredCardsSentimentos.length > 0 ? (
                                filteredCardsSentimentos.map((card, index) => (
                                    <Cards
                                        key={index}
                                        card_color={sentimentos_color}
                                        card_img={card.card_img}
                                        card_alt={card.card_alt}
                                        card_text={card.card_text}
                                        card_audio={card.card_audio}
                                        handleCardAudio={handleCardAudio}
                                    />
                                ))
                            ) : (
                                <p>Nenhum resultado encontrado :(</p>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Demo