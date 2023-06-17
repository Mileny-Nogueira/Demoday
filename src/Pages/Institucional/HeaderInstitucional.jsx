import style from './HeaderInstitucional.module.css';
import React from 'react';

function Headerinstitucional() {
    return (
        <section id={style.Headerinstitucional}>
            <h1>Conheça a Pecto</h1>
            <h2>Desde <span className={style.ano}>2023</span> tornando a comunicação acessível</h2>
        </section>
    )
}

export default Headerinstitucional