import React from 'react';
import { Nav } from 'react-bootstrap';
import style from './Blog.module.css';

import HeaderBlog from '../Home/HeaderBlog';
import Section1Blog from './Section1Blog';
import Section2Blog from './Section2Blog';
import Newsletter from './Newsletter';
import FooterBlog from '../Home/FooterBlog';

import logo_blog from '../../Images/Logo_Header_Blog.png';
import Blog_PCD1 from '../../Images/Blog_PCD1.png'
import Blog_PCD2 from '../../Images/Blog_PCD2.png';
import Blog_PCD3 from '../../Images/Blog_PCD3.png';
import Menina_PCD1 from '../../Images/Menina PCD_img1(2).png';
import Menina_PCD2 from '../../Images/Menina PCD_img2.png';

function Blog() {
    return (
        <main>
            <HeaderBlog header_color='rgba(255, 255, 255, 0.95)' header_img={logo_blog} />
            <Section1Blog />
            <section id={style.section_blog}>
                <Nav.Link href='/Materia4' style={{textDecoration: 'none'}}><Section2Blog blog_img={Blog_PCD1} alt='Acesso a publicação 1' background_color='#005BBB' text_color='#FFF' blog_theme="Tema" blog_title='Exemplo de título de matéria' /></Nav.Link>
                <Nav.Link href='/Materia4' style={{textDecoration: 'none'}}><Section2Blog blog_img={Blog_PCD2} alt='Acesso a publicação 2' background_color='#005BBB' text_color='#FFF' blog_theme="Tema" blog_title='Exemplo de título de matéria' /></Nav.Link>
                <Nav.Link href='/Materia4' style={{textDecoration: 'none'}}><Section2Blog blog_img={Blog_PCD3} alt='Acesso a publicação 3' background_color='#005BBB' text_color='#FFF' blog_theme="Tema" blog_title='Exemplo de título de matéria' /></Nav.Link>
                <Nav.Link href='/Materia4' style={{textDecoration: 'none'}}><Section2Blog blog_img={Menina_PCD1} alt='Acesso a publicação 4' background_color='#FF9800' text_color='#000' blog_theme='Comportamento' blog_title='Dificuldades enfrentadas por pais de crianças com deficiência' /></Nav.Link>
                <Nav.Link href='/Materia4' style={{textDecoration: 'none'}}><Section2Blog blog_img={Menina_PCD2} alt='Acesso a publicação 5' background_color='#FF9800' text_color='#000' blog_theme="Tema" blog_title='Exemplo de título de matéria' /></Nav.Link>
                <Nav.Link href='/Materia4' style={{textDecoration: 'none'}}><Section2Blog /></Nav.Link>
            </section>
            <Newsletter />
            <FooterBlog footer_img={logo_blog} />
        </main>
    )
}

export default Blog