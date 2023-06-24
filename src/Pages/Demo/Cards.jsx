import style from './Cards.module.scss';

function Cards(props) {

    //Constante para props do audio das cards

    const handleClick = () => {
        props.handleCardAudio(props.card_audio)
    }

    //Cards

    return (
        <div id={style.cards} style={{background: props.card_color}} onClick={handleClick}>
            <img src={props.card_img} alt={props.card_alt} />
            <h3>{props.card_text}</h3>
        </div>

    )
}

export default Cards