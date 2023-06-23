import style from './Cards.module.scss';

function Cards(props) {
    return (
        <div id={style.cards} style={{background: props.card_color}}>
            <img src={props.card_img} alt={props.card_props} />
            <h3>{props.card_text}</h3>
        </div>
    )
}

export default Cards