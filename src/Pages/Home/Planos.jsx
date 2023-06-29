import style from './Planos.module.css';

import disponivel from '../../Images/imagem_disponivel.png';
import nao_disponivel from '../../Images/imagem_nao_disponivel.png';

function Planos() {
    return (
        <section id={style.planos}>
            <h1 id={style.planos_h1}>Escolha o seu plano</h1>
            <article id={style.pagamentos}>

                {/*Demo */}

                <div className={`${style.line1} ${style.comum}`} >
                    <div className={style.part1}>
                        <h2>Demo</h2>
                        <p>Para pessoas que querem conhecer os nossos serviços</p>
                    </div>
                    <div className={style.part2}>
                        <div><h1>R$</h1><h1>0,00</h1></div>
                        <p>por mês</p>
                    </div>
                    <div className={style.part3}>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Cartas prontas para uso</label>
                        </div>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Acesso à vozes pre-gravadas</label>
                        </div>
                        <div className={style.disponivel}>
                            <img src={nao_disponivel} alt="recurso disponível nesse plano" />
                            <label>Criação e personalização de cards</label>
                        </div>
                        <div className={style.nao_disponivel}>
                            <img src={nao_disponivel} alt="recurso não disponível nesse plano" />
                            <label>Suporte a qualquer momento</label>
                        </div>
                        <div className={style.nao_disponivel}>
                            <img src={nao_disponivel} alt="recurso não disponível nesse plano" />
                            <label>Personalização das vozes</label>
                        </div>
                    </div>
                    <div className={style.part4}>
                        <button id={style.comecar}>COMEÇAR</button>
                    </div>
                </div>

                {/*Plus*/}

                <div className={`${style.line1} ${style.comum}`}>
                    <div className={style.part1}>
                        <h2>Plus</h2>
                        <p>Para pessoas que querem um gostinho a mais</p>
                    </div>
                    <div className={style.part2}>
                        <div><h1>R$</h1><h1>25,00</h1></div>
                        <p>por mês</p>
                    </div>
                    <div className={style.part3}>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Cartas prontas para uso</label>
                        </div>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Acesso à vozes pré-gravadas</label>
                        </div>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Criação e personalização de cards</label>
                        </div>
                        <div className={style.nao_disponivel}>
                            <img src={nao_disponivel} alt="recurso não disponível nesse plano" />
                            <label>Suporte a qualquer momento</label>
                        </div>
                        <div className={style.nao_disponivel}>
                            <img src={nao_disponivel} alt="recurso não disponível nesse plano" />
                            <label>Personalização das vozes</label>
                        </div>
                    </div>
                    <div className={style.part4}>
                        <button id={style.comecar}>COMEÇAR</button>
                    </div>
                </div>

                {/*Premium*/}

                <div className={style.line1} id={style.premium}>
                    <div className={style.part1}>
                        <h2>Premium</h2>
                        <p>Tenha o poder de personalizar os diferentes recursos do site</p>
                    </div>
                    <div className={style.part2}>
                        <div><h1>R$</h1><h1>50,00</h1></div>
                        <p>por mês</p>
                    </div>
                    <div className={style.part3}>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Cartas prontas para uso</label>
                        </div>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Acesso à vozes pré-gravadas</label>
                        </div>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Criação e personalização de cards</label>
                        </div>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Suporte a qualquer momento</label>
                        </div>
                        <div className={style.disponivel}>
                            <img src={disponivel} alt="recurso disponível nesse plano" />
                            <label>Personalização das vozes</label>
                        </div>
                    </div>
                    <div className={style.part4}>
                        <button id={style.acesse_agora}>ACESSE AGORA</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Planos