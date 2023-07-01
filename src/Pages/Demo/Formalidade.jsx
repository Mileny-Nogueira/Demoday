import React from 'react';
import style from './Formalidade.module.scss';

import Cards from './Cards';


//Imagens das Cards

//Formalidade

import boa_noite_img from './Images/Formalidade/Boa noite.png';
import bom_dia_img from './Images/Formalidade/bom dia.png'; 
import boa_tarde_img from './Images/Formalidade/boa tarde.png';
import desculpa_img from './Images/Formalidade/Desculpa.png'; 
import obrigada_img from './Images/Formalidade/Obrigada.png'; 
import por_favor_img from './Images/Formalidade/por favor .png';

import boa_sorte_img from './Images/Formalidade/Boa Sorte.png';
import bem_vinda_img from './Images/Formalidade/Bem vinda.png';
import de_nada_img from './Images/Formalidade/De nada.png';
import maravilhosa_img from './Images/Formalidade/Maravilhosa.png';
import parabens_img from './Images/Formalidade/Parabéns.png';
import bonita_img from './Images/Formalidade/bonito.png';

import por_que_img from './Images/Formalidade/Por que.png';
import aceito_img from './Images/Formalidade/aceito.png';
import nao_sei_img from './Images/Formalidade/não sei.png';
import espere_img from './Images/Formalidade/espere.png';
import concordo_img from './Images/Formalidade/concordo.png';
import discordo_img from './Images/Formalidade/discordo.png';

import repete_img from './Images/Formalidade/repete.png';
import entendido_img from './Images/Formalidade/entendido.png';
import nao_entendi_img from './Images/Formalidade/não entendi.png';
import boa_semana_img from './Images/Formalidade/boa semana.png';
import sinta_a_vontade_img from './Images/Formalidade/sinta-se a vontade .png';
import com_licenca_img from './Images/Formalidade/Com licença.png';


//Áudios das Cards

//Formalidade - Vozes femininas (Mileny)

import boa_noite_audio from './Audios/Formalidades/Vozes - Mileny/Boa noite.m4a';
import bom_dia_audio from './Audios/Formalidades/Vozes - Mileny/Bom dia.m4a';
import boa_tarde_audio from './Audios/Formalidades/Vozes - Mileny/Boa tarde.m4a';
import desculpa_audio from './Audios/Formalidades/Vozes - Mileny/Desculpa.m4a';
import obrigada_audio from './Audios/Formalidades/Vozes - Mileny/Obrigada.m4a';
import por_favor_audio from './Audios/Formalidades/Vozes - Mileny/Por favor.m4a';

import boa_sorte_audio from './Audios/Formalidades/Vozes - Mileny/Boa sorte.m4a';
import bem_vinda_audio from './Audios/Formalidades/Vozes - Mileny/Bem-vinda.m4a';
import de_nada_audio from './Audios/Formalidades/Vozes - Mileny/De nada.m4a';
import maravilhosa_audio from './Audios/Formalidades/Vozes - Mileny/Maravilhosa.m4a';
import parabens_audio from './Audios/Formalidades/Vozes - Mileny/Parabéns.m4a';
import bonita_audio from './Audios/Formalidades/Vozes - Mileny/Bonita.m4a';

import por_que_audio from './Audios/Formalidades/Vozes - Mileny/Por que.m4a';
import aceito_audio from './Audios/Formalidades/Vozes - Mileny/Aceito.m4a';
import nao_sei_audio from './Audios/Formalidades/Vozes - Mileny/Não sei.m4a';
import espere_audio from './Audios/Formalidades/Vozes - Mileny/Espere.m4a';
import concordo_audio from './Audios/Formalidades/Vozes - Mileny/Concordo.m4a';
import discordo_audio from './Audios/Formalidades/Vozes - Mileny/Discordo.m4a';

import repete_audio from './Audios/Formalidades/Vozes - Mileny/Repete.m4a';
import entendido_audio from './Audios/Formalidades/Vozes - Mileny/Entendido.m4a';
import nao_entendi_audio from './Audios/Formalidades/Vozes - Mileny/Não entendi.m4a';
import boa_semana_audio from './Audios/Formalidades/Vozes - Mileny/Boa semana.m4a';
import sinta_a_vontade_audio from './Audios/Formalidades/Vozes - Mileny/Sinta-se à vontade.m4a';
import com_licenca_audio from './Audios/Formalidades/Vozes - Mileny/Com licença.m4a';


