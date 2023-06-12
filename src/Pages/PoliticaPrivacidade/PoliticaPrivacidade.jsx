import style from './PoliticaPrivacidade.module.css';

import HeaderBlog from '../Home/HeaderBlog';
import Section1PeP from './Section1PeP';
import FooterBlog from '../Home/FooterBlog';

import logo from '../../Images/logo.png';

function PoliticaPrivacidade() {
    return(
        <section id={style.politica_privacidade}>
            <HeaderBlog header_color='rgba(228, 239, 255, 0.95)' header_img={logo} />
            <Section1PeP />
            <FooterBlog footer_img={logo} />
        </section>
    )
}

export default PoliticaPrivacidade