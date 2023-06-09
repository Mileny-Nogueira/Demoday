import style from './CorpoContato.module.css';
import usandoCelular from '../../Images/pessoaCelular.png';
import React from 'react';

function CorpoContato() {
    return (
        <section id={style.CorpoContato}>
            <div id="imagemContato">
                <img src={usandoCelular} alt="logo" id={style.imagemContato} /> 
            </div>
            <form action="https://formsubmit.co/pecto.comunicacao@gmail.com" method="POST">
                <h1>Entre em contato conosco</h1>
                <input type="text" name="name" placeholder="Digite seu nome" required />
                <input type="email" name="email" placeholder="Digite seu e-mail" equired />
                <textarea name="message" cols="30" rows="6" placeholder="Digite sua mensagem" required></textarea>
                <button type="submit">ENVIAR</button>
                <input type="hidden" name="_subject" value="Novo contato de cliente!" />
                <input type="text" name="_honey" style={{display: 'none'}} />
            </form>
        </section>
    )
}

export default CorpoContato