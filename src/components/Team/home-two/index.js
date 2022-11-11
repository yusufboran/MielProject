import React from 'react';
import SectionTitle from "../../UI/SectionTitle";

import teamData from '../../../data/Team/home-two'
import TeamMember from "./member";

const Team = () => {
    return (
        <div className="team-area bg-brand">
            <div className="row no-gutters align-items-center">
                <div className="col-xl-4">
                    <div className="team-area-left text-center text-md-left">
                        <SectionTitle
                            variant="light"
                            title="team"
                            heading="team_title"
                            text="team_text"
                        />
                    </div>
                </div>

                <div className="col-xl-8">
                    <div className="team-area-right team-area-right--2 bg-img" style={{backgroundImage:`url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`}}>
                        <div className="row no-gutters align-items-end mtn-40">
                            {
                                teamData.map(member => (
                                    <TeamMember key={member.id} id={member.id} profilePic={member.profilePic} name={member.name} phoneNumber={member.phoneNumber} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;