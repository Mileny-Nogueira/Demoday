import style from './Comentario.module.css';

import DesenhoPCD from '../../Images/DesenhoPCD.png';

function Comentario() {
    return (
        <section id={style.comentario_section}>
            <form action='#' id={style.comentario_part1}>
               <fieldset>
                    <h1>Deixe um comentário:</h1>
                    <p>Seu nome:</p>
                    <input type="name" name='nome' placeholder='Digite seu nome completo aqui: *' className={style.input_principal} />
                    <p>Seu e-mail:</p>
                    <input type="email" name='email' placeholder='Digite seu e-mail aqui: *' className={style.input_principal} />
                    <p>Seu comentário:</p>
                    <textarea name="comentario" id="comentario" cols="30" rows="10" placeholder='Deixe seu comentário aqui: *'></textarea>
                    <div>
                        <input type="checkbox" id={style.salvar_informacao} />
                        <label>Salvar as minhas informações para a próxima vez em que eu comentar</label>
                    </div>
                    <input type="submit" name='submit' value={'Enviar Comentário'} id={style.comentario_submit} />
               </fieldset>
            </form>
            <div id={style.comentario_part2}>
                <img src={DesenhoPCD} alt="Desenho de um pcd mexendo no celular" />
            </div>
        </section>
    )
}

export default Comentario