import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import style from './Demo.module.scss';

import HomeDemo from './HomeDemo';
import Formalidade from './Formalidade';
import Desejos from './Desejos';


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

//Sentimentos - Emoções

import triste_img from './Images/Sentimentos/Triste.png';
import nojo_img from './Images/Sentimentos/Nojo.png';
import curiosa_img from './Images/Sentimentos/Curioso.png';
import dor_img from './Images/Sentimentos/Dor.png';
import duvida_img from './Images/Sentimentos/Duvida.png';
import calma_img from './Images/Sentimentos/Calmo.png';


//Áudios das Cards

//Formalidade - Vozes femininas (Mileny)

import boa_noite_audio from './Audios/Formalidades/Boa noite.m4a';
import bom_dia_audio from './Audios/Formalidades/Bom dia.m4a';
import boa_tarde_audio from './Audios/Formalidades/Boa tarde.m4a';
import desculpa_audio from './Audios/Formalidades/Desculpa.m4a';
import obrigada_audio from './Audios/Formalidades/Obrigada.m4a';
import por_favor_audio from './Audios/Formalidades/Por favor.m4a';

import boa_sorte_audio from './Audios/Formalidades/Boa sorte.m4a';
import bem_vinda_audio from './Audios/Formalidades/Bem-vinda.m4a';
import de_nada_audio from './Audios/Formalidades/De nada.m4a';
import maravilhosa_audio from './Audios/Formalidades/Maravilhosa.m4a';
import parabens_audio from './Audios/Formalidades/Parabéns.m4a';
import bonita_audio from './Audios/Formalidades/Bonita.m4a';

import por_que_audio from './Audios/Formalidades/Por que.m4a';
import aceito_audio from './Audios/Formalidades/Aceito.m4a';
import nao_sei_audio from './Audios/Formalidades/Não sei.m4a';
import espere_audio from './Audios/Formalidades/Espere.m4a';
import concordo_audio from './Audios/Formalidades/Concordo.m4a';
import discordo_audio from './Audios/Formalidades/Discordo.m4a';

import repete_audio from './Audios/Formalidades/Repete.m4a';
import entendido_audio from './Audios/Formalidades/Entendido.m4a';
import nao_entendi_audio from './Audios/Formalidades/Não entendi.m4a';
import boa_semana_audio from './Audios/Formalidades/Boa semana.m4a';
import sinta_a_vontade_audio from './Audios/Formalidades/Sinta-se à vontade.m4a';
import com_licenca_audio from './Audios/Formalidades/Com licença.m4a';

//Desejos - Vozes femininas (Mileny)

import comer_audio from './Audios/Desejos/Comer.m4a';
import beber_audio from './Audios/Desejos/Beber.m4a';
import escovar_dentes_audio from './Audios/Desejos/Escovar os dentes.m4a';
import banhar_audio from './Audios/Desejos/Banhar.m4a';
import banheiro_audio from './Audios/Desejos/Banheiro.m4a';
import limpar_audio from './Audios/Desejos/Limpar.m4a';

import correr_audio from './Audios/Desejos/Correr.m4a';
import sair_audio from './Audios/Desejos/Sair.m4a';
import entrar_audio from './Audios/Desejos/Entrar.m4a';
import dormir_audio from './Audios/Desejos/Dormir.m4a';
import sentar_audio from './Audios/Desejos/Sentar.m4a';
import andar_audio from './Audios/Desejos/Andar.m4a';

import jogar_lixo_audio from './Audios/Desejos/Jogar no lixo.m4a';
import brincar_audio from './Audios/Desejos/Brincar.m4a';
import jogar_audio from './Audios/Desejos/Jogar.m4a';
import assistir_audio from './Audios/Desejos/Assistir.m4a';
import ler_audio from './Audios/Desejos/Ler.m4a';
import descansar_audio from './Audios/Desejos/Descansar.m4a';


//Sentimentos - Emoções

import triste_audio from './Audios/Sentimentos - Emoções/Triste.m4a';
import nojo_audio from './Audios/Sentimentos - Emoções/Nojo.m4a';
import curiosa_audio from './Audios/Sentimentos - Emoções/Curiosa.m4a';
import dor_audio from './Audios/Sentimentos - Emoções/Dor.m4a';
import duvida_audio from './Audios/Sentimentos - Emoções/Dúvida.m4a';
import calma_audio from './Audios/Sentimentos - Emoções/Calma.m4a';


//Imagens gerais da página

import logo from '../../Images/logo.png';
import home from '../../Images/Home_demo.png';
import seta from '../../Images/Seta_demo.png';
import lupa from '../../Images/Search_lupa.png';
import conta from '../../Images/Login_conta_demo.png';

