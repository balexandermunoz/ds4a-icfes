import AboutCard from "./AboutCard";
const About = () => {
    return (
        <div className="analysis">
            <h1>About us</h1>
            <AboutCard image={require("../assets/images/Participant1.png")}></AboutCard>
            <AboutCard image={require("../assets/images/Participant2.png")}></AboutCard>
        </div>
    );
}

AboutCard.defaultProps = {
    name: 'Name Name Name Name',
    description: `A brief description about you Lorem ipsum dolor sit amet, consectetur adipiscing elit.
     Integer suscipit neque in odio pulvinar, ut aliquet felis faucibus. Donec quis turpis quis eros aliquet iaculis.
     Cras pretium, sem ac rutrum pharetra, felis sapien placerat nisi, et consectetur diam ex non augue. Nunc commodo,
      nisi sit amet pellentesque viverra, sapien nisi consequat nulla, viverra rhoncus dui lacus a purus. Nunc pharetra
       nec est in mattis. Nulla tempus est sem, sit amet dapibus neque hendrerit vitae. In hac habitasse platea dictumst.
        Curabitur finibus massa ut est tempus volutpat. Proin sit amet tellus auctor, fermentum nulla sed, laoreet velit.
         Cras facilisis facilisis quam, in egestas risus eleifend eu.`
}


export default About;