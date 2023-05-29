import style from './Home.module.css';

import HeaderBlog from './HeaderBlog';
import Section1Home from './Section1Home';
import Section2Home from './Section2Home';
import Planos from './Planos';
import Depoimentos from './Depoimentos';
import FooterBlog from './FooterBlog';

function Home() {
    return (
        <main id={style.home}>
            <HeaderBlog header_color='rgba(228, 239, 255, 0.95)' menu_color='rgba(228, 239, 255, 0.95)' />
            <Section1Home />
            <Section2Home />
            <Planos />
            <Depoimentos />
            <FooterBlog />
        </main>
    )
}

export default Home