import AboutCard from "./AboutCard";
const About = () => {
    const descriptions = {
        'Laura': `My name is Laura Vanessa Rocha Laguna, I am 28 years old and I am a professional in international business and marketing
                  from Santo Tomas University. In 2019 I did a master's degree in project management with OBS Business School and the University of Barcelona.
                  I currently work at Teleperformance in my role as a reporting analyst.
                  I am in charge of creating reports in Power BI aimed at the operation so that they have visibility of the behavior of the KPIs.
                  I am passionate about data and I like to constantly enrich myself with new knowledge that helps me grow professionally.
                   In my free time I like to have a nice time with my family, friends and my two dogs, Kira and Homer.`,
        'Brayan': `I'm a professional physicist from University of Antioquia with special interest in Computer science, Quantum Mechanics, Optics and programming. 
                   I have a lot of projects in Javascript with CSS, HTML with React and Vue 3.0 but Python is my prefer programming language. I also code in C++.
                   I'm highly skilled in mathematical modelling, data analysis, algorithm development and machine learning. In fact, I've completed two specializations,
                   the first one on Machine Learning and the other one on Natural Language Processing. 
                   In my spare time I do small and medium-sized webpages and programming projects. I also enjoy read, make some art and play video games. 
                   I'm looking for some challenges and problems to solve in different areas of science, technology and interdisciplinary projects. That makes me happy.`,
        'FelipeT': `Industrial Engineer graduated from La Salle University, with a solid background in Data Analytics and
                    knowledge of Agile processes and methodologies. With skills in data mining and Machine Learning to predict continuous and categorical variables to
                    solve research and business problems. With experience in both academia and industry, through critical thinking,
                    holistic analysis of contexts, and the use of languages such as R, Python, and SQL, among others, I have contributed to the development of models to find solutions
                    to relevant and complex problems.`,
        'FelipeB': `My Name is Felipe Betancur and I am an industrial engineer professional with teamwork leadership experience and passionate about generating and executing strategies
                    aimed at creating value, all while being involved with people, business strategy and IT. I have skills to convert raw data into decision-making information,
                    using the latest data science skills and technologies available for this purpose. I am committed to learn continuously and communicate assertively in order to deliver results.`,
        'Orminson': `I am Orminson Santos Ariza, Electronic Engineer, MsC. in Telematics and officer of the National Police of Colombia in the degree of Major.
                     I have worked in the ICT Office of the National Police in different roles related to the identification and implementation of IT solutions,
                     as well as the design and analysis of previous requirements of their acquisition focused on the strategic objectives of the institution covering the processes, applications, information/data,
                     infrastructure and services, of the technological direction of the National Police. I am passionate about the world of data and therefore face this challenge of training in Data Science through the
                     Ministerio TIC and Correlation One DS4A, to contribute within the National Police in strengthen and generate new institutional capacities through the analysis of the needs and information of the processes
                     that enable the constitutional mission, and the approach of analytical models that allow guiding the decisions of the command at its different management levels.`
    }
    const socialMedia = {
        'Laura': 'https://www.linkedin.com/in/laura-vanessa-rocha-laguna-78b598176/',
        'Brayan': 'https://www.linkedin.com/in/balexandermunoz/',
        'FelipeT': '/',
        'FelipeB': 'https://www.linkedin.com/in/juanfebeta/',
        'Julian': 'https://www.linkedin.com/in/julian-garzon-transformacion-agilismo-software/?locale=en_US',
        'Orminson': 'https://www.linkedin.com/in/orminson-santos-ariza-0ba399126'
    }
    return (
        <div className="analysis">
            <h1>About us</h1>
            <AboutCard image={require("../assets/images/LauraRocha.jpg")} name={"Laura Rocha"} description={descriptions.Laura} social={socialMedia.Laura} delay={500}></AboutCard>
            <AboutCard image={require("../assets/images/BrayanMunoz.jpg")} name={"Brayan Muñoz"} description={descriptions.Brayan} social={socialMedia.Brayan} delay={1000}></AboutCard>
            <AboutCard image={require("../assets/images/FelipeTorres.JPG")} name={"Felipe Torres"} description={descriptions.FelipeT} social={socialMedia.FelipeT} delay={2000}></AboutCard>
            <AboutCard image={require("../assets/images/FelipeBetancur.png")} name={"Felipe Betancur"} description={descriptions.FelipeB} social={socialMedia.FelipeB} delay={3000}></AboutCard>
            <AboutCard image={require("../assets/images/OrminsonSantos.png")} name={"Orminson Santos"} description={descriptions.Orminson} social={socialMedia.Orminson} delay={4000}></AboutCard>
        </div>
    );
}


export default About;