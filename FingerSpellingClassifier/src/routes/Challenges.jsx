import React from "react";
import images from "../../public/images";

const Challenges = () => {
  return (
    <>
      <h1 className="sampleHeader">Image Samples For Reference</h1>
      {/* <div className="animate">COMING SOON!</div> */}
      {images.map((image, index) => (
        <div className="samples">
          <p className="sampleName">{images[index].slice(19, -4)}</p>
          <img className="sampleImage" key={index} src={image} alt="" />
        </div>
      ))}
    </>
  );
};

export default Challenges;
