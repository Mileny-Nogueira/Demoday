import style from './MainMateria.module.css';

import Comentario from '../Blog/Comentario';

import instagram from '../../Images/Instagram.png';
import whatsapp from '../../Images/Whatsapp.png';
import facebook from '../../Images/Facebook.png';
import twitter from '../../Images/Twitter.png';
import linkedin from '../../Images/Linkedin.png';

function MainMateria(props) {
    return (
        <main id={style.main_materia}>
            <section>
                <div id={style.materia_part1}>
                    <div className={style.materia_topo}>
                        <h1>{props.titulo_materia}</h1>
                        <h2>{props.tema_materia}</h2>
                    </div>
                    <img src={props.materia_img} alt={props.materia_alt} />
                    <span>{props.publicacao_materia} | Pecto</span>
                    <p>{props.materia_texto}</p>
                </div>
                <div id={style.materia_part2}>
                    <div className={style.materia_topo}>
                        <h1>Redes Sociais</h1>
                        <div>
                            <img src={instagram} alt="Clique para acessar o nosso Instagram" />
                            <img src={whatsapp} alt="Clique para acessar o nosso Whatsapp" />
                            <img src={facebook} alt="Clique para acessar o nosso Facebook" />
                            <img src={twitter} alt="Clique para acessar o nosso Twitter" />
                            <img src={linkedin} alt="Clique para acessar o nosso Linkedin" />
                        </div>
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