import React, { useState } from 'react';
import style from './HomeDemo.module.scss';

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
import escovar_dentes_img from './Images/Desejos/Escovar.png';
import banhar_img from './Images/Desejos/Banhar.png';
import banheiro_img from './Images/Desejos/Banheiro.png';
import limpar_img from './Images/Desejos/Limpar.png';

//Sentimentos - Emoções

import triste_img from './Images/Sentimentos/Triste.png';
import nojo_img from './Images/Sentimentos/Nojo.png';
import curiosa_img from './Images/Sentimentos/Curioso.png';
import dor_img from './Images/Sentimentos/Dor.png';
import duvida_img from './Images/Sentimentos/Duvida.png';
import calma_img from './Images/Sentimentos/Calmo.png';


//Áudios das Cards

//Formalidade - Vozes Femininas (Mileny)

import boa_noite_audio from './Audios/Formalidades/Vozes - Mileny/Boa noite.m4a';
import bom_dia_audio from './Audios/Formalidades/Vozes - Mileny/Bom dia.m4a';
import boa_tarde_audio from './Audios/Formalidades/Vozes - Mileny/Boa tarde.m4a';
import desculpa_audio from './Audios/Formalidades/Vozes - Mileny/Desculpa.m4a';
import obrigada_audio from './Audios/Formalidades/Vozes - Mileny/Obrigada.m4a';
import por_favor_audio from './Audios/Formalidades/Vozes - Mileny/Por favor.m4a';

//Desejos - Vozes Femininas (Mileny)

import comer_audio from './Audios/Desejos/Vozes - Mileny/Comer.m4a';
import beber_audio from './Audios/Desejos/Vozes - Mileny/Beber.m4a';
import escovar_dentes_audio from './Audios/Desejos/Vozes - Mileny/Escovar os dentes.m4a';
import banhar_audio from './Audios/Desejos/Vozes - Mileny/Banhar.m4a';
import banheiro_audio from './Audios/Desejos/Vozes - Mileny/Banheiro.m4a';
import limpar_audio from './Audios/Desejos/Vozes - Mileny/Limpar.m4a';

//Sentimentos - Emoções - Vozes Femininas (Mileny)

import triste_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Triste.m4a';
import nojo_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Nojo.m4a';
import curiosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Curiosa.m4a';
import dor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Dor.m4a';
import duvida_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Dúvida.m4a';
import calma_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Calma.m4a';


//Formalidades - Vozes Masculinas (Hitalo)

import boa_noite_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa Noite.m4a';
import bom_dia_audio2 from './Audios/Formalidades/Vozes - Hitalo/Bom dia.m4a';
import boa_tarde_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa tarde.m4a';
import desculpa_audio2 from './Audios/Formalidades/Vozes - Hitalo/Desculpa.m4a';
import obrigado_audio2 from './Audios/Formalidades/Vozes - Hitalo/Obrigado.m4a';
import por_favor_audio2 from './Audios/Formalidades/Vozes - Hitalo/Por Favor.m4a';


const HomeDemo = ({ searchText, audioToggle }) => {

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

    //Formalidade - Home

    const cardsFormalidade = [
        { card_img: boa_noite_img, card_alt: 'Boa Noite', card_text: 'Boa Noite', card_audio: audioToggle ? boa_noite_audio2 : boa_noite_audio },
        { card_img: bom_dia_img, card_alt: 'Bom Dia', card_text: 'Bom Dia', card_audio: bom_dia_audio },
        { card_img: boa_tarde_img, card_alt: 'Boa Tarde', card_text: 'Boa Tarde', card_audio: boa_tarde_audio },
        { card_img: desculpa_img, card_alt: 'Desculpa', card_text: 'Desculpa', card_audio: desculpa_audio },
        { card_img: obrigada_img, card_alt: 'Obrigado ou Obrigada', card_text: 'Obrigado(a)', card_audio: obrigada_audio },
        { card_img: por_favor_img, card_alt: 'Por favor', card_text: 'Por Favor', card_audio: por_favor_audio }
    ]

    //Desejos - Home

    const cardsDesejos = [
        { card_img: comer_img, card_alt: 'Comer', card_text: 'Comer', card_audio: comer_audio },
        { card_img: beber_img, card_alt: 'Beber', card_text: 'Beber', card_audio: beber_audio },
        { card_img: escovar_dentes_img, card_alt: 'Escovar os Dentes', card_text: 'Escovar os Dentes', card_audio: escovar_dentes_audio },
        { card_img: banhar_img, card_alt: 'Banhar', card_text: 'Banhar', card_audio: banhar_audio },
        { card_img: banheiro_img, card_alt: 'Banheiro', card_text: 'Banheiro', card_audio: banheiro_audio },
        { card_img: limpar_img, card_alt: 'Limpar', card_text: 'Limpar', card_audio: limpar_audio }
    ]

    //Sentimentos - Home

    const cardsSentimentos = [
        { card_img: triste_img, card_alt: 'Triste', card_text: 'Triste', card_audio: triste_audio },
        { card_img: nojo_img, card_alt: 'Nojo', card_text: 'Nojo', card_audio: nojo_audio },
        { card_img: curiosa_img, card_alt: 'Curioso ou Curiosa', card_text: 'Curioso(a)', card_audio: curiosa_audio },
        { card_img: dor_img, card_alt: 'Dor', card_text: 'Dor', card_audio: dor_audio },
        { card_img: duvida_img, card_alt: 'Dúvida', card_text: 'Dúvida', card_audio: duvida_audio },
        { card_img: calma_img, card_alt: 'Calma ou Calmo', card_text: 'Calmo(a)', card_audio: calma_audio }
    ]


    //Buscar cards - Formalidade - Home

    const filteredCardsFormalidade = cardsFormalidade.filter((card) => 
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );

    //Buscar cards - Desejos - Home

    const filteredCardsDesejos = cardsDesejos.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );

    //Buscar cards - Sentimentos - Emoções - Home

    const filteredCardsSentimentos = cardsSentimentos.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );
    

    //Código JSX

    return (
        <main>
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
        </main>
    )
}

export default HomeDemo