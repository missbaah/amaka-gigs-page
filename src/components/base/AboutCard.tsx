import React from "react";

type AboutCardProps = {
  intro: string;
  skills: string[];
  body: string;
  conclusion: string;
  salutation: string;
  name: string;
};

const AboutCard = (props: AboutCardProps) => {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-xl font-medium">Brief</h2>
      <div className="text-sm flex flex-col gap-3">
        <p>{props.intro}</p>
        <p>{props.body}</p>
        <ul className="list-disc pl-6">
          {props.skills?.map((skill, index) => {
            return <li key={index}>{skill}</li>;
          })}
        </ul>
        <p>{props.conclusion}</p>
        <div className="flex flex-col">
          <span>{props.salutation}</span>
          <span>{props.name}</span>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
