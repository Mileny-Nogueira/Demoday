import style from './Section1.module.css';

function Section1() {
    return (
        <div id={style.section1} >

            <div id={style.opções}>
                <div>
                    
                </div>
                <div id={style.Duvidas}>
                <h2>Duvidas frequentes</h2>
                </div>
                <details>
                    <summary>como utilizar os cards?</summary>
                    <p>Os cards funcionam de forma a facilitar a comunicação alternativa. <br />Para ajudar </p>
                </details>
                <details>
                    <summary>Como funciona a segurança do site?</summary>
                    <p>Nós da equipe Pecto nos comprometemos em manter as informações de nossos usuários em sigilo total.</p>
                </details>
                <details>
                    <summary>Qual a vantagem de assinar o premium da Pecto?</summary>
                    <p>Vocês podem personalizar os cards de foma ainda mais humanizada. Adicionando palavras de forma a ajudar ainda mais na comunicação dos usuários.</p>
                </details>
                <details>
                    <summary>Quem desenvolveu a Pecto?</summary>
                    <p>Nós Devs e donos da Pecto tivemos a chance de construir nosso projeto graçãs ao instituto Proa. Projeto que ajuda jovens a ingressar no mercado de trabalho. La toda a <a href="http://localhost:3000/Institucional">equipe pecto</a> se conheceu e começamos a desenvolver nosso trabalho </p>
                </details>
                <details>
                    <summary>como utilizar os cards?</summary>
                    <p>Em andamento</p>
                </details>
                <details>
                    <summary>como utilizar os cards?</summary>
                    <p>Em andamento</p>
                </details>
                <details>
                    <summary>como utilizar os cards?</summary>
                    <p>Em andamento</p>
                </details>
                <details>
                    <summary>como utilizar os cards?</summary>
                    <p>Em andamento</p>
                </details>

            </div>
        </div>
    )
}

export default Section1