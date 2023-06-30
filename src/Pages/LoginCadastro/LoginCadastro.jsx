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
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  // Função para lidar com o login
  const handleLogin = () => {
    const dadosUsuario = {
      email: email,
      senha: senha,
    };

    axios  
        .post('backend-pecto-production.up.railway.app/usuarios/login', dadosUsuario)
        .then(response => {
            if (response.data) {
                
                navigate('/Demo')
                
            } else {
                alert('Email e senha não correspondem. Verifique suas credenciais.');
            }
        })
        .catch (error => {
            console.error(error);
            alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
        });
    }

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

    const [termosAceitos, setTermosAceitos] = useState(false);
    const [validacaoBackend, setValidacaoBackend] = useState(false);
    /* erros */
    const [erros, setErros] = useState({});

    const enviarDados = (event) => {
      event.preventDefault();

      setErros({});

      if (!nome.trim()) {
        setErros((prevErros) => ({
          ...prevErros,
          nome: 'O campo nome é obrigatório.',
      }))}
  
      if (!email.trim()) {
        setErros((prevErros) => ({
          ...prevErros,
          email: 'O campo email é obrigatório.',
      }))}
  
      if (!cpf.trim()) {
        setErros((prevErros) => ({
          ...prevErros,
          cpf: 'O campo CPF é obrigatório.',
        }))}
  
      if (!nascimento.trim()) {
        setErros((prevErros) => ({
          ...prevErros,
          nascimento: 'O campo data de nascimento é obrigatório.',
        }))}
  
      if (!senha.trim()) {
        setErros((prevErros) => ({
          ...prevErros,
          senha: 'O campo senha é obrigatório.',
        }))}

      if (!confirmarSenha.trim()) {
        setErros((prevErros) => ({
          ...prevErros,
          confirmarSenha: 'Confirme sua senha.',
        }))}

      if (senha !== confirmarSenha) {
        setErros((prevErros) => ({
          ...prevErros,
          confirmarSenha: 'As senhas não correspondem.'
        }))}

      if (
        nome.trim() &&
        email.trim() &&
        cpf.trim() &&
        nascimento.trim() &&
        senha.trim() &&
        senha === confirmarSenha && termosAceitos
      ) {
        const novoUsuario = {
          nome: nome,
          email: email,
          cpf: cpf,
          nascimento: nascimento,
          senha: senha,
        };

        setValidacaoBackend(true);

        axios
          .post('https://backend-pecto-production.up.railway.app/', novoUsuario)
          .then((response) => {
            setNome('');
            setEmail('');
            setCpf('');
            setNascimento('');
            setSenha('');
            setConfirmarSenha('');

            alert('Conta criada com sucesso!');
            handleSignInClick();
          })
          .catch((error) => {
            if (error.response && error.response.data) {
              setErros(error.response.data);
            } else {
              console.error(error);
            }
          });
        } else {
          setValidacaoBackend(false);
        }
    };

    const handleTermosChange = (event) => {
      setTermosAceitos(event.target.checked);
    };

    return (
      <form action="#" className={style.sign_up_form2}>
        <h2 className={style.title2}>Cadastro</h2>
        <div className={style.input_field2}>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Nome completo:"
          />
        </div>
        {erros.nome && <div className={style.error}>{erros.nome}</div>}
        <div className={style.input_field2}>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-mail:"
          />
        </div>
        {erros.email && <div className={style.error}>{erros.email}</div>}     
        <div className={style.input_field2}>
          <input
            type="num"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            placeholder="CPF:"
            ref={cpfInputRef}
          />
        </div>
        {erros.cpf && <div className={style.error}>{erros.cpf}</div>}
        <div className={style.input_field2}>
          <input
            type="date"
            value={nascimento}
            onChange={(e) => setNascimento(e.target.value)}
            placeholder="Data de Nascimento:"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        {erros.nascimento && <div className={style.error}>{erros.nascimento}</div>}
        <div className={style.input_field2}>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha:"
          />
        </div>
        {erros.senha && <div className={style.error}>{erros.senha}</div>}
        <div className={style.input_field2}>
          <input
            type="password"
            value={confirmarSenha}
            onChange={(e) => setConfirmarSenha(e.target.value)}
            placeholder="Confirmar senha:"
          />
        </div>
        {erros.confirmarSenha && (<div className={style.error}>{erros.confirmarSenha}</div>)}
        <div className={style.support}>
          <div className={style.remember3}>
            <span>
              <input type="checkbox" name="opcao1" value="sim" checked={termosAceitos} onChange={handleTermosChange} />
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
              <input 
                required 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="E-mail:" />
            </div>
            <div className={style.input_field}>
              <img src={login_password} alt="Clique para adicionar a sua senha" />
              <input 
                required 
                type="password" 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)} 
                placeholder="Senha:" />
            </div>
            <div className={style.remember}>
              <span>Esqueceu sua senha?</span>
            </div>
            <div className={style.input_submit}>
              <img src={login_submit} alt="Clique para realizar o login" id={style.icone3} />
              <button id={style.submit} className={style.botao5} onClick={handleLogin}>
                Entrar
              </button>
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