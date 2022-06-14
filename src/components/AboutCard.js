import '../assets/styles/AboutCard.css';
import { useMediaQuery } from 'react-responsive'

const HomeCard = ({name, image, description, social}) => {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' })
    return (
        <div className={"about--card"}>
            <div className={"about--card--leftcol"}>
                <h3 className={"about--card--leftcol--name"}>{name}</h3>
                <div className={"about--card--leftcol--container"}>
                    <img className={"about--card--leftcol--container--image"} src={image} alt=""/>
                    <a href={social} className={"about--card--leftcol--container--anchor"} title="User Profile" target={"_blank"}>
                        <img src={require("../assets/images/linkedin-circled.gif")} alt="Linkedin Logo" width={"60px"} height={"60px"}/>
                    </a>
                </div>
            </div>
            <div className={"about--card--rightcol"}>
                <p className={"about--card--rightcol--description"}>{description}</p>
                {isMobile &&
                    <a href={social} title="User Profile" target={"_blank"}>
                        <img src={require("../assets/images/LI-In-Bug.png")} alt="Linkedin Logo" width={"32.5px"} height={"30px"}/>
                    </a>
                }
            </div>
        </div>
    );
}

export default HomeCard;
