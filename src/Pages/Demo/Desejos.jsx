import React from 'react';
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

import trocar_roupa_img from './Images/Desejos/Trocar de Roupa.png';
import nao_img from './Images/Desejos/Não.png';
import sim_img from './Images/Desejos/Sim.png';
import abracar_img from './Images/Desejos/Abracar.png';
import beijar_img from './Images/Desejos/Beijar.png';
import ouvir_musica_img from './Images/Desejos/Musica.png';

import escolher_img from './Images/Desejos/Escolher.png';
import desenhar_img from './Images/Desejos/Desenhar.png';
import estudar_img from './Images/Desejos/Estudar.png';
import casa_img from './Images/Desejos/Casa.png';
import quarto_img from './Images/Desejos/Quarto.png';
import segurar_img from './Images/Desejos/Segurar.png';


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

import trocar_roupa_audio from './Audios/Desejos/Vozes - Mileny/Trocar de roupa.m4a';
import nao_audio from './Audios/Desejos/Vozes - Mileny/Não.m4a';
import sim_audio from './Audios/Desejos/Vozes - Mileny/Sim.m4a';
import abracar_audio from './Audios/Desejos/Vozes - Mileny/Abraçar.m4a';
import beijar_audio from './Audios/Desejos/Vozes - Mileny/Beijar.m4a';
import ouvir_musica_audio from './Audios/Desejos/Vozes - Mileny/Ouvir música.m4a';

import escolher_audio from './Audios/Desejos/Vozes - Mileny/Escolher.m4a';
import desenhar_audio from './Audios/Desejos/Vozes - Mileny/Desenhar.m4a';
import estudar_audio from './Audios/Desejos/Vozes - Mileny/Estudar.m4a';
import casa_audio from './Audios/Desejos/Vozes - Mileny/Casa.m4a';
import quarto_audio from './Audios/Desejos/Vozes - Mileny/Quarto.m4a';
import segurar_audio from './Audios/Desejos/Vozes - Mileny/Segurar.m4a';


//Desejos - Vozes masculinas (Hitalo)

import comer_audio2 from './Audios/Desejos/Vozes - Hitalo/Comer.m4a';
import beber_audio2 from './Audios/Desejos/Vozes - Hitalo/Beber.m4a';
import escovar_dentes_audio2 from './Audios/Desejos/Vozes - Hitalo/Escovar os dentes.m4a';
import banhar_audio2 from './Audios/Desejos/Vozes - Hitalo/Banhar.m4a';
import banheiro_audio2 from './Audios/Desejos/Vozes - Hitalo/Banheiro.m4a';
import limpar_audio2 from './Audios/Desejos/Vozes - Hitalo/Limpar.m4a';

import correr_audio2 from './Audios/Desejos/Vozes - Hitalo/Correr.m4a';
import sair_audio2 from './Audios/Desejos/Vozes - Hitalo/Sair.m4a';
import entrar_audio2 from './Audios/Desejos/Vozes - Hitalo/Entrar.m4a';
import dormir_audio2 from './Audios/Desejos/Vozes - Hitalo/Dormir.m4a';
import sentar_audio2 from './Audios/Desejos/Vozes - Hitalo/Sentar.m4a';
import andar_audio2 from './Audios/Desejos/Vozes - Hitalo/Andar.m4a';

import jogar_lixo_audio2 from './Audios/Desejos/Vozes - Hitalo/Jogar no Lixo.m4a';
import brincar_audio2 from './Audios/Desejos/Vozes - Hitalo/Brincar.m4a';
import jogar_audio2 from './Audios/Desejos/Vozes - Hitalo/Jogar.m4a';
import assistir_audio2 from './Audios/Desejos/Vozes - Hitalo/Assistir.m4a';
import ler_audio2 from './Audios/Desejos/Vozes - Hitalo/Ler.m4a';
import descansar_audio2 from './Audios/Desejos/Vozes - Hitalo/Descansar.m4a';

import trocar_roupa_audio2 from './Audios/Desejos/Vozes - Hitalo/Trocar de roupa.m4a';
import nao_audio2 from './Audios/Desejos/Vozes - Hitalo/Não.m4a';
import sim_audio2 from './Audios/Desejos/Vozes - Hitalo/Sim.m4a';
import abracar_audio2 from './Audios/Desejos/Vozes - Hitalo/Abraçar.m4a';
import beijar_audio2 from './Audios/Desejos/Vozes - Hitalo/Beijar.m4a';
import ouvir_musica_audio2 from './Audios/Desejos/Vozes - Hitalo/Ouvir Música.m4a';

import escolher_audio2 from './Audios/Desejos/Vozes - Hitalo/Escolher.m4a';
import desenhar_audio2 from './Audios/Desejos/Vozes - Hitalo/Desenhar.m4a';
import estudar_audio2 from './Audios/Desejos/Vozes - Hitalo/Estudar.m4a';
import casa_audio2 from './Audios/Desejos/Vozes - Hitalo/Casa.m4a';
import quarto_audio2 from './Audios/Desejos/Vozes - Hitalo/Quarto.m4a';
import segurar_audio2 from './Audios/Desejos/Vozes - Hitalo/Segurar.m4a';


