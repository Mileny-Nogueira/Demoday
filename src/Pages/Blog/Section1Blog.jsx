import style from './Section1Blog.module.css';

function Section1Blog() {
    return (
        <section id={style.section1}>
           <div>
            <h1>Comportamento</h1>
            <p>Dificuldades enfrentadas por pais e mães de crianças com deficiência</p>
            <button>Ver matéria</button>
           </div>
        </section>
    )
}

export default Section1Blog