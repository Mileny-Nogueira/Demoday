import HeaderBlog from '../Home/HeaderBlog';
import MainMateria from './MainMateria';
import Newsletter from '../Blog/Newsletter';
import FooterBlog from '../Home/FooterBlog';

import Materia4_img from '../../Images/Materia4.png';

function Materia4() {
    return (
        <div>
            <HeaderBlog header_color='#FCE5C2' menu_color='#FCE5C2' />
            <MainMateria titulo_materia='Dificuldades enfrentadas por pais e mães de crianças com deficiência' tema_materia='Comportamento' materia_img={Materia4_img} publicacao_materia='07/05/2022' materia_texto='Pais e mães desde já cedo enfrentam dificuldades para criar os seus filhos, mas para aqueles que tem filhos com algum tipo de deficiência essa atenção deve estar muito mais presente e ser mais atenciosa. Mas quais são essas dificuldades e como os pais podem trabalhar para enfrenta-las da melhor maneira possível? Acompanhe a seguir:' />
            <Newsletter />
            <FooterBlog />
        </div>
    )
}

export default Materia4