import style from './LoginCadastro.module.css';

import login_img from '../../Images/login.png';

function LoginCadastro() {
    return (
        <section id={style.login_cadastro}>
            <div className={style.container}>
                <div className={style.signin_signup}>
                    <form action="#" className={style.sign_in_form}>
                        <img src={login_img} alt="Imagem de login" />
                        <h2 className={style.title}>Login</h2>
                        <div className={style.input_field}>
                            <input type='email' placeholder='E-mail' />
                        </div>
                        <div className={style.input_field}>
                            <input type="password" required placeholder='Senha' />
                        </div>
                        <div className={style.remember}>
                            <span className={style.span}>Esqueceu sua senha?</span>
                        </div>
                        <input type="submit" id={style.submit} value='Entrar' className={style.entrar} />
                        <div className={style.support}></div>
                        <div className={style.remember2}>
                            <span className={style.span}>_____ ou _____</span>
                        </div>

                        <div className={style.login_footer}></div>

                        <div className={style.social_media}>
                            {/* colocar redes sociais - imagens */}
                        </div>
                    </form>

                    <form action="#" className={style.sign_in_form2}>
                        <h2 className={style.title2}>Cadastro</h2>
                        <div className={style.input_field2}>
                            <input type="text" placeholder='Nome completo' />
                        </div>
                        <div className={style.input_field2}>
                            <input type="email" required placeholder='E-mail' />
                        </div>
                        <div className={style.input_field2}>
                            <input type="number" required placeholder='CPF' />
                        </div>
                        <div className={style.input_field2}>
                            <input type="password" required placeholder='Senha' />
                        </div>
                        <div className={style.input_field2}>
                            <input type="password" required placeholder='Confirmar senha' />
                        </div>
                        <div className={style.support}>
                            <div className={style.remember3}>
                                <span className={style.yes}>
                                    <input type="checkbox" name='opcao1' value='Sim' />
                                </span>
                                <span className={style.span}>
                                    Li e concordo com os termos e serviços
                                </span>
                            </div>
                            <input type="submit" value='Cadastre-se' />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default LoginCadastro