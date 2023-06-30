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

function MainMateria(props) {
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
                            <input type="search" placeholder='Procurar' />
                            <img src={lupa} alt="Pesquisar pelo blog" className={style.lupa} />
                        </div>
                    </div>
                    <div>
                        <Section2Blog blog_img={Blog_PCD1} blog_alt='Inclusão' background_color='#005BBB' text_color='#FFF' blog_theme="Inclusão"  />

                        <Section2Blog blog_img={Blog_PCD2} blog_alt='Tecnologia'  background_color='#005BBB' text_color='#FFF' blog_theme="Tecnologia"  />

                        <Section2Blog blog_img={Blog_PCD3} blog_alt='Comunicação' background_color='#005BBB' text_color='#FFF' blog_theme="Comunicação"  />
                        
                        <Section2Blog blog_img={Menina_PCD1} blog_alt='Inclusão' background_color='#005BBB' text_color='#FFF' blog_theme="Comportamento" />
                        
                        <Section2Blog blog_img={Menina_PCD2} blog_alt='Inclusão'  background_color='#005BBB' text_color='#FFF' blog_theme="Dificuldade" />

                        <Section2Blog blog_img={criancas} blog_alt='Inclusão' background_color='#005BBB' text_color='#FFF' blog_theme="Acessibidade"  />
                    </div>
                </div>
            </section>
            <Comentario />
        </main>
    )
}

export default MainMateria

/* <div id={style.materia_part1}>
                    <h1>{props.titulo_materia}</h1>
                    <h2>{props.tema_materia}</h2>
                    <img src={props.materia_img} alt={props.materia_alt} />
                    <cite>{props.publicacao_materia} | Pecto</cite>
                    <p>{props.materia_texto}</p>
                    <Comentario />
                </div>*/