import '../assets/styles/AboutCard.css';
import { useMediaQuery } from 'react-responsive';
import { useSpring, animated } from 'react-spring';

const HomeCard = ({ name, image, description, social, cardDelay }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    const animationStyle = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: cardDelay,
        config: {duration: 1000}
    })
    return (
        <animated.div style={animationStyle} className={"about--card"}>
            <div className={"about--card--leftcol"}>
                <h3 className={"about--card--leftcol--name"}>{name}</h3>
                <div className={"about--card--leftcol--container"}>
                    <img className={"about--card--leftcol--container--image"} src={image} alt="" />
                    <a href={social} className={"about--card--leftcol--container--anchor"} title="User Profile" target={"_blank"} rel={"noreferrer"}>
                        <img src={require("../assets/images/linkedin-circled.gif")} alt="Linkedin Logo" width={"60px"} height={"60px"} />
                    </a>
                </div>
            </div>
            <div className={"about--card--rightcol"}>
                <p className={"about--card--rightcol--description"}>{description}</p>
                {isMobile &&
                    <a href={social} title="User Profile" target={"_blank"} rel={"noreferrer"}>
                        <img src={require("../assets/images/LI-In-Bug.png")} alt="Linkedin Logo" width={"32.5px"} height={"30px"} />
                    </a>
                }
            </div>
        </animated.div>
    );
}

export default HomeCard;
