import style from './Institucional.module.css';
import HeaderBlog from '../Home/HeaderBlog';
import logo from '../../Images/logo.png';
import FooterBlog from '../Home/FooterBlog';
import Headerinstitucional from '../Institucional/HeaderInstitucional'
import Devs from '../Institucional/Devs'
import Sobre from '../Institucional/Sobre'

import React from 'react';

function Institucional() {
    return (
        <section id={style.Institucional}>
            <HeaderBlog header_color='rgba(228, 239, 255, 0.95)' header_img={logo} />
            <Headerinstitucional></Headerinstitucional>
            <Devs></Devs>
            <Sobre></Sobre>
            <FooterBlog footer_img={logo} />
        </section>
    )
}

export default Institucional
