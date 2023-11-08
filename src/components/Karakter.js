import React, { useState } from "react";
import { useEffect } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,

} from "reactstrap";
import styled from "styled-components";

const KarakterInput = styled.input`
  margin-bottom: 5rem;
  margin-top: 0rem;
`;

const KarakterDiv = styled.div`
  margin-bottom: 0rem;
  margin-top: 0rem;
`;

const Karakter = ({ peopleData,filmData }) => {
   
  const [filterText, setFilterText] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);


  useEffect(
    () => {
      setFilteredPeople(
        peopleData.filter((people) => {
          return(
          people.name.toLowerCase().includes(filterText.toLowerCase())
        )})
      );
    },
    [filterText],
    [peopleData]
  );

  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const slides = filteredPeople.map((item) => {
    return (
      <div key={item.name}>
        <Accordion open={open} toggle={toggle}>
          <AccordionItem>
            <AccordionHeader targetId={peopleData.indexOf(item)}>
              <strong>{item.name}</strong>
            </AccordionHeader>
            <AccordionBody accordionId={peopleData.indexOf(item)}>
              <h4>Gender : {item.gender}</h4>
              <h4>Height : {item.height}</h4>
              <h4>Mass : {item.mass}</h4>
              <h4>Birth Year : {item.birth_year}</h4>
              <h4>Eye Color : {item.eye_color}</h4>
              <h4>Hair Color : {item.hair_color}</h4>
              <h4>Skin Color : {item.skin_color}</h4>
                {filmData.map((item) => {
                return (
                  <div key={item.title}>
                    <Accordion open={open} toggle={toggle}>
                      <AccordionItem>
                        <AccordionHeader targetId={item.episode_id}>
                          <strong>{item.title}</strong>
                        </AccordionHeader>
                        <AccordionBody accordionId={item.episode_id}>
                          <h4>Episode : {item.episode_id}</h4>
                          <h4>{item.opening_crawl}</h4>
                          <h4>Director : {item.director}</h4>
                          <h4>Producer : {item.producer}</h4>
                          <h4>Release Date : {item.release_date}</h4>
                        </AccordionBody>
                      </AccordionItem>
                    </Accordion>
                  </div>
                );
              })}
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </div>
    );
  });
  return (
    <KarakterDiv>
      <KarakterInput
        type="text"
        placeholder="Search"
        onChange={(e) => setFilterText(e.target.value)}
      />
      {slides}
      
    </KarakterDiv>
  );
};

export default Karakter;
