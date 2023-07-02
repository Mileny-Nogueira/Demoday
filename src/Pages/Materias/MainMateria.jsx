import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import style from './MainMateria.module.css';

import Comentario from '../Blog/Comentario';
import Section2Blog from '../Blog/Section2Blog';

import Blog_PCD1 from '../../Images/Blog_PCD1.png'
import Blog_PCD2 from '../../Images/Blog_PCD2.png';
import Blog_PCD3 from '../../Images/Blog_PCD3.png';
import Menina_PCD1 from '../../Images/Menina PCD_img1(2).png';
import Menina_PCD2 from '../../Images/Menina PCD_img2.png';
import criancas from '../../Images/crianças.jpeg';

import lupa from '../../Images/Search_lupa.png';

const MainMateria = (props) => {

    //Informações das Matérias

    const articleInformations = [
        { link: '/Materia1', blog_img: Blog_PCD1, blog_alt: 'Inclusão', background_color: '#005BBB', text_color: '#FFF', blog_theme: "Inclusão", blog_title: 'PCDs ainda enfrentam difícil inclusão educação pública' },

        { link: '/Materia2', blog_img: Blog_PCD2, blog_alt: 'Tecnologia',  background_color: '#005BBB', text_color: '#FFF', blog_theme: "Tecnologia", blog_title: 'Tecnologia como uma ferramenta de inclusão para PCD' },

        { link: '/Materia3', blog_img: Blog_PCD3, blog_alt: 'Comunicação', background_color: '#005BBB', text_color: '#FFF', blog_theme: "Comunicação", blog_title: 'Fala e comunicação' },

        { link: '/Materia4', blog_img: Menina_PCD1, blog_alt: 'Inclusão', background_color: '#005BBB', text_color: '#FFF', blog_theme: "Comportamento", blog_title: 'Dificuldades enfrentadas por pais de crianças com deficiência' },

        { link: '/Materia5', blog_img: Menina_PCD2, blog_alt: 'Inclusão', background_color: '#005BBB', text_color: '#FFF', blog_theme: "Dificuldade", blog_title: 'Deficiência e dificuldades de expressão verbal: alternativas para promover a comunicação' },

        { link: '/Materia6', blog_img: criancas, blog_alt: 'Inclusão', background_color: '#005BBB', text_color: '#FFF', blog_theme: "Acessibidade", blog_title: 'Exclusão e falta de acessibilidade afeta estudantes surdos' }
    ]


    //Código para tornar a barra de busca funcional

    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    }

    const filteredArticles = articleInformations.filter((articles) =>
        articles.blog_theme.toLowerCase().includes(searchText.toLowerCase())
    )


    //Código JSX Principal

    return (
        <main id={style.main_materia}>
            <section>
                <div id={style.materia_part1}>
                    <div className={style.materia_topo}>
                        <h1>{props.titulo_materia}</h1>
                        <h2 style={{backgroundColor: props.tema_cor, color: props.cor_fonte}}>{props.tema_materia}</h2>
                    </div>
                    <img src={props.materia_img} alt={props.materia_alt} />
                    <span>{props.publicacao_materia} | Pecto</span>
                    {props.materia_texto.map((texto, index) => (
                          <p key={index}>{texto}</p>
                    ))}
                </div>
                <div id={style.materia_part2}>
                    <div className={style.materia_topo}>
                        <div>
                            <input type="search" placeholder='Procurar' value={searchText} onChange={handleSearchChange} />
                            <img src={lupa} alt="Pesquisar pelo blog" className={style.lupa} />
                        </div>
                    </div>
                    <div className={style.materias}>
                        {filteredArticles.length > 0 ? (
                            filteredArticles.map((articles, index) => (
                                <Nav.Link key={index} href={articles.link} style={{ textDecoration : 'none' }}>
                                    <Section2Blog
                                        blog_img={articles.blog_img}
                                        blog_alt={articles.blog_alt}
                                        background_color={articles.background_color}
                                        text_color={articles.text_color}
                                        blog_theme={articles.blog_theme}
                                        blog_title={articles.blog_title}
                                    />
                                </Nav.Link>
                            ))
                        ) : (
                            <p>Matéria não encontrada</p>
                        )}
                    </div>
                </div>
            </section>
            <Comentario />
        </main>
    )
}

export default MainMateria