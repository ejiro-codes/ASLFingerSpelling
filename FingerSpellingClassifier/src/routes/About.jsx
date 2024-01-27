import React from "react";

const About = () => {
  const steps = [
    {
      id: 1,
      step: "Keep hand gestures as close to the camera as possible whilst still having your entire hand in the frame",
    },
    {
      id: 2,
      step: "Test out your hand signs using different backgrounds. They might make a slight difference (for better or worse)",
    },
    {
      id: 3,
      step: "Refer to the list of hand signs in the sample tab to get an idea of the gestures expected for each symbol. These aren't the only angles that were taken into account but there might be some conflicts if one relies on other internet sources",
    },
    {
      id: 4,
      step: "Feel free to reach out if you're unable to get it working",
    },
  ];

  return (
    <div>
      <h3 className="aboutHeader">How This Works</h3>
      <p className="aboutBody">
        Hey There! This site serves as an interface to a machine learning model
        I built in class last semester for a project. After my personal tests,
        it seems that the performance is rather subpar and there was quite a bit
        of bias when tested in vacuum. This is not very surprising because the
        training and test sets both possessed the same scenery (and were
        probably garnered from the same individual), making it an easier task
        for the model. Anyways... Here's some tricks to maybe keep in mind in
        order to get the best out of the model in its current state:
      </p>
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
