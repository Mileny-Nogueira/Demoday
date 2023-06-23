import style from './Faq.module.css';

import HeaderBlog from '../Home/HeaderBlog';

import FooterBlog from '../Home/FooterBlog';

import logo from '../../Images/logo.png';
import Section1 from './Section1';

function Faq() {
    return(
        <section id={style.politica_privacidade}>
            <HeaderBlog header_color='rgba(228, 239, 255, 0.95)' header_img={logo} />
            <Section1/>
            <FooterBlog footer_img={logo} />
        </section>
    )
}

export default Faq