const Demo = () => {

    //Script para tornar a Header e a Main (style.main) funcionais e móveis

    const [menuLateralVisible, setMenuLateralVisible] = useState(false);
    const [mainVisible, setMainVisible] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(false);

    const handleMenuClickMenu = () => {
        setMenuLateralVisible(!menuLateralVisible);
        setHeaderVisible(!headerVisible);
    }

    const handleMenuClickMain = () => {
        setMainVisible(!mainVisible);
    }


    //Props das Cards - Informações

    //Formalidade - Home

    const cardsFormalidade = [
        { card_img: boa_noite_img, card_alt: 'Boa Noite', card_text: 'Boa Noite', card_audio: boa_noite_audio },
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


    //Formalidade - Página própria

    const cardsFormalidade2 = [
        { card_img: boa_noite_img, card_alt: 'Boa Noite', card_text: 'Boa Noite', card_audio: boa_noite_audio },
        { card_img: bom_dia_img, card_alt: 'Bom Dia', card_text: 'Bom Dia', card_audio: bom_dia_audio },
        { card_img: boa_tarde_img, card_alt: 'Boa Tarde', card_text: 'Boa Tarde', card_audio: boa_tarde_audio },
        { card_img: desculpa_img, card_alt: 'Desculpa', card_text: 'Desculpa', card_audio: desculpa_audio },
        { card_img: obrigada_img, card_alt: 'Obrigado ou Obrigada', card_text: 'Obrigado(a)', card_audio: obrigada_audio },
        { card_img: por_favor_img, card_alt: 'Por favor', card_text: 'Por Favor', card_audio: por_favor_audio },

        { card_img: boa_sorte_img, card_alt: 'Boa Sorte', card_text: 'Boa Sorte', card_audio: boa_sorte_audio },
        { card_img: bem_vinda_img, card_alt: 'Bem Vindo ou Bem Vinda', card_text: 'Bem Vindo(a)', card_audio: bem_vinda_audio },
        { card_img: de_nada_img, card_alt: 'De Nada', card_text: 'De Nada', card_audio: de_nada_audio },
        { card_img: maravilhosa_img, card_alt: 'Maravilhoso ou Maravilhosa', card_text: 'Maravilhoso(a)', card_audio: maravilhosa_audio },
        { card_img: parabens_img, card_alt: 'Parabéns', card_text: 'Parabéns', card_audio: parabens_audio },
        { card_img: bonita_img, card_alt: 'Bonito ou Bonita', card_text: 'Bonito(a)', card_audio: bonita_audio },

        { card_img: por_que_img, card_alt: 'Por Que', card_text: 'Por Que', card_audio: por_que_audio },
        { card_img: aceito_img, card_alt: 'Aceito', card_text: 'Aceito', card_audio: aceito_audio },
        { card_img: nao_sei_img, card_alt: 'Não Sei', card_text: 'Não Sei', card_audio: nao_sei_audio },
        { card_img: espere_img, card_alt: 'Espere', card_text: 'Espere', card_audio: espere_audio },
        { card_img: concordo_img, card_alt: 'Concordo', card_text: 'Concordo', card_audio: concordo_audio },
        { card_img: discordo_img, card_alt: 'Discordo', card_text: 'Discordo', card_audio: discordo_audio },

        { card_img: repete_img, card_alt: 'Repete', card_text: 'Repete', card_audio: repete_audio },
        { card_img: entendido_img, card_alt: 'Entendido', card_text: 'Entendido', card_audio: entendido_audio },
        { card_img: nao_entendi_img, card_alt: 'Não Entendi', card_text: 'Não Entendi', card_audio: nao_entendi_audio },
        { card_img: boa_semana_img, card_alt: 'Boa Semana', card_text: 'Boa Semana', card_audio: boa_semana_audio },
        { card_img: sinta_a_vontade_img, card_alt: 'Sinta-se à Vontade', card_text: 'Sinta-se à Vontade', card_audio: sinta_a_vontade_audio },
        { card_img: com_licenca_img, card_alt: 'Com Licença', card_text: 'Com Licença', card_audio: com_licenca_audio }
    ]

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


    //Código para tornar a barra de busca funcional

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

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


    //Buscar cards - Formalidades - Página própria

    const filteredCardsFormalidade2 = cardsFormalidade2.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );

    //Buscar cards - Desejos - Página própria

    const filteredCardsDesejos2 = cardsDesejos2.filter((card) =>
        card.card_alt.toLowerCase().includes(searchText.toLowerCase())
    );


    //Mensagem de Bom dia, Boa Tarde ou Boa Noite

    let mensagem = new Date();
    let horario = mensagem.getHours();
    let cumprimento;

    if (horario >= 6 && horario < 12) {
        cumprimento = "Bom dia!";
    } else if (horario >= 12 && horario <= 17) {
        cumprimento = "Boa tarde!";
    } else {
        cumprimento = "Boa noite!";
    }
    

    //Código para trocar de página das Cards

    const [selectedContainer, setSelectedContainer] = useState('HomeDemo');

    const handleLabelClick = (component) => {
        setSelectedContainer(component);
    }

    let componentToRender;

    switch (selectedContainer) {
        case 'HomeDemo':
            componentToRender = <HomeDemo filteredCardsFormalidade={filteredCardsFormalidade} filteredCardsDesejos={filteredCardsDesejos} filteredCardsSentimentos={filteredCardsSentimentos} />;
            break;

        case 'Formalidade':
            componentToRender = <Formalidade filteredCardsFormalidade2={filteredCardsFormalidade2} />;
            break;

        case 'Desejos':
            componentToRender = <Desejos filteredCardsDesejos2={filteredCardsDesejos2} />
            break;

        case 'Sentimentos':
            componentToRender = <HomeDemo filteredCardsFormalidade={filteredCardsFormalidade} filteredCardsDesejos={filteredCardsDesejos} filteredCardsSentimentos={filteredCardsSentimentos} />
            break;

        default:
            componentToRender = <HomeDemo filteredCardsFormalidade={filteredCardsFormalidade} filteredCardsDesejos={filteredCardsDesejos} filteredCardsSentimentos={filteredCardsSentimentos} />
    }


    //Código JSX

    return (
        <main id={style.demo} >
            <div className={`${style.main} ${mainVisible ? style.visible : ''}`}>
            {/* ou: className={style.main + (mainVisible ? ' ' + style.visible2 : '')} */}

                {/*Menu lateral*/}
                <div className={`${style.menu_lateral} ${menuLateralVisible ? style.visible2 : ''}`}>
                    <nav>
                        <img src={logo} alt="logo Pecto" id={style.logo} />
                        <ul>
                            <Nav.Link href='/' style={{textDecoration: 'none', color: '#000'}}>
                               <li>
                                    <div>
                                        <img src={home} alt="Clique aqui para ir à home" />
                                        <p>Home</p>
                                    </div>
                               </li>
                            </Nav.Link>
                        </ul>
                    </nav>
                </div>

                {/*Seção principal*/}
                <div id={style.section_main}>

                    {/*Header*/}
                    <header id={style.header} className={`${style.header} ${headerVisible ? style.visible2 : ''}`}>
                        <nav>
                            <img src={seta} alt='Clique para abrir o menu lateral' id={style.menu} onClick={() => {handleMenuClickMenu(); handleMenuClickMain()}} title='Ver Menu' />
                            <div id={style.nav_right}>
                                <div>
                                    <input type="search" placeholder='Procurar' value={searchText} onChange={handleSearchChange} />
                                    <img src={lupa} alt="Lupa" />
                                </div>
                                <img src={conta} alt="Clique para ver a sua conta" id={style.conta} title='Minha Conta' />
                            </div>
                        </nav>
                    </header>

                    {/*Menu Central*/}

                    <section id={style.menu_central}>
                        <img src={logo} alt="logo da Pecto" />
                        <h2>Se comunique com quem quiser</h2>
                        <h3>{ cumprimento }</h3>
                    </section>

                    {/*Escolher o menu a ser acessado: Home, Formalidade, Desejos ou Sentimentos*/}

                    <section id={style.escolher_menu}>
                        <div>
                            <p className={style.menu_opcoes} onClick={() => {handleLabelClick('HomeDemo')}} style={{ color: `${selectedContainer === 'HomeDemo' ? '#FFF' : ''}` }}>Home</p>
                            <p className={style.menu_opcoes} onClick={() => {handleLabelClick('Formalidade')}} style={{ color: `${selectedContainer === 'Formalidade' ? '#FFF' : ''}` }}>Formalidade</p>
                            <p className={style.menu_opcoes} onClick={() => {handleLabelClick('Desejos')}} style={{ color: `${selectedContainer === 'Desejos' ? '#FFF' : ''}` }}>Desejos</p>
                            <p className={style.menu_opcoes} onClick={() => {handleLabelClick('Sentimentos')}} style={{ color: `${selectedContainer === 'Sentimentos' ? '#FFF' : ''}` }}>Sentimentos</p>
                            <span style={{ left: `${selectedContainer === 'HomeDemo' ? '0' : selectedContainer === 'Formalidade' ? '25%' : selectedContainer === 'Desejos' ? '50%' : '75%'}` }}></span>
                        </div>
                    </section>
                </div>

                {componentToRender}
               
            </div>

        </main>
    )
}

export default Demo