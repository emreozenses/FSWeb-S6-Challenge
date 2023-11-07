import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,

  } from "reactstrap";

const Karakter = ({ peopleData }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === peopleData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? peopleData.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };



  const slides = peopleData.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.name}
      >
        <h3>{item.name}</h3>
        <hr/>
        <h4>Gender : {item.gender}</h4>
        <h4>Height : {item.height}</h4>
        <h4>Mass : {item.mass}</h4>
        <h4>Birth Year : {item.birth_year}</h4>
        <h4>Eye Color : {item.eye_color}</h4>
        <h4>Hair Color : {item.hair_color}</h4>
        <h4>Skin Color : {item.skin_color}</h4>
        <h4>Films : {item.films}</h4>
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>

      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );

  
};

export default Karakter;
