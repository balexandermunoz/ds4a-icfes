import { motion } from 'framer-motion'
import '../assets/styles/Home.css';
import HomeCard from "./HomeCard";
import MainMap from "./MainMap"

HomeCard.defaultProps = { imagePos: "left" }

function Home() {
    const text = {
        card1: `The SABER 11 Test is a standardized evaluation that measures the competences defined by quality benchmarks in Colombia.
                It is expected that all Colombian students manage to develop these skills during their time in basic and secondary education,
                since they are necessary for their personal and professional life. We have accessed open data from the Colombian Government
                to observe the performance of those evaluated. In this regard, the results are broken down according to territorial entity,
                educational institution and  socioeconomic level of the students.`,
        card2: `The concept of academic performance has a complex and multidimensional character, all associated with the learning outcome.
                With this in mind, we considered analyzing the relationships of the factors that affect student performance in the SABER 11 tests,
                taking into account that ,conditioning factors of school success, according to research, are represented by variables that are related to
                individual, family, school and community aspects. Therefore, the present research is carried out only with the existing data in the Colombian
                Government OpenData database.`,
        card3: `Solution for this problem will give a guide to public/private schools as per the main points to take into account
                seeking the best results on SABER tests.
                This information will enable Government institutions to develop policies specifically addressed to the main factors
                related to increasing the SABER tests results.`
    }
    return (
        <motion.div
            className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>Homepage</h1>
            <div className={"home--map"}>
                <MainMap></MainMap>
            </div>
            <HomeCard title={"What is the ICFES test?"} text={text.card1} image={require("../assets/images/Icfes1.jpg")}></HomeCard>
            <HomeCard title={"What is the project about?"} text={text.card2} image={require("../assets/images/analysis1.jpg")} imagePos={"right"}></HomeCard>
            <HomeCard title={"Why does this matter?"} text={text.card3} image={require("../assets/images/Report-Card.jpg")}></HomeCard>
        </motion.div >
    );
}

export default Home;