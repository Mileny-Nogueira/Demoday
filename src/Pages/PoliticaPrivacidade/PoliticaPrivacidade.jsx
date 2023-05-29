import HeaderBlog from '../Home/HeaderBlog';
import Section1PeP from './Section1PeP';
import FooterBlog from '../Home/FooterBlog';
import style from './PoliticaPrivacidade.module.css';

function PoliticaPrivacidade() {
    return(
        <section id={style.politica_privacidade}>
            <HeaderBlog header_color='rgba(228, 239, 255, 0.95)' menu_color='rgba(228, 239, 255, 0.95)' />
            <Section1PeP />
            <FooterBlog />
        </section>
    )
}

export default PoliticaPrivacidade