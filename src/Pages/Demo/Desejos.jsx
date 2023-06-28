import React, { useState } from 'react';
import style from './Desejos.module.scss';

import Cards from './Cards';


//Imagens das Cards

//Desejos

import comer_img from './Images/Desejos/Comer.png';
import beber_img from './Images/Desejos/Beber.png';
import escovar_dentes_img from './Images/Desejos/Escovar.png';
import banhar_img from './Images/Desejos/Banhar.png';
import banheiro_img from './Images/Desejos/Banheiro.png';
import limpar_img from './Images/Desejos/Limpar.png';

import correr_img from './Images/Desejos/Correr.png';
import sair_img from './Images/Desejos/Sair.png';
import entrar_img from './Images/Desejos/Entrar.png';
import dormir_img from './Images/Desejos/Dormir.png';
import sentar_img from './Images/Desejos/Sentar.png';
import andar_img from './Images/Desejos/Andar.png';

import jogar_lixo_img from './Images/Desejos/Lixo fora .png';
import brincar_img from './Images/Desejos/Brincar.png';
import jogar_img from './Images/Desejos/Jogar.png';
import assistir_img from './Images/Desejos/Assistir.png';
import ler_img from './Images/Desejos/Ler.png';
import descansar_img from './Images/Desejos/Descansar.png';


//Áudios das Cards

//Desejos - Vozes femininas (Mileny)

import comer_audio from './Audios/Desejos/Vozes - Mileny/Comer.m4a';
import beber_audio from './Audios/Desejos/Vozes - Mileny/Beber.m4a';
import escovar_dentes_audio from './Audios/Desejos/Vozes - Mileny/Escovar os dentes.m4a';
import banhar_audio from './Audios/Desejos/Vozes - Mileny/Banhar.m4a';
import banheiro_audio from './Audios/Desejos/Vozes - Mileny/Banheiro.m4a';
import limpar_audio from './Audios/Desejos/Vozes - Mileny/Limpar.m4a';

import correr_audio from './Audios/Desejos/Vozes - Mileny/Correr.m4a';
import sair_audio from './Audios/Desejos/Vozes - Mileny/Sair.m4a';
import entrar_audio from './Audios/Desejos/Vozes - Mileny/Entrar.m4a';
import dormir_audio from './Audios/Desejos/Vozes - Mileny/Dormir.m4a';
import sentar_audio from './Audios/Desejos/Vozes - Mileny/Sentar.m4a';
import andar_audio from './Audios/Desejos/Vozes - Mileny/Andar.m4a';

import jogar_lixo_audio from './Audios/Desejos/Vozes - Mileny/Jogar no lixo.m4a';
import brincar_audio from './Audios/Desejos/Vozes - Mileny/Brincar.m4a';
import jogar_audio from './Audios/Desejos/Vozes - Mileny/Jogar.m4a';
import assistir_audio from './Audios/Desejos/Vozes - Mileny/Assistir.m4a';
import ler_audio from './Audios/Desejos/Vozes - Mileny/Ler.m4a';
import descansar_audio from './Audios/Desejos/Vozes - Mileny/Descansar.m4a';


const Desejos = ({ searchText }) => {

    //Variável para as cores de fundo das cards

    let desejos_color = 'linear-gradient(180deg, #FFFF00 0%, #FFFFFF 100%';


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

    //Desejos - Página própria

    const cardsDesejos2 = [
        { card_img: comer_img, card_alt: 'Comer', card_text: 'Comer', card_audio: comer_audio },
        { card_img: beber_img, card_alt: 'Beber', card_text: 'Beber', card_audio: beber_audio },
        { card_img: escovar_dentes_img, card_alt: 'Escovar os Dentes', card_text: 'Escovar os Dentes', card_audio: escovar_dentes_audio },
        { card_img: banhar_img, card_alt: 'Banhar', card_text: 'Banhar', card_audio: banhar_audio },
        { card_img: banheiro_img, card_alt: 'Banheiro', card_text: 'Banheiro', card_audio: banheiro_audio },
        { card_img: limpar_img, card_alt: 'Limpar', card_text: 'Limpar', card_audio: limpar_audio },

        { card_img: correr_img, card_alt: 'Correr', card_text: 'Correr', card_audio: correr_audio },
        { card_img: sair_img, card_alt: 'Sair', card_text: 'Sair', card_audio: sair_audio },
        { card_img: entrar_img, card_alt: 'Entrar', card_text: 'Entrar', card_audio: entrar_audio },
        { card_img: dormir_img, card_alt: 'Dormir', card_text: 'Dormir', card_audio: dormir_audio },
        { card_img: sentar_img, card_alt: 'Sentar', card_text: 'Sentar', card_audio: sentar_audio },
        { card_img: andar_img, card_alt: 'Andar', card_text: 'Andar', card_audio: andar_audio },

        { card_img: jogar_lixo_img, card_alt: 'Jogar no Lixo', card_text: 'Jogar no Lixo', card_audio: jogar_lixo_audio },
        { card_img: brincar_img, card_alt: 'Brincar', card_text: 'Brincar', card_audio: brincar_audio },
        { card_img: jogar_img, card_alt: 'Jogar', card_text: 'Jogar', card_audio: jogar_audio },
        { card_img: assistir_img, card_alt: 'Assistir', card_text: 'Assistir', card_audio: assistir_audio },
        { card_img: ler_img, card_alt: 'Ler', card_text: 'Ler', card_audio: ler_audio },
        { card_img: descansar_img, card_alt: 'Descansar', card_text: 'Descansar', card_audio: descansar_audio },
    ]
    
    
    //Buscar cards - Desejos - Página própria

    const filteredCardsDesejos2 = cardsDesejos2.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );


    //Código JSX

    return (
        <main>
            {/*Cards de Desejos*/}
                
            <section id={style.desejos}>
                <h2>Desejos: </h2>
                <div>
                    {filteredCardsDesejos2.length > 0 ? (
                        filteredCardsDesejos2.map((card, index) => (
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
        </main>
    )
}

export default Desejos