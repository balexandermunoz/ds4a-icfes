import '../assets/styles/AboutCard.css';

const HomeCard = ({name, image, description}) => {
    return (
        <div className={"about--card"}>
            <div className={"about--card--leftcol"}>
                <h3 className={"about--card--leftcol--name"}>{name}</h3>
                <img className={"about--card--leftcol--image"} src={image} alt=""/>
            </div>
            <div className={"about--card--rightcol"}>
                <p className={"about--card--rightcol--description"}>{description}</p>
            </div>
        </div>
    );
}

export default HomeCard;
