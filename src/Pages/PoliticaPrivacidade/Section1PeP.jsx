import style from './Section1PeP.module.css';

function Section1PeP() {
    return(
        <div id={style.section1} >
            <h3>Hitalo brocha</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fugiat quidem
                 illum adipisci ipsam, iste eveniet, nemo saepe qui placeat cumque explicabo 
                 assumenda, animi aut enim. Quam magnam quibusdam distinctio!</p>
                 <div id={style.opções}>
                    <details>
                        <summary>Eureca na pepeca da Rebeca</summary>
                        <p>Ah, é a vida</p>
                    </details>
                 </div>
        </div>
    )
}

export default Section1PeP