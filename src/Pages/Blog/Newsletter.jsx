import style from './Newsletter.module.css';

function Newsletter() {
    return (
        <section id={style.newsletter}>
            <article>
                <div className={style.newsletter_options}>
                    <h1>INSCREVA-SE</h1>
                    <h3>E RECEBA AS NOSSAS <br /> NOVIDADES DE ANTEMÃO</h3>
                </div>
                <div className={style.newsletter_options}>
                    <h5>Seu nome:</h5>
                    <input type="name" name='name' placeholder='Digite seu nome completo:' tabIndex={1} className={style.input_type1} />
                    <h5>Seu e-mail:</h5>
                    <input type="email" name='email' placeholder='Digite seu e-mail aqui:' tabIndex={2} className={style.input_type1} />
                    <input type="submit" name='submit' value={'ASSINAR NEWSLETTER'} tabIndex={3} id={style.input_type2} />
                </div>
            </article>
        </section>
    )
}

export default Newsletter