const Desejos = ({ searchText, handleCardAudio, selectedVoice }) => {

    //Variável para as cores de fundo das cards

    let desejos_color = 'linear-gradient(180deg, #FFFF00 0%, #FFFFFF 100%';

    
    //Props das Cards - Informações

    //Desejos - Página própria

    const cardsDesejos2 = [
        { card_img: comer_img, card_alt: 'Comer', card_text: 'Comer', card_audio: selectedVoice === 'Mileny' ? comer_audio : comer_audio2 },
        { card_img: beber_img, card_alt: 'Beber', card_text: 'Beber', card_audio: selectedVoice === 'Mileny' ? beber_audio : beber_audio2 },
        { card_img: escovar_dentes_img, card_alt: 'Escovar os Dentes', card_text: 'Escovar os Dentes', card_audio: selectedVoice === 'Mileny' ? escovar_dentes_audio : escovar_dentes_audio2 },
        { card_img: banhar_img, card_alt: 'Banhar', card_text: 'Banhar', card_audio: selectedVoice === 'Mileny' ? banhar_audio : banhar_audio2 },
        { card_img: banheiro_img, card_alt: 'Banheiro', card_text: 'Banheiro', card_audio: selectedVoice === 'Mileny' ? banheiro_audio : banheiro_audio2 },
        { card_img: limpar_img, card_alt: 'Limpar', card_text: 'Limpar', card_audio: selectedVoice === 'Mileny' ? limpar_audio : limpar_audio2 },

        { card_img: correr_img, card_alt: 'Correr', card_text: 'Correr', card_audio: selectedVoice === 'Mileny' ? correr_audio : correr_audio2 },
        { card_img: sair_img, card_alt: 'Sair', card_text: 'Sair', card_audio: selectedVoice === 'Mileny' ? sair_audio : sair_audio2 },
        { card_img: entrar_img, card_alt: 'Entrar', card_text: 'Entrar', card_audio: selectedVoice === 'Mileny' ? entrar_audio : entrar_audio2 },
        { card_img: dormir_img, card_alt: 'Dormir', card_text: 'Dormir', card_audio: selectedVoice === 'Mileny' ? dormir_audio : dormir_audio2 },
        { card_img: sentar_img, card_alt: 'Sentar', card_text: 'Sentar', card_audio: selectedVoice === 'Mileny' ? sentar_audio : sentar_audio2 },
        { card_img: andar_img, card_alt: 'Andar', card_text: 'Andar', card_audio: selectedVoice === 'Mileny' ? andar_audio : andar_audio2 },

        { card_img: jogar_lixo_img, card_alt: 'Jogar no Lixo', card_text: 'Jogar no Lixo', card_audio: selectedVoice === 'Mileny' ? jogar_lixo_audio : jogar_lixo_audio2 },
        { card_img: brincar_img, card_alt: 'Brincar', card_text: 'Brincar', card_audio: selectedVoice === 'Mileny' ? brincar_audio : brincar_audio2 },
        { card_img: jogar_img, card_alt: 'Jogar', card_text: 'Jogar', card_audio: selectedVoice === 'Mileny' ? jogar_audio : jogar_audio2 },
        { card_img: assistir_img, card_alt: 'Assistir', card_text: 'Assistir', card_audio: selectedVoice === 'Mileny' ? assistir_audio : assistir_audio2 },
        { card_img: ler_img, card_alt: 'Ler', card_text: 'Ler', card_audio: selectedVoice === 'Mileny' ? ler_audio : ler_audio2 },
        { card_img: descansar_img, card_alt: 'Descansar', card_text: 'Descansar', card_audio: selectedVoice === 'Mileny' ? descansar_audio : descansar_audio2 },

        { card_img: trocar_roupa_img, card_alt: 'Trocar de Roupa', card_text: 'Trocar de Roupa', card_audio: selectedVoice === 'Mileny' ? trocar_roupa_audio : trocar_roupa_audio2 },
        { card_img: nao_img, card_alt: 'Não', card_text: 'Não', card_audio: selectedVoice === 'Mileny' ? nao_audio : nao_audio2 },
        { card_img: sim_img, card_alt: 'Sim', card_text: 'Sim', card_audio: selectedVoice === 'Mileny' ? sim_audio : sim_audio2 },
        { card_img: abracar_img, card_alt: 'Abraçar', card_text: 'Abraçar', card_audio: selectedVoice === 'Mileny' ? abracar_audio : abracar_audio2 },
        { card_img: beijar_img, card_alt: 'Beijar', card_text: 'Beijar', card_audio: selectedVoice === 'Mileny' ? beijar_audio : beijar_audio2 },
        { card_img: ouvir_musica_img, card_alt: 'Ouvir Música', card_text: 'Ouvir Música', card_audio: selectedVoice === 'Mileny' ? ouvir_musica_audio : ouvir_musica_audio2 },

        { card_img: escolher_img, card_alt: 'Escolher', card_text: 'Escolher', card_audio: selectedVoice === 'Mileny' ? escolher_audio : escolher_audio2 },
        { card_img: desenhar_img, card_alt: 'Desenhar', card_text: 'Desenhar', card_audio: selectedVoice === 'Mileny' ? desenhar_audio : desenhar_audio2 },
        { card_img: estudar_img, card_alt: 'Estudar', card_text: 'Estudar', card_audio: selectedVoice === 'Mileny' ? estudar_audio : estudar_audio2 },
        { card_img: casa_img, card_alt: 'Casa', card_text: 'Casa', card_audio: selectedVoice === 'Mileny' ? casa_audio : casa_audio2 },
        { card_img: quarto_img, card_alt: 'Quarto', card_text: 'Quarto', card_audio: selectedVoice === 'Mileny' ? quarto_audio : quarto_audio2 },
        { card_img: segurar_img, card_alt: 'Segurar', card_text: 'Segurar', card_audio: selectedVoice === 'Mileny' ? segurar_audio : segurar_audio2 },
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