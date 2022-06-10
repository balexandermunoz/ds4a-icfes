import AboutCard from "./AboutCard";
const About = () => {
    const descriptions = {
        'Laura': `My name is Laura Vanessa Rocha Laguna, I am 28 years old and I am a professional in international business and marketing from Santo Tomas University. In 2019 I did a master's degree in project management with OBS Business School and the University of Barcelona. I currently work at Teleperformance in my role as a reporting analyst. I am in charge of creating reports in Power BI aimed at the operation so that they have visibility of the behavior of the KPIs. I am passionate about data and I like to constantly enrich myself with new knowledge that helps me grow professionally. In my free time I like to have a nice time with my family, friends and my two dogs, Kira and Homer`,
        'Brayan': `I'm a physicist with special interest in Computer science, Quantum Mechanics, Optics and programming. 
                    I have a lot of projects in Javascript with CSS, HTML with React and Vue 3.0 but Python is my prefer programming language. I also code in C++. I'm highly skilled in mathematical modelling, data analysis, algorithm development and machine learning. In fact, I've completed two specializations, the first one on Machine Learning and the other one on Natural Language Processing. 
                    In my spare time I do small and medium-sized webpages and programming projects. I also enjoy read, make some art and play video games. 
                    I'm looking for some challenges and problems to solve in different areas of science, technology and interdisciplinary projects. That makes me happy.`,
    }
    return (
        <div className="analysis">
            <h1>About us</h1>
            <AboutCard image={require("../assets/images/LauraRocha.jpg")} name={"Laura Rocha"} description={descriptions.Laura}></AboutCard>
            <AboutCard image={require("../assets/images/BrayanMunoz.jpg")} name={"Brayan Muñoz"} description={descriptions.Brayan}></AboutCard>
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