import style from './Section1.module.css';

function Section1() {
    return(
        <div id={style.section1} >
        
                 <div id={style.opções}>
                    <details>
                        <h3>Duvidas frequentes</h3>
                        <summary>como utilizar os cards?</summary>
                        <p>Hitalo brocha</p>
                    </details>
                 </div>
        </div>
    )
}

export default Section1