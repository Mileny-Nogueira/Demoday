import { Nav } from 'react-bootstrap';

import style from './FooterBlog.module.css';

import apple_store from '../../Images/App_store.png';
import google_play from '../../Images/Google_play.png';
import instagram from '../../Images/Instagram.png';
import whatsapp from '../../Images/Whatsapp.png';
import facebook from '../../Images/Facebook.png';
import twitter from '../../Images/Twitter.png';
import linkedin from '../../Images/Linkedin.png';

const OpenInNewTab = url => {
    window.open(url, '_blank', 'noopener, noreferrer')
}

function FooterBlog(props) {
    return (
        <footer>
            <nav id={style.footer_superior}>
                <div id={style.logo}>
                    <img src={props.footer_img} alt="logo da pecto blog" />
                </div>
                <div className={style.footer_options}>
                    <h5>Quem Somos</h5>
                    <ul>
                        <Nav.Link href='/Institucional' style={{textDecoration: 'none', color: 'black'}}><li>Institucional</li></Nav.Link>
                        <li>Notícias e eventos</li>
                        <Nav.Link href='/PoliticaPrivacidade' style={{textDecoration: 'none', color: 'black'}}><li>Política e privacidade</li></Nav.Link>
                    </ul>
                </div>
                <div className={style.footer_options}>
                    <h5>Contato</h5>
                    <ul>
                        <Nav.Link href='/Contato' style={{textDecoration: 'none', color: 'black'}}><li>Fale Conosco</li></Nav.Link>
                        <li>Trabalhe conosco</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className={style.footer_options}>
                    <h5>Nosso <br/> Aplicativo</h5>
                    <ul>
                        <img src={apple_store} alt="Clique para acessar o nosso app na apple store" className={style.aplicativo} />
                        <img src={google_play} alt="Clique para acessar o nosso app na google play" className={style.aplicativo} />
                    </ul>
                </div>
                <div className={style.footer_options}>
                    <h5>Certificados</h5>
                    <ul>
                        <li>Colocar os certificados</li>
                        <div>
                            <img src={instagram} alt="Clique para acessar o nosso Instagram" title='Instagram' onClick={() => OpenInNewTab('https://www.instagram.com/pectooficial/')} />
                            <img src={whatsapp} alt="Clique para acessar o nosso Whatsapp" title='Whatsapp' />
                            <img src={facebook} alt="Clique para acessar o nosso Facebook" title='Facebook' />
                            <img src={twitter} alt="Clique para acessar o nosso Twitter" title='Twitter' />
                            <img src={linkedin} alt="Clique para acessar o nosso Linkedin" title='Linkedin' onClick={() => OpenInNewTab('https://www.linkedin.com/company/pectoco/')} />
                        </div>
                    </ul>
                </div>
            </nav>
            <div id={style.footer_inferior}>
                <h6>Copyright © Pecto - <span> 2023 </span> - Todos os direitos reservados</h6>
            </div>
        </footer>
    )
}

export default FooterBlog