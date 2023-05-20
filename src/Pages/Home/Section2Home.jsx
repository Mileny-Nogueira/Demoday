import style from './Section2Home.module.css';

import post1 from '../../Images/post1.png';
import post2 from '../../Images/post2.png';
import post3 from '../../Images/post3.png';

function Section2Home() {
    return (
        <section id={style.destaques}>
            <h1>Destaques</h1>
            <div id={style.bottomLine}></div>
            <div id={style.posts}>
                <div className={style.posts_img}>
                    <h3>A importância da tecnologia</h3>
                    <img src={post1} alt="Clique para ver o primeiro post" />
                </div>
                <div className={style.posts_img}>
                    <h3>Ferramenta para comunicação</h3>
                    <img src={post2} alt="Clique para ver o segundo post" />
                </div>
                <div className={style.posts_img}>
                    <h3>Diversidade nas escolas</h3>
                    <img src={post3} alt="Clique para ver o terceiro post" />
                </div>
            </div>
        </section>
    )
}

export default Section2Home