import React, { useRef } from 'react';
import { Nav } from 'react-bootstrap';
import style from './HeaderBlog.module.css';

import logo from '../../Images/logo.png';
import daltonicos from '../../Images/daltonicos.png';
import letra_maior from '../../Images/letramaior.png';
import acessibilidade from '../../Images/acessibilidade.png';

function HeaderBlog(props) {

    const menuRef = useRef(null);

    function clickMenu(){
        if(menuRef.current.style.display === 'block'){
            menuRef.current.style.display = 'none';
        }
        else{
            menuRef.current.style.display = 'block';
        }
    }

    return (
        <header id={style.header_blog} style={{backgroundColor: props.header_color}}>
            <nav>
                <input type="checkbox" className={style.menu_faketrigger} onClick={clickMenu} />
                <div className={style.menu_lines}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul id={style.menu} ref={menuRef} style={{backgroundColor: props.menu_color}}>
                    <div>
                        <img src={logo} alt="logo" id={style.logo_blog1} />
                        <Nav.Link href='/' style={{textDecoration: 'none'}}><li>Home</li></Nav.Link>
                        <Nav.Link href='/Blog' style={{textDecoration: 'none'}}><li>Blog</li></Nav.Link>
                        <li>Cadastro</li>
                        <li>Login</li>
                        <li>Demo</li> 
                    </div>
                </ul>
            </nav>
            <img src={logo} alt="logo" id={style.logo_blog2} />
            <div className={style.acessibilidade}>
                <button><img src={daltonicos} alt="ícone para pessoas daltônicas" /></button>
                <button><img src={letra_maior} alt="ícone para aumentar a letra" /></button>
                <button><img src={acessibilidade} alt="ícone para acessibilidade" /></button>
            </div>
        </header>
    )
}

export default HeaderBlog