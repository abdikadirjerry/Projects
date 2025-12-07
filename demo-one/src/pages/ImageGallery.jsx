import React, { useState } from "react";
// import "../ImageGallery.css";
import img1 from "../assets/Images/pic1.jpg";
import img2 from "../assets/Images/pic2.jpg";
import img3 from "../assets/Images/pic3.jpg";

function ImageGallery() {
  const slides = [
    {
      image: img1,
      title: "Forest Path/",
      description: "Quiet trail through ancient trees",
    },
    {
      image: img2,
      title: "Mountain View",
      description: "Peaceful view across the green mountains",
    },
    {
      image: img3,
      title: "Sunset Lake",
      description: "Calm sunset reflecting over the water",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    if (index < slides.length - 1) setIndex(index + 1);
  };

  const back = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Image Gallery</h1>

      <div className="gallery-card">
        <img src={slides[index].image} alt="slide" className="gallery-img" />

        <h2>{slides[index].title}</h2>
        <p>{slides[index].description}</p>

        <div className="gallery-buttons">
          <button onClick={back} disabled={index === 0}>
            Back
          </button>

          <button onClick={next} disabled={index === slides.length - 1}>
            Next
          </button>
        </div>

        <p className="gallery-counter">
          {index + 1} / {slides.length}
        </p>
      </div>
    </div>
  );
}

export default ImageGallery;
