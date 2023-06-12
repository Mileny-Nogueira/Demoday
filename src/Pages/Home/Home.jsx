import HeaderBlog from './HeaderBlog';
import logo from '../../Images/logo.png';
import Section1Home from './Section1Home';
import Section2Home from './Section2Home';
import Section3Home from './Section3Home';
import Planos from './Planos';
import Depoimentos from './Depoimentos';
import FooterBlog from './FooterBlog';

function Home() {
    return (
        <main>
            <HeaderBlog header_color='rgba(228, 239, 255, 0.95)' header_img={logo} />
            <Section1Home />
            <Section2Home />
            <Section3Home />
            <Planos />
            <Depoimentos />
            <FooterBlog footer_img={logo} />
        </main>
    )
}

export default Home