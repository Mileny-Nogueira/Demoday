import React, { useState } from 'react';
import style from './Sentimentos.module.scss';

import Cards from './Cards';


//Imagens das Cards

//Sentimentos - Emoções

import triste_img from './Images/Sentimentos/Triste.png';
import nojo_img from './Images/Sentimentos/Nojo.png';
import curiosa_img from './Images/Sentimentos/Curioso.png';
import dor_img from './Images/Sentimentos/Dor.png';
import duvida_img from './Images/Sentimentos/Duvida.png';
import calma_img from './Images/Sentimentos/Calmo.png';

import ansiosa_img from './Images/Sentimentos/Ansiedade.png';
import alegre_img from './Images/Sentimentos/alegre.png';
import gostei_img from './Images/Sentimentos/Gostei.png';
import quero_img from './Images/Sentimentos/quero.png';
import satisfeita_img from './Images/Sentimentos/satisfeito.png';
import confianca_img from './Images/Sentimentos/Confiança.png';

import ciumes_img from './Images/Sentimentos/ciumes.png';
import empatia_img from './Images/Sentimentos/empatia.png';
import animada_img from './Images/Sentimentos/animado.png';
import relaxada_img from './Images/Sentimentos/Relaxado.png';
import paciencia_img from './Images/Sentimentos/Paciencia.png';
import nervosa_img from './Images/Sentimentos/nervoso.png';

import saudade_img from './Images/Sentimentos/saudade.png';
import respeito_img from './Images/Sentimentos/respeito.png';
import interesse_img from './Images/Sentimentos/interesse.png';
import bom_humor_img from './Images/Sentimentos/bom humor.png';
import mau_humor_img from './Images/Sentimentos/Mal humor.png';


//Áudios das Cards

//Sentimentos - Emoções - Vozes Femininas (Mileny)

import triste_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Triste.m4a';
import nojo_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Nojo.m4a';
import curiosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Curiosa.m4a';
import dor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Dor.m4a';
import duvida_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Dúvida.m4a';
import calma_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Calma.m4a';

import ansiosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Ansiosa.m4a';
import alegre_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Alegre.m4a';
import gostei_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Gostei.m4a';
import quero_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Quero.m4a';
import satisfeita_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Satisfeita.m4a';
import confianca_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Confiança.m4a';

import ciumes_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Ciúmes.m4a';
import empatia_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Empatia.m4a';
import animada_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Animada.m4a';
import relaxada_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Relaxada.m4a';
import paciencia_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Paciência.m4a';
import nervosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Nervoso.m4a'; //Mileny, trocar áudio

import saudade_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Saudade.m4a';
import respeito_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Respeito.m4a';
import interesse_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Interesse.m4a';
import bom_humor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Bom humor.m4a';
import mau_humor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Mau humor.m4a';


const Sentimentos = ({ searchText }) => {

    //Variável para as cores de fundo das cards

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

    

    //Sentimentos - Página própria

    const cardsSentimento2 = [
        { card_img: triste_img, card_alt: 'Triste', card_text: 'Triste', card_audio: triste_audio },
        { card_img: nojo_img, card_alt: 'Nojo', card_text: 'Nojo', card_audio: nojo_audio },
        { card_img: curiosa_img, card_alt: 'Curioso ou Curiosa', card_text: 'Curioso(a)', card_audio: curiosa_audio },
        { card_img: dor_img, card_alt: 'Dor', card_text: 'Dor', card_audio: dor_audio },
        { card_img: duvida_img, card_alt: 'Dúvida', card_text: 'Dúvida', card_audio: duvida_audio },
        { card_img: calma_img, card_alt: 'Calma ou Calmo', card_text: 'Calmo(a)', card_audio: calma_audio },

        { card_img: ansiosa_img, card_alt: 'Ansioso ou Ansiosa', card_text: 'Ansioso (a)', card_audio: ansiosa_audio },
        { card_img: alegre_img, card_alt: 'Alegre', card_text: 'Alegre', card_audio: alegre_audio },
        { card_img: gostei_img, card_alt: 'Gostei', card_text: 'Gostei', card_audio: gostei_audio },
        { card_img: quero_img, card_alt: 'Quero', card_text: 'Quero', card_audio: quero_audio },
        { card_img: satisfeita_img, card_alt: 'Satisfeito ou Satisfeita', card_text: 'Satisfeito(a)', card_audio: satisfeita_audio },
        { card_img: confianca_img, card_alt: 'Confiança', card_text: 'Confiança', card_audio: confianca_audio },

        { card_img: ciumes_img, card_alt: 'Ciúmes', card_text: 'Ciúmes', card_audio: ciumes_audio },
        { card_img: empatia_img, card_alt: 'Empatia', card_text: 'Empatia', card_audio: empatia_audio },
        { card_img: animada_img, card_alt: 'Animado ou Animada', card_text: 'Animado(a)', card_audio: animada_audio },
        { card_img: relaxada_img, card_alt: 'Relaxado ou Relaxada', card_text: 'Relaxado(a)', card_audio: relaxada_audio },
        { card_img: paciencia_img, card_alt: 'Paciência', card_text: 'Paciência', card_audio: paciencia_audio },
        { card_img: nervosa_img, card_alt: 'Nervoso ou Nervosa', card_text: 'Nervoso(a)', card_audio: nervosa_audio },

        { card_img: saudade_img, card_alt: 'Saudade', card_text: 'Saudade', card_audio: saudade_audio },
        { card_img: respeito_img, card_alt: 'Respeito', card_text: 'Respeito', card_audio: respeito_audio },
        { card_img: interesse_img, card_alt: 'Interesse', card_text: 'Interesse', card_audio: interesse_audio },
        { card_img: bom_humor_img, card_alt: 'Bom Humor', card_text: 'Bom Humor', card_audio: bom_humor_audio },
        { card_img: mau_humor_img, card_alt: 'Mau Humor', card_text: 'Mau Humor', card_audio: mau_humor_audio },

    ]


    //Buscar cards - Sentimentos - Emoções Vozes - Mileny/- Página própria

    const filteredCardsSentimentos2 = cardsSentimento2.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );
    

    //Código JSX

    return (
        <main>
            {/*Cards de Sentimentos*/}
                
            <section id={style.sentimentos}>
                <h2>Sentimentos: </h2>
                <div>
                    {filteredCardsSentimentos2.length > 0 ? (
                        filteredCardsSentimentos2.map((card, index) => (
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

export default Sentimentos