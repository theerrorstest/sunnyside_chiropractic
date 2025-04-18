import React from "react";
import TeamCard from "../common/TeamCard";


const TeamSection = () => {
  return (
    <div className="my px">
      <div className="flex mb-[1.375rem] items-center justify-center sm:justify-between text-[8px] md:text-[14px]">
        <h2 className="sub-heading">
          Meet our <span className="text-secondary">team</span>
        </h2>
        <h5 className="text-[1.4em] hidden sm:flex text-primary font-libre-bold">
          We value every patient
        </h5>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-between gap-y-8 gap-x-2 lg:gap-x-[42px]">
        <TeamCard name="Dr. Thomas Potigian" img="https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/team-1.webp" />
        <TeamCard name="William Elizondo" img="https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/team-2.webp" />
        <TeamCard name="Jessica Santana" img="https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/team-3.webp" />
        <TeamCard name="Taran Singh" img="https://pub-fe3a85f76892426f9292bab6a6efe903.r2.dev/team-4.webp" />
      </div>
    </div>
  );
};

export default TeamSection;
