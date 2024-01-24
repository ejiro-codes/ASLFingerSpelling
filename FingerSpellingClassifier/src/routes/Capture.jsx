import React, { useEffect, useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";

const Capture = () => {
  const [countDown, setCountDown] = useState(3);
  const [active, setActive] = useState(false);
  const [imageTaken, setImageTaken] = useState(false);
  const image = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const videoConstraints = {
    width: 500,
    height: 400,
    facingMode: "user",
  };

  const capture = useCallback(() => {
    const imageSrc = image.current.getScreenshot();
    setImgSrc(imageSrc);
    prediction(imageSrc);
  }, [image, setImgSrc]);

  const prediction = async (imageSrc) => {
    //console.log(imageSrc);
    //var file = new File(["a1.jpg"], "FingerSpellingClassifier/public/a1.jpg");

    try {
      const response = await fetch("http://127.0.0.1:8080", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: imageSrc,
        }),
      })
        .then((r) => r.json())
        .then((data) => console.log(data));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (active) {
      var test = setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);

      if (countDown === 0 && !imageTaken) {
        return () => {
          capture();
          clearInterval(test);
          //call screenshot function
          setImageTaken(true);
        };
      }
    }
  });

  return (
    <>
      {!imageTaken && (
        <>
          <h2 className="captureHeader">Click "Capture!" When Ready!</h2>
          <div className="cameraCapture">
            <p>Timer: {countDown}</p>
            <div className="webcamCapture">
              <Webcam
                audio={false}
                height={400}
                ref={image}
                screenshotFormat="image/jpeg"
                width={500}
                videoConstraints={videoConstraints}
              />
            </div>
            <button className="cameraButton" onClick={() => setActive(true)}>
              Capture!
            </button>
          </div>
        </>
      )}
      {imageTaken && (
        <div>
          <h2 className="captureHeader">Here are the Results</h2>

          <div className="imageResults">
            <ul>
              <li>
                <div className="webcamCapture">
                  <img src={imgSrc} alt="" />
                </div>
              </li>
              <li>
                <div className="demarc"></div>
              </li>
              <li>
                <h3>Prediction: </h3>
                <div className="webcamCapture">
                  <img src="../../ex1.png" alt="" height={400} width={500} />
                </div>
              </li>
            </ul>
          </div>
          <button
            className="cameraButton"
            onClick={() => window.location.reload()}
          >
            Reset!
          </button>
        </div>
      )}
    </>
  );
};

export default Capture;
