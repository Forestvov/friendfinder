import React from 'react'
import WorkOrganization from "./WorkOrganization/WorkOrganization";

const WorkExperiences = () => {
    return (
        <div className="about-content-block">
            <h4 className="grey"><i className="ion-ios-briefcase-outline icon-in-title"></i>
                Work Experiences
            </h4>
            <WorkOrganization/>
            <WorkOrganization/>
            <WorkOrganization/>
        </div>
    )
}

export default WorkExperiences