//Formalidade - Vozes Masculinas (Hitalo)

import boa_noite_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa Noite.m4a';
import bom_dia_audio2 from './Audios/Formalidades/Vozes - Hitalo/Bom dia.m4a';
import boa_tarde_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa tarde.m4a';
import desculpa_audio2 from './Audios/Formalidades/Vozes - Hitalo/Desculpa.m4a';
import obrigado_audio2 from './Audios/Formalidades/Vozes - Hitalo/Obrigado.m4a';
import por_favor_audio2 from './Audios/Formalidades/Vozes - Hitalo/Por Favor.m4a';

import boa_sorte_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa sorte.m4a';
import bem_vindo_audio2 from './Audios/Formalidades/Vozes - Hitalo/Bem Vindo.m4a';
import de_nada_audio2 from './Audios/Formalidades/Vozes - Hitalo/De nada.m4a';
import maravilhoso_audio2 from './Audios/Formalidades/Vozes - Hitalo/Maravilhoso.m4a';
import parabens_audio2 from './Audios/Formalidades/Vozes - Hitalo/Parabens.m4a';
import bonito_audio2 from './Audios/Formalidades/Vozes - Hitalo/Bonito.m4a';

import por_que_audio2 from './Audios/Formalidades/Vozes - Hitalo/Por que_.m4a';
import aceito_audio2 from './Audios/Formalidades/Vozes - Hitalo/Aceito.m4a';
import nao_sei_audio2 from './Audios/Formalidades/Vozes - Hitalo/Nao sei.m4a';
import espere_audio2 from './Audios/Formalidades/Vozes - Hitalo/Espere.m4a';
import concordo_audio2 from './Audios/Formalidades/Vozes - Hitalo/Concordo.m4a';
import discordo_audio2 from './Audios/Formalidades/Vozes - Hitalo/Discordo.m4a';

import repete_audio2 from './Audios/Formalidades/Vozes - Hitalo/Repete.m4a';
import entendido_audio2 from './Audios/Formalidades/Vozes - Hitalo/Entendido.m4a';
import nao_entendi_img2 from './Audios/Formalidades/Vozes - Hitalo/Nao entendi.m4a';
import boa_semana_audio2 from './Audios/Formalidades/Vozes - Hitalo/Boa Semana.m4a';
import sinta_a_vontade_audio2 from './Audios/Formalidades/Vozes - Hitalo/Sinta-se a vontade.m4a';
import com_licenca_audio2 from './Audios/Formalidades/Vozes - Hitalo/Com licenca.m4a';


