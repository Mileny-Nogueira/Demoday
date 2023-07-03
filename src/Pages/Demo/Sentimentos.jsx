import React from 'react';
import style from './Sentimentos.module.scss';

import Cards from './Cards';


//Imagens das Cards

//Sentimentos - Emoções

import amor_img from './Images/Sentimentos/Amor.png';
import feliz_img from './Images/Sentimentos/Feliz.png';
import medo_img from './Images/Sentimentos/Medo.png';
import raiva_img from './Images/Sentimentos/Raiva.png';
import surpresa_img from './Images/Sentimentos/Surpreso.png';
import triste_img from './Images/Sentimentos/Triste.png';

import nojo_img from './Images/Sentimentos/Nojo.png';
import curiosa_img from './Images/Sentimentos/Curioso.png';
import dor_img from './Images/Sentimentos/Dor.png';
import duvida_img from './Images/Sentimentos/Duvida.png';
import calma_img from './Images/Sentimentos/Calmo.png';
import ansiosa_img from './Images/Sentimentos/Ansiedade.png';

import alegre_img from './Images/Sentimentos/alegre.png';
import gostei_img from './Images/Sentimentos/Gostei.png';
import nao_gostei_img from './Images/Sentimentos/Não gostei.png';
import quero_img from './Images/Sentimentos/quero.png';
import nao_quero_img from './Images/Sentimentos/Não quero.png';
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

import amor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Amor.m4a';
import feliz_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Feliz.m4a';
import medo_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Medo.m4a';
import raiva_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Raiva.m4a';
import surpresa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Surpresa.m4a';
import triste_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Triste.m4a';

import nojo_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Nojo.m4a';
import curiosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Curiosa.m4a';
import dor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Dor.m4a';
import duvida_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Dúvida.m4a';
import calma_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Calma.m4a';
import ansiosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Ansiosa.m4a';

import alegre_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Alegre.m4a';
import gostei_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Gostei.m4a';
import nao_gostei_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Não gostei.m4a';
import quero_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Quero.m4a';
import nao_quero_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Não quero.m4a';
import satisfeita_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Satisfeita.m4a';

import confianca_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Confiança.m4a';
import ciumes_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Ciúmes.m4a';
import empatia_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Empatia.m4a';
import animada_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Animada.m4a';
import relaxada_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Relaxada.m4a';
import paciencia_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Paciência.m4a';

import nervosa_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Nervosa.m4a';
import saudade_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Saudade.m4a';
import respeito_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Respeito.m4a';
import interesse_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Interesse.m4a';
import bom_humor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Bom humor.m4a';
import mau_humor_audio from './Audios/Sentimentos - Emoções/Vozes - Mileny/Mau humor.m4a';


//Sentimentos - Emoções - Vozes Masculinas (Hitalo)

import amor_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Amor.m4a';
import feliz_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Feliz.m4a';
import medo_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Medo.m4a';
import raiva_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Raiva.m4a';
import surpreso_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Surpreso.m4a';
import triste_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Triste.m4a';

import nojo_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Nojo.m4a';
import curioso_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Curioso.m4a';
import dor_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Dor.m4a';
import duvida_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Dúvida.m4a';
import calmo_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Calmo.m4a';
import ansioso_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Ansioso.m4a';

import alegre_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Alegre.m4a';
import gostei_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Gostei.m4a';
import nao_gostei_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Não Gostei.m4a';
import quero_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Quero.m4a';
import nao_quero_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Não quero.m4a';
import satisfeito_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Satisfeito.m4a';

import confianca_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Confiança.m4a';
import ciumes_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Ciumes.m4a';
import empatia_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Empatia.m4a';
import animado_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Animado.m4a';
import relaxado_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Relaxado.m4a';
import paciencia_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Paciência.m4a';

import nervoso_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Nervoso.m4a';
import saudade_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Saudade.m4a';
import respeito_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Respeito.m4a';
import interesse_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Interesse.m4a';
import bom_humor_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Bom Humor.m4a';
import mau_humor_audio2 from './Audios/Sentimentos - Emoções/Vozes - Hitalo/Mau Humor.m4a';


