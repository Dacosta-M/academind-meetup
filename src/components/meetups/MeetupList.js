import React from "react";
import MeetupItem from "./MeetupItem";
import "./MeetupList.css";

const MeetupList = ({meetups}) => {
  return (
    <ul className="list">
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};
//  id, image, title, address, description 

export default MeetupList;
