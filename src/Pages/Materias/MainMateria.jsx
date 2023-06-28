import style from './MainMateria.module.css';

import Comentario from '../Blog/Comentario';
import Section2Blog from '../Blog/Section2Blog';

import Blog_PCD1 from '../../Images/Blog_PCD1.png'
import Blog_PCD2 from '../../Images/Blog_PCD2.png';
import Blog_PCD3 from '../../Images/Blog_PCD3.png';
import Menina_PCD1 from '../../Images/Menina PCD_img1(2).png';
import Menina_PCD2 from '../../Images/Menina PCD_img2.png';
import crianças from '../../Images/crianças.jpeg';

import lupa from '../../Images/Search_lupa.png';

function MainMateria(props) {
    return (
        <main id={style.main_materia}>
            <section>
                <div id={style.materia_part1}>
                    <div className={style.materia_topo}>
                        <h1>{props.titulo_materia}</h1>
                        <h2 style={{backgroundColor: props.tema_cor, color: props.corFonte}}>{props.tema_materia}</h2>
                    </div>
                    <img src={props.materia_img} alt={props.materia_alt} />
                    <span>{props.publicacao_materia} | Pecto</span>
                    <p>{props.materia_texto}</p>
                </div>
                <div id={style.materia_part2}>
                    <div className={style.materia_topo}>
                        <div>
                            <input type="search" placeholder='Procurar' />
                            <img src={lupa} alt="Pesquisar pelo blog" className={style.lupa} />
                        </div>
                    </div>
                    <div>
                        <Section2Blog blog_img={Blog_PCD1} blog_alt='Conclusão' />
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