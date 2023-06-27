import React, { useState } from 'react';
import style from './Sentimentos.module.scss';

import Cards from './Cards';


const Sentimentos = ({ filteredCardsSentimentos2 }) => {

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