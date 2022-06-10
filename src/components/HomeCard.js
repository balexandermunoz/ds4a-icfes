const HomeCard = ({title, text, image, imagePos}) => {
    const left = (imagePos === 'left') ? true : false;
    const right = (imagePos === 'right') ? true : false;
    const colored = (imagePos === 'right') ? ' home--card__colored' : '';
    return (
        <div className={"home--card" + colored}>
            {left && <img className={"home--card--image"} src={image} alt=""/>}
            <div>
                <h3>{title}</h3>
                <p className={"home--card--text"}>{text}</p>
            </div>
            {right && <img className={"home--card--image"} src={image} alt=""/>}
        </div>
    );
}

export default HomeCard;
