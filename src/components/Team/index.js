import React, { useEffect, useState } from "react";
import SectionTitle from "../UI/SectionTitle";

import teamData from "../../data/Team/team";
import TeamMember from "./member";
import { getConsultansList } from "../../db";

const Team = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItem();
    console.log(items);
  }, []);

  async function getItem() {
    getConsultansList(setItems);
  }

  const getImgUrl = (item) => {
    let profilePic = null;
    item.then((data) => (profilePic = data));
    return profilePic;
  };

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
          <div
            className="team-area-right team-area-right--2 bg-img"
            style={{
              backgroundImage: `url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)`,
            }}
          >
            <div className="row no-gutters align-items-end mtn-40">
              {items.map((item) => {
                return (
                  <TeamMember
                    key={item.id}
                    id={item.id}
                    profilePic={item.imgUrl}
                    name={item.firstName + " " + item.lastName}
                    phoneNumber={item.phoneNumber}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
