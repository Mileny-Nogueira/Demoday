import React, { useState } from 'react';
import style from './Desejos.module.scss';

import Cards from './Cards';


const Desejos = ({ filteredCardsDesejos2 }) => {

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