const Formalidade = ({ searchText,  handleCardAudio, selectedVoice }) => {

    //Variável para as cores de fundo das cards

    let formalidade_color = 'linear-gradient(180deg, #38B1FF 0%, rgba(138.96, 206.69, 250.75, 0) 100%)';


    //Props das Cards - Informações

    //Formalidade - Página própria


    const cardsFormalidade2 = [
        { card_img: boa_noite_img, card_alt: 'Boa Noite', card_text: 'Boa Noite', card_audio: selectedVoice === 'Mileny' ? boa_noite_audio : boa_noite_audio2 },
        { card_img: bom_dia_img, card_alt: 'Bom Dia', card_text: 'Bom Dia', card_audio: selectedVoice === 'Mileny' ? bom_dia_audio : bom_dia_audio2 },
        { card_img: boa_tarde_img, card_alt: 'Boa Tarde', card_text: 'Boa Tarde', card_audio: selectedVoice === 'Mileny' ? boa_tarde_audio : boa_tarde_audio2 },
        { card_img: desculpa_img, card_alt: 'Desculpa', card_text: 'Desculpa', card_audio: selectedVoice === 'Mileny' ? desculpa_audio : desculpa_audio2 },
        { card_img: obrigada_img, card_alt: 'Obrigado ou Obrigada', card_text: selectedVoice === 'Mileny' ? 'Obrigada' : 'Obrigado', card_audio: selectedVoice === 'Mileny' ? obrigada_audio : obrigado_audio2 },
        { card_img: por_favor_img, card_alt: 'Por favor', card_text: 'Por Favor', card_audio: selectedVoice === 'Mileny' ? por_favor_audio : por_favor_audio2 },

        { card_img: boa_sorte_img, card_alt: 'Boa Sorte', card_text: 'Boa Sorte', card_audio: selectedVoice === 'Mileny' ? boa_sorte_audio : boa_sorte_audio2 },
        { card_img: bem_vinda_img, card_alt: 'Bem Vindo ou Bem Vinda', card_text: selectedVoice === 'Mileny' ? 'Bem Vinda' : 'Bem Vindo', card_audio: selectedVoice === 'Mileny' ? bem_vinda_audio : bem_vindo_audio2 },
        { card_img: de_nada_img, card_alt: 'De Nada', card_text: 'De Nada', card_audio: selectedVoice === 'Mileny' ? de_nada_audio : de_nada_audio2 },
        { card_img: maravilhosa_img, card_alt: 'Maravilhoso ou Maravilhosa', card_text: selectedVoice === 'Mileny' ? 'Maravilhosa' : 'Maravilhoso', card_audio: selectedVoice === 'Mileny' ? maravilhosa_audio : maravilhoso_audio2 },
        { card_img: parabens_img, card_alt: 'Parabéns', card_text: 'Parabéns', card_audio: selectedVoice === 'Mileny' ? parabens_audio : parabens_audio2 },
        { card_img: bonita_img, card_alt: 'Bonito ou Bonita', card_text: selectedVoice === 'Mileny' ? 'Bonita' : 'Bonito', card_audio: selectedVoice === 'Mileny' ? bonita_audio : bonito_audio2 },

        { card_img: por_que_img, card_alt: 'Por Que?', card_text: 'Por Que?', card_audio: selectedVoice === 'Mileny' ? por_que_audio : por_que_audio2 },
        { card_img: aceito_img, card_alt: 'Aceito', card_text: 'Aceito', card_audio: selectedVoice === 'Mileny' ? aceito_audio : aceito_audio2 },
        { card_img: nao_sei_img, card_alt: 'Não Sei', card_text: 'Não Sei', card_audio: selectedVoice === 'Mileny' ? nao_sei_audio : nao_sei_audio2 },
        { card_img: espere_img, card_alt: 'Espere', card_text: 'Espere', card_audio: selectedVoice === 'Espere' ? espere_audio : espere_audio2 },
        { card_img: concordo_img, card_alt: 'Concordo', card_text: 'Concordo', card_audio: selectedVoice === 'Mileny' ? concordo_audio : concordo_audio2 },
        { card_img: discordo_img, card_alt: 'Discordo', card_text: 'Discordo', card_audio: selectedVoice === 'Mileny' ? discordo_audio : discordo_audio2 },

        { card_img: repete_img, card_alt: 'Repete', card_text: 'Repete', card_audio: selectedVoice === 'Mileny' ? repete_audio : repete_audio2 },
        { card_img: entendido_img, card_alt: 'Entendido', card_text: 'Entendido', card_audio: selectedVoice === 'Mileny' ? entendido_audio : entendido_audio2 },
        { card_img: nao_entendi_img, card_alt: 'Não Entendi', card_text: 'Não Entendi', card_audio: selectedVoice === 'Mileny' ? nao_entendi_audio : nao_entendi_img2 },
        { card_img: boa_semana_img, card_alt: 'Boa Semana', card_text: 'Boa Semana', card_audio: selectedVoice === 'Mileny' ? boa_semana_audio : boa_semana_audio2 },
        { card_img: sinta_a_vontade_img, card_alt: 'Sinta-se à Vontade', card_text: 'Sinta-se à Vontade', card_audio: selectedVoice === 'Mileny' ? sinta_a_vontade_audio : sinta_a_vontade_audio2 },
        { card_img: com_licenca_img, card_alt: 'Com Licença', card_text: 'Com Licença', card_audio: selectedVoice === 'Mileny' ? com_licenca_audio : com_licenca_audio2 }
    ]
    

    //Buscar cards - Formalidades - Página própria

    const filteredCardsFormalidade2 = cardsFormalidade2.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );
    

    //Código JSX

    return (
        <main>
            {/*Cards de Formalidade*/}
                
            <section id={style.formalidade}>
                <h2>Formalidade: </h2>
                <div>
                    {filteredCardsFormalidade2.length > 0 ? (
                        filteredCardsFormalidade2.map((card, index) => (
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
        </main>
    )
}

export default Formalidade