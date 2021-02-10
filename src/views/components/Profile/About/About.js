import React from 'react'

import PersonalInformation from "./PersonalInformation/PersonalInformation";
import WorkExperiences from "./WorkExperiences/WorkExperiences";
import Location from "./Location/Location";
import Interests from "./Interests/Interests";
import Language from "./Language";

const About = () => {
    return (
        <div>
            <div className="about-profile">
                <PersonalInformation/>
                <WorkExperiences/>
                <Location/>
                <Interests/>
                <Language/>
            </div>
        </div>
    )
}

export default About