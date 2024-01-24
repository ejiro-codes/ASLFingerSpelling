import React from "react";

const About = () => {
  const steps = [
    {
      id: 1,
      step: "Sample step. Real Steps are currently in the works",
    },
    {
      id: 2,
      step: "Sample step. Real Steps are currently in the works",
    },
    {
      id: 3,
      step: "Sample step. Real Steps are currently in the works",
    },
  ];

  return (
    <div>
      <h3 className="aboutHeader">How This Works</h3>
      <ul>
        {steps.map((item) => (
          <li className="aboutStep" key={item.id}>
            <p>{item.step}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;
