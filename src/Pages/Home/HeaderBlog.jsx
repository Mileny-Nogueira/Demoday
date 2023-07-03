import React, { useRef } from 'react';
import { Nav } from 'react-bootstrap';
import style from './HeaderBlog.module.css';

const HeaderBlog = (props) => {

    //Efeito do Menu da Header

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
                <ul id={style.menu} ref={menuRef} style={{backgroundColor: props.header_color}}>
                    <div>
                        <img src={props.header_img} alt="logo" id={style.logo_blog1} />
                        <Nav.Link href='/' style={{textDecoration: 'none'}}><li>Home</li></Nav.Link>
                        <Nav.Link href='/Blog' style={{textDecoration: 'none'}}><li>Blog</li></Nav.Link>
                        <Nav.Link href='/LoginCadastro?cadastro=true' style={{textDecoration: 'none'}}> <li>Cadastro</li></Nav.Link>
                        <Nav.Link href='/LoginCadastro?#' style={{textDecoration: 'none'}}><li>Login</li></Nav.Link>
                        <Nav.Link href='/Demo' style={{textDecoration: 'none'}}><li>Demo</li></Nav.Link>
                    </div>
                </ul>
            </nav>
            <img src={props.header_img} alt="logo" id={style.logo_blog2} />
            <div className={style.acessibilidade}>
                {/*Acessibilidade Geral*/}
            </div>
        </header>
    )
}

export default HeaderBlog