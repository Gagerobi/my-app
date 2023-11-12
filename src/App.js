import React from 'react';
import './App.css';
import { useState } from "react";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1699751237~exp=1699751837~hmac=1ff288c0827a97f63c8566adf5fad2686a10942538e9a480fc2304a15fe66592",
    "https://img.freepik.com/free-photo/space-background-realistic-starry-night-cosmos-shining-stars-milky-way-stardust-color-galaxy_1258-154643.jpg?w=1380&t=st=1699751312~exp=1699751912~hmac=381b6ebe54c75090bf9ba556dbc19f225b49117e569079d6eca306e86375e683",
    "https://img.freepik.com/free-photo/leaf-nature-backgrounds-pattern-illustration-plant-backdrop-design-abstract-vibrant-green-nature-wallpaper-illustration-generative-ai_188544-12680.jpg?w=1380&t=st=1699751348~exp=1699751948~hmac=ff5eadbc67daec446c66b642801b391bf35b500a501ff5f1f46e8209bec3662f",
    "https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg?t=st=1699751364~exp=1699754964~hmac=08da72dacdc96ae70ceca0ba98b6e69fa1e0750db99b215401b723c3e343fd6e&w=1380",
  ];

  const goToNextImage = () => {
    if(currentImage === images.length - 1) {
      setCurrentImage(0);
      return;
    }
    setCurrentImage(currentImage + 1);
    console.log(currentImage);
  };

  const goToPreviousImage = () => {
    if(currentImage === 0) {
      setCurrentImage(images.length - 1);
      return;
    }
    setCurrentImage(currentImage - 1);
    console.log(currentImage);
  };

  return (
    <div>
      <h1>Image Slider</h1>
      <div className="container">
        <div className="project-heading">
          <h1 className="title">Image Slider</h1>
          <div className="subtitle">Click the buttons to change the image!</div>
        </div>
        <div id="slider">
          <img src={images[currentImage]} alt=""></img>
          <img src={images[currentImage]} alt=""></img>
          <img src={images[currentImage]} alt=""></img>
          <img src={images[currentImage]} alt=""></img>
          <button id="prev" onClick={goToPreviousImage}>&lt;</button>
          <button id="next" onClick={goToNextImage}>&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default App;