const Sentimentos = ({ searchText, handleCardAudio, selectedVoice }) => {

    //Variável para as cores de fundo das cards

    let sentimentos_color = 'linear-gradient(180deg, #FF4646 0%, rgba(255, 172.13, 172.13, 0) 100%)';
    

    //Sentimentos - Página própria

    const cardsSentimento2 = [
        { card_img: amor_img, card_alt: 'Amor', card_text: 'Amor', card_audio: selectedVoice === 'Mileny' ? amor_audio : amor_audio2 },
        { card_img: feliz_img, card_alt: 'Feliz', card_text: 'Feliz', card_audio: selectedVoice === 'Mileny' ? feliz_audio : feliz_audio2 },
        { card_img: medo_img, card_alt: 'Medo', card_text: 'Medo', card_audio: selectedVoice === 'Mileny' ? medo_audio : medo_audio2 },
        { card_img: raiva_img, card_alt: 'Raiva', card_text: 'Raiva', card_audio: selectedVoice === 'Mileny' ? raiva_audio : raiva_audio2 },
        { card_img: surpresa_img, card_alt: 'Surpreso ou Surpresa', card_text: selectedVoice === 'Mileny' ? 'Surpresa' : 'Surpreso', card_audio: selectedVoice === 'Mileny' ? surpresa_audio : surpreso_audio2 },
        { card_img: triste_img, card_alt: 'Triste', card_text: 'Triste', card_audio: selectedVoice === 'Mileny' ? triste_audio : triste_audio2 },

        { card_img: nojo_img, card_alt: 'Nojo', card_text: 'Nojo', card_audio: selectedVoice === 'Mileny' ? nojo_audio : nojo_audio2 },
        { card_img: curiosa_img, card_alt: 'Curioso ou Curiosa', card_text: selectedVoice === 'Mileny' ? 'Curiosa' : 'Curioso', card_audio: selectedVoice === 'Mileny' ? curiosa_audio : curioso_audio2 },
        { card_img: dor_img, card_alt: 'Dor', card_text: 'Dor', card_audio: selectedVoice === 'Mileny' ? dor_audio : dor_audio2 },
        { card_img: duvida_img, card_alt: 'Dúvida', card_text: 'Dúvida', card_audio: selectedVoice === 'Mileny' ? duvida_audio : duvida_audio2 },
        { card_img: calma_img, card_alt: 'Calma ou Calmo', card_text: selectedVoice === 'Mileny' ? 'Calma' : 'Calmo', card_audio: selectedVoice === 'Mileny' ? calma_audio : calmo_audio2 },
        { card_img: ansiosa_img, card_alt: 'Ansioso ou Ansiosa', card_text: selectedVoice === 'Mileny' ? 'Ansiosa' : 'Ansioso', card_audio: selectedVoice === 'Mileny' ? ansiosa_audio : ansioso_audio2 },

        { card_img: alegre_img, card_alt: 'Alegre', card_text: 'Alegre', card_audio: selectedVoice === 'Mileny' ? alegre_audio : alegre_audio2 },
        { card_img: gostei_img, card_alt: 'Gostei', card_text: 'Gostei', card_audio: selectedVoice === 'Mileny' ? gostei_audio : gostei_audio2 },
        { card_img: nao_gostei_img, card_alt: 'Não Gostei', card_text: 'Não Gostei', card_audio: selectedVoice === 'Mileny' ? nao_gostei_audio : nao_gostei_audio2 },
        { card_img: quero_img, card_alt: 'Quero', card_text: 'Quero', card_audio: selectedVoice === 'Mileny' ? quero_audio : quero_audio2 },
        { card_img: nao_quero_img, card_alt: 'Não Quero', card_text: 'Não Quero', card_audio: selectedVoice === 'Mileny' ? nao_quero_audio : nao_quero_audio2 },
        { card_img: satisfeita_img, card_alt: 'Satisfeito ou Satisfeita', card_text: selectedVoice === 'Mileny' ? 'Satisfeita' : 'Satisfeito', card_audio: selectedVoice === 'Mileny' ? satisfeita_audio : satisfeito_audio2 },

        { card_img: confianca_img, card_alt: 'Confiança', card_text: 'Confiança', card_audio: selectedVoice === 'Mileny' ? confianca_audio : confianca_audio2 },
        { card_img: ciumes_img, card_alt: 'Ciúmes', card_text: 'Ciúmes', card_audio: selectedVoice === 'Mileny' ? ciumes_audio : ciumes_audio2 },
        { card_img: empatia_img, card_alt: 'Empatia', card_text: 'Empatia', card_audio: selectedVoice === 'Mileny' ? empatia_audio : empatia_audio2 },
        { card_img: animada_img, card_alt: 'Animado ou Animada', card_text: selectedVoice === 'Mileny' ? 'Animada' : 'Animado', card_audio: selectedVoice === 'Mileny' ? animada_audio : animado_audio2 },
        { card_img: relaxada_img, card_alt: 'Relaxado ou Relaxada', card_text: selectedVoice === 'Mileny' ? 'Relaxada' : 'Relaxado', card_audio: selectedVoice === 'Mileny' ? relaxada_audio : relaxado_audio2 },
        { card_img: paciencia_img, card_alt: 'Paciência', card_text: 'Paciência', card_audio: selectedVoice === 'Mileny' ? paciencia_audio : paciencia_audio2 },

        { card_img: nervosa_img, card_alt: 'Nervoso ou Nervosa', card_text: selectedVoice === 'Mileny' ? 'Nervosa' : 'Nervoso', card_audio: selectedVoice === 'Mileny' ? nervosa_audio : nervoso_audio2 },
        { card_img: saudade_img, card_alt: 'Saudade', card_text: 'Saudade', card_audio: selectedVoice === 'Mileny' ? saudade_audio : saudade_audio2 },
        { card_img: respeito_img, card_alt: 'Respeito', card_text: 'Respeito', card_audio: selectedVoice === 'Mileny' ? respeito_audio : respeito_audio2 },
        { card_img: interesse_img, card_alt: 'Interesse', card_text: 'Interesse', card_audio: selectedVoice === 'Mileny' ? interesse_audio : interesse_audio2 },
        { card_img: bom_humor_img, card_alt: 'Bom Humor', card_text: 'Bom Humor', card_audio: selectedVoice === 'Mileny' ? bom_humor_audio : bom_humor_audio2 },
        { card_img: mau_humor_img, card_alt: 'Mau Humor', card_text: 'Mau Humor', card_audio: selectedVoice === 'Mileny' ? mau_humor_audio : mau_humor_audio2 },

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