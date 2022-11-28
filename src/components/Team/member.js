import React from "react";
const TeamMember = ({ name, phoneNumber, profilePic }) => {
  
  function phoneFormat(phone) {
    return (
      phone.substr(0, 4) + " " + phone.substr(4, 3) + " " + phone.substr(7, 4)
    );
  }

  return (
    <div className="col-sm-6 col-lg-3">
      <div className="team-mem-item team-mem-item--2">
        <figure className="member-pic">
          <img src={profilePic} alt={name} />
        </figure>
        <div className="member-info">
          <h5>{name}</h5>
          <span className="designation">{phoneFormat(phoneNumber)}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
