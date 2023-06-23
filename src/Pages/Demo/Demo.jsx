import React, { useState } from 'react';
import style from './Demo.module.scss';

import Cards from './Cards';

//Imagens das Cards - Formalidade

import boa_noite from './Images/Formalidade/Boa noite.png';
import bom_dia from './Images/Formalidade/bom dia.png';
import boa_tarde from './Images/Formalidade/boa tarde.png';
import desculpa from './Images/Formalidade/Desculpa.png';
import obrigada from './Images/Formalidade/Obrigada.png';
import por_favor from './Images/Formalidade/por favor .png';

import logo from '../../Images/logo.png';
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

    //Função para os audios das cards

    let card_audio = new Audio();
    card_audio.src = '';

    //Variável para as cores de fundo das cards e os audios das mesmas

    let formalidade_color = 'linear-gradient(180deg, #469BD2 0%, #0069AD 100%)';

    //


    //Código JSX

    return (
        <main id={style.demo}>

            {/*Menu lateral*/}
            <div className={`${style.menu_lateral} ${menuLateralVisible ? style.visible : ''}`}>
            {/* ou: className={style.menu_lateral + (menuLateralVisible ? ' ' + style.visible : '')} */}
                <nav>
                    <img src={logo} alt="logo Pecto" id={style.logo} />
                </nav>
            </div>

            {/*Seção principal*/}
            <div id={style.main} className={`${style.main} ${mainVisible ? style.visible2 : ''}`}>
            {/* ou: className={style.main + (mainVisible ? ' ' + style.visible2 : '')} */}

                {/*Header*/}
                <header id={style.header} className={`${style.header} ${headerVisible ? style.visible : ''}`}>
                    <nav>
                        <div id={style.menu} onClick={() => {handleMenuClickMenu(); handleMenuClickMain()}} ></div>
                        <div id={style.nav_right}>
                            <input type="search" placeholder='Procurar' />
                            <img src={conta} alt="Clique para ver a sua conta" id={style.conta} title='Minha Conta' />
                        </div>
                    </nav>
                </header>

                {/*Cards de Formalidade*/}
                    
                <section id={style.formalidade}>
                    <h2>Formalidade:</h2>
                    <div>
                        <Cards card_color={formalidade_color} card_img={boa_noite} card_alt='Boa noite' card_text="Boa Noite" />
                        <Cards card_color={formalidade_color} card_img={bom_dia} card_alt='Bom dia' card_text='Bom Dia' />
                        <Cards card_color={formalidade_color} card_img={boa_tarde} card_alt='Boa tarde' card_text='Boa Tarde' />
                        <Cards card_color={formalidade_color} card_img={desculpa} card_alt='Desculpa' card_text='Desculpa' />
                        <Cards card_color={formalidade_color} card_img={obrigada} card_alt='Obrigado ou obrigada' card_text='Obrigado(a)' />
                        <Cards card_color={formalidade_color} card_img={por_favor} card_alt='Por favor' card_text='Por Favor' />


                        <Cards card_color={formalidade_color} card_img={boa_noite} card_alt='Boa noite' card_text="Boa Noite" />
                        <Cards card_color={formalidade_color} card_img={bom_dia} card_alt='Bom dia' card_text='Bom Dia' />
                        <Cards card_color={formalidade_color} card_img={boa_tarde} card_alt='Boa tarde' card_text='Boa Tarde' />
                        <Cards card_color={formalidade_color} card_img={desculpa} card_alt='Desculpa' card_text='Desculpa' />
                        <Cards card_color={formalidade_color} card_img={obrigada} card_alt='Obrigado ou obrigada' card_text='Obrigado(a)' />
                        <Cards card_color={formalidade_color} card_img={por_favor} card_alt='Por favor' card_text='Por Favor' />
                    </div>
                </section>

            </div>
        </main>
    )
}

export default Demo