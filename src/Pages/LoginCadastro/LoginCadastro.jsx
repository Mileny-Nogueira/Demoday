import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import VMasker from 'vanilla-masker';
import style from './LoginCadastro.module.css';
import login_img from '../../Images/login.png';
import login_user from '../../Images/Login_user.png';
import login_password from '../../Images/Login_password.png';
import login_submit from '../../Images/Login_submit.png';
import google_login from '../../Images/Google_login.png';
import facebook_login from '../../Images/Facebook_login.png';

const LoginCadastro = () => {
  /* Animação container::before */
  const [isSignUpMode, setIsSignUpMode] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpMode(true);
  };

  const handleSignInClick = () => {
    setIsSignUpMode(false);
  };

  /* Script CPF */
  const cpfInputRef = useRef(null);

  useEffect(() => {
    VMasker(cpfInputRef.current).maskPattern('999.999.999-99');
  }, []);

   /* Script para ser possível mudar o 'placeholder' do input type="date" */
  const handleFocus = (event) => {
    event.target.type = 'date';
  };

  const handleBlur = (event) => {
    event.target.type = 'text';
  };

  const NovaConta = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [erroCadastro, setErroCadastro] = useState('');

    const navigate = useNavigate();

    const enviarDados = () => {
      if (senha !== confirmarSenha) {
        alert('As senhas não correspondem');
        return;
      } else if (cpf.trim() === '') {
        alert('Por favor, preencha o campo CPF.');
        return;
      }

      const novoUsuario = {
        nome: nome,
        email: email,
        cpf: cpf,
        nascimento: nascimento,
        senha: senha,
      };

      axios
        .post('http://localhost:8080/usuarios', novoUsuario)
        .then((response) => {
          setNome('');
          setEmail('');
          setCpf('');
          setNascimento('');
          setSenha('');
          setConfirmarSenha('');

          alert('Conta criada com sucesso!');
        })
        .catch((error) => {
          console.error(error);
        });
      handleSignInClick();
    };

    return (
      <form action="#" className={style.sign_up_form2}>
        <h2 className={style.title2}>Cadastro</h2>
        <div className={style.input_field2}>
          <input
            type="text"
            value={nome}
            onChange={(texto) => setNome(texto.target.value)}
            placeholder="Nome completo:"
          />
          <div className="error"></div>
        </div>
        <div className={style.input_field2}>
          <input
            type="email"
            value={email}
            onChange={(texto) => setEmail(texto.target.value)}
            placeholder="E-mail:"
          />
          <div className="error"></div>
        </div>
        <div className={style.input_field2}>
          <input
            type="num"
            value={cpf}
            onChange={(texto) => setCpf(texto.target.value)}
            placeholder="CPF:"
            ref={cpfInputRef}
          />
          <div className="error"></div>
        </div>
        <div className={style.input_field2}>
          <input
            type="date"
            value={nascimento}
            onChange={(texto) => setNascimento(texto.target.value)}
            placeholder="Data de Nascimento:"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <div className="error"></div>
        </div>
        <div className={style.input_field2}>
          <input
            type="password"
            value={senha}
            onChange={(texto) => setSenha(texto.target.value)}
            placeholder="Senha:"
          />
          <div className="error"></div>
        </div>
        <div className={style.input_field2}>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(texto) => setConfirmarSenha(texto.target.value)}
            placeholder="Confirmar senha:"
          />
          <div className="error"></div>
        </div>
        <div className={style.support}>
          <div className={style.remember3}>
            <span>
              <input type="checkbox" name="opcao1" value="sim" />
            </span>
            <p>
              Li e concordo com os <span>termos</span> e <span>serviços</span>
            </p>
          </div>
          <button className={style.botao6} onClick={enviarDados}>
            Cadastre-se
          </button>
        </div>
      </form>
    );
  };

  return (
    <section id={style.login_cadastro}>
      <div className={`${isSignUpMode ? style.sign_up_mode : ''} ${style.container}`}>
        <div className={style.signin_signup}>
          <form action="#" className={style.sign_in_form}>
            <img src={login_img} alt="Imagem de login" />
            <h2 className={style.title}>Login</h2>
            <div className={style.input_field}>
              <img src={login_user} alt="Clique para adicionar o seu e-mail" />
              <input type="email" required placeholder="E-mail:" />
            </div>
            <div className={style.input_field}>
              <img src={login_password} alt="Clique para adicionar a sua senha" />
              <input type="password" required placeholder="Senha:" />
            </div>
            <div className={style.remember}>
              <span>Esqueceu sua senha?</span>
            </div>
            <div className={style.input_submit}>
              <img src={login_submit} alt="Clique para realizar o login" id={style.icone3} />
              <input type="submit" id={style.submit} value="Entrar" className={style.botao5} />
            </div>
            <div className={style.remember2}>
              <hr />
            </div>

            <div className={style.social_media}>
              <img src={google_login} alt="Clique para fazer login pelo Google" className={style.social_icon} />
              <img src={facebook_login} alt="Clique para fazer login pelo Facebook" className={style.social_icon} />
            </div>
          </form>

          <NovaConta />
        </div>
      </div>

      <div className={style.botao}>
        <div className={style.botao2}>
          <div className={style.botao3}>
            <button className={style.botao4} id={style.signin_button} onClick={handleSignInClick}>
              Login
            </button>
          </div>
        </div>
        <div className={`${style.painel} ${style.right_panel}`}>
          <div className={style.content}>
            <button className={style.botao4} id={style.signup_button} onClick={handleSignUpClick}>
              Cadastro
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginCadastro;