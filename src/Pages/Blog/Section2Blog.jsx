import style from './Section2Blog.module.css';

function Section2Blog(props) {
    return (
        <article id={style.section2}>
            <div className={style.row_element}>
                <img src={props.blog_img} alt={props.blog_alt} />
                <p style={{backgroundColor: props.background_color, color: props.text_color}}>{props.blog_theme}</p>
                <h3>{props.blog_title}</h3>
            </div>
        </article>
    )
}

export default Section2Blog

/*style={{backgroundImage: `url(${props.blog_img1})`}}*/