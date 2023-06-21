import React, { useState } from 'react';
import style from './Demo.module.scss';

const Demo = () => {

    //Script para tornar a Header e a Main (style.main) funcionais e móveis

    const [menuLateralVisible, setMenuLateralVisible] = useState(false);
    const [mainVisible, setMainVisible] = useState(false);

    const handleMenuClickMenu = () => {
        setMenuLateralVisible(!menuLateralVisible);
    }

    const handleMenuClickMain = () => {
        setMainVisible(!mainVisible);
    }

    //Código para não mostrar o scroll lateral ao mover a página para a direita


    //Código JSX

    return (
        <main id={style.demo}>
            <header className={style.menu_lateral + (menuLateralVisible ? ' ' + style.visible : '')}>
                <nav></nav>
            </header>
            <div id={style.main} className={style.main + (mainVisible ? ' ' + style.visible2 : '')}>
                <header id={style.header}>
                    <div id={style.menu} onClick={() => {handleMenuClickMenu(); handleMenuClickMain()}} ></div>
                </header>
                    

            </div>
        </main>
    )
}

export default Demo