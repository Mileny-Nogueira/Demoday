import style from './Section1.module.css';

function Section1() {
    return (
        <div id={style.section1} >

            <div id={style.opções}>
                <div id={style.Duvidas}>
                <h2>Duvidas frequentes</h2>
                </div>
                <details>
                    <summary>Como utilizar os cards?</summary>
                    <p>Os cards tem a função de facilitar a comunicação alternativa. <br />Para utilizar os cards você precisa ter uma conta em nossa plataforma. <a href="http://localhost:3000/LoginCadastro?cadastro=true">(Aqui)</a> Com o seu cadastro feito. Iremos te levar até a página onde você terá acesso a uma série de cards que irão facilitar sua comunicação. Após essas etapas, basta escolher o card que mais representa seu humor, sentimento ou desejo e clicar em cima do que irá dizer. </p>
                    <img className={style.imagemfaq} src="https://cdn.discordapp.com/attachments/1079254349944987689/1125277198597750824/image.png" alt="." />
                </details>
                <details>
                    <summary>Como funciona a segurança do site?</summary>
                    <p>Nossa equipe da Pecto se compromete integralmente a manter as informações dos nossos usuários em total sigilo. Criamos a Pecto com o objetivo de sermos verdadeiros parceiros dos nossos usuários, agindo de forma responsável e confiável. Dedicamos especial atenção em tratar suas informações pessoais com a máxima confidencialidade e privacidade..</p>
                </details>
                <details>
                    <summary>Qual a vantagem de assinar o premium da Pecto?</summary>
                    <p>Com o premium, você poderá ter acesso à personalização de áudios, cards, além de obter acesso a planos futuros da plataforma. Para se manter atualizado, acompanhe nossas redes sociais <a href="https://linktr.ee/Pecto">Aqui</a> </p>
                    <img className={style.dinheiro} src="https://cdn.discordapp.com/attachments/1079254349944987689/1125283628897808475/image.png" alt="." />
                    
                </details>
                <details>
                    <summary>Quem desenvolveu a Pecto?</summary>
                    <p>Iniciamos a Pecto com 8 integrantes, sendo dividido em:

                    Frontend: <a href="https://www.linkedin.com/in/igor-alves-silva-goes/">Igor Alves</a> , <a href="https://www.linkedin.com/in/matheus-j%C3%BAnior/">Matheus Junior</a>, <a href="https://www.linkedin.com/in/ketelyn-sousa/">Ketelyn Sousa</a> e <a href="https://www.linkedin.com/in/milenynogueira/"> Mileny Nogueira</a>;
                    Backend: <a href="https://www.linkedin.com/in/cassia-santos42/">Cássia Santos</a>, <a href="https://www.linkedin.com/in/gabscl/ ">Gabriel Souza</a> ,  <a href="https://www.linkedin.com/in/hitalojacome/">Hitalo Jacome</a> e <a href="https://www.linkedin.com/in/jonatas-anjos/">Jonatas dos Anjos</a></p>

                    <p>Nós Devs e donos da Pecto tivemos a chance de construir nosso projeto graçãs ao instituto Proa. Projeto que ajuda jovens a ingressar no mercado de trabalho. La toda a <a href="http://localhost:3000/Institucional">equipe pecto</a> se conheceu e começamos a desenvolver nosso trabalho </p>
                </details>
                <details>
                    <summary>Qual o publico alvo da Pecto?</summary>
                    <p>Pessoas que não se comunicam verbalmente por qualquer motivo. Nossa plataforma conta com um sistema de acessibilidade que incluí a maioria das necessidades dos nossos usuários. Para qualquer pessoa disposta a tentar uma nova forma de comunicação mais acessível</p>
                </details>
                <details>
                    <summary>Onde posso utilizar a Pecto?</summary>
                    <p>Em qualquer lugar. Desde o começo, queriamos desenvolver uma plataforma versátil que pudesse acompanhar nossos usuários em qualquer situação do seu dia, seja em um encontro casual entre amigos, quanto em um ambiente de trabalho que requer uma postura mais profissional.</p>
                </details>
                <details>
                    <summary></summary>
                    <p></p>
                </details>
                <details>
                    <summary></summary>
                    <p></p>
                </details>

            </div>
        </div>
    )
}

export default Section1