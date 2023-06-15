import style from './MainMateria.module.css';

import Comentario from '../Blog/Comentario';

function MainMateria(props) {
    return (
        <main id={style.main_materia}>
            <section>
                <div id={style.materia_part1}>
                    <div className={style.materia_topo}>
                        <h1>{props.titulo_materia}</h1>
                        <h2 style={{backgroundColor: props.tema_cor}}>{props.tema_materia}</h2>
                    </div>
                    <img src={props.materia_img} alt={props.materia_alt} />
                    <span>{props.publicacao_materia} | Pecto</span>
                    <p>{props.materia_texto}</p>
                </div>
                <div id={style.materia_part2}>
                    <div className={style.materia_topo}>
                        <div>
                            <input type="search" placeholder='Procurar' />
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