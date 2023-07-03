import React from 'react';
import style from './Pessoa.module.scss';

import Cards from './Cards';


//Imagens das Cards

//Pessoa - Pronomes

import eu_img from './Images/Pessoa - Pronomes/Eu.png';
import voce_img from './Images/Pessoa - Pronomes/Você.png';
import ele_img from './Images/Pessoa - Pronomes/Ele.png';
import ela_img from './Images/Pessoa - Pronomes/Ela.png'
import nos_img from './Images/Pessoa - Pronomes/Nós.png';
import voces_img from './Images/Pessoa - Pronomes/Vocês.png';

import eles_img from './Images/Pessoa - Pronomes/Eles.png';
import elas_img from './Images/Pessoa - Pronomes/Elas.png';


//Áudios das Cards

//Pessoa - Vozes femininas (Mileny)

import eu_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Eu.m4a';
import voce_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Você.m4a';
import ele_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Ele.m4a';
import ela_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Ela.m4a';
import nos_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Nós.m4a';
import voces_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Vocês.m4a';

import eles_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Eles.m4a';
import elas_audio from './Audios/Pessoa - Pronomes/Vozes - Mileny/Elas.m4a';


//Pessoa - Vozes masculinas (Hitalo)

import eu_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/Eu.m4a';
import voce_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/você.m4a';
import ele_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/ele.m4a';
import ela_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/ela.m4a';
import nos_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/nós.m4a';
import voces_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/vocês.m4a';

import eles_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/eles.m4a';
import elas_audio2 from './Audios/Pessoa - Pronomes/Vozes - Hitalo/elas.m4a';


const Pessoa = ({ searchText, handleCardAudio, selectedVoice }) => {

    //Variável para as cores de fundo das cards

    let pessoa_color = 'linear-gradient(180deg, #FF8100 0%, rgba(255, 129.06, 0, 0) 100%)';

    
    //Props das Cards - Informações

    //Pessoa - Pronomes - Página própria

    const cardsPessoa2 = [
        { card_img: eu_img, card_alt: 'Eu', card_text: 'Eu', card_audio: selectedVoice === 'Mileny' ? eu_audio : eu_audio2 },
        { card_img: voce_img, card_alt: 'Você', card_text: 'Você', card_audio: selectedVoice === 'Mileny' ? voce_audio : voce_audio2 },
        { card_img: ele_img, card_alt: 'Ele', card_text: 'Ele', card_audio: selectedVoice === 'Mileny' ? ele_audio : ele_audio2 },
        { card_img: ela_img, card_alt: 'Ela', card_text: 'Ela', card_audio: selectedVoice === 'Mileny' ? ela_audio : ela_audio2 },
        { card_img: nos_img, card_alt: 'Nós', card_text: 'Nós', card_audio: selectedVoice === 'Mileny' ? nos_audio : nos_audio2 },
        { card_img: voces_img, card_alt: 'Vocês', card_text: 'Vocês', card_audio: selectedVoice === 'Mileny' ? voces_audio : voces_audio2 },

        { card_img: eles_img, card_alt: 'Eles', card_text: 'Eles', card_audio: selectedVoice === 'Mileny' ? eles_audio : eles_audio2 },
        { card_img: elas_img, card_alt: 'Elas', card_text: 'Elas', card_audio: selectedVoice === 'Mileny' ? elas_audio : elas_audio2 }
    ]

    
    //Buscar cards - Desejos - Página própria

    const filteredCardsPessoa2 = cardsPessoa2.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );


    //Código JSX

    return (
        <main>
            {/*Cards de Pessoa*/}
                
            <section id={style.pessoa}>
                <h2>Pessoa - Pronomes: </h2>
                <div>
                    {filteredCardsPessoa2.length > 0 ? (
                        filteredCardsPessoa2.map((card, index) => (
                            <Cards
                                key={index}
                                card_color={pessoa_color}
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

export default Pessoa