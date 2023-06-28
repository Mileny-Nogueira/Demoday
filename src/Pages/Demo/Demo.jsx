import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import style from './Demo.module.scss';

import HomeDemo from './HomeDemo';
import Formalidade from './Formalidade';
import Desejos from './Desejos';
import Sentimentos from './Sentimentos';


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


    //Código para tornar a barra de busca funcional

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }
    

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
            componentToRender = <HomeDemo searchText={searchText} />;
            break;

        case 'Formalidade':
            componentToRender = <Formalidade searchText={searchText} />;
            break;

        case 'Desejos':
            componentToRender = <Desejos searchText={searchText} />
            break;

        case 'Sentimentos':
            componentToRender = <Sentimentos searchText={searchText} />
            break;

        default:
            componentToRender = <HomeDemo searchText={searchText} />
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

                {/*Componente a ser Renderizado*/}

                {componentToRender}
               
            </div>

        </main>
    )
}

export default Demo