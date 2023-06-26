import React, { useState } from 'react';
import style from './HomeDemo.module.scss';

import Cards from './Cards';


const HomeDemo = ({ filteredCardsFormalidade, filteredCardsDesejos, filteredCardsSentimentos }) => {

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