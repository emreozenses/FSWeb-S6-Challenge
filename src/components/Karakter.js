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
margin-bottom: 15rem;
margin-top: 0rem;

`;

const KarakterDiv = styled.div`
  margin-bottom: 15rem;
  margin-top: 0rem;
`;

const Karakter = ({ peopleData }) => {
    const [filterText, setFilterText] = useState("");
    const [filteredPeople , setFilteredPeople] = useState([]);
    
    useEffect(()=>{
        setFilteredPeople(
            peopleData.filter((people)=>
            people.name.toLowerCase().includes(filterText.toLowerCase())
            )
        );
    },[filterText,[peopleData]]);
    
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
            <h4>Films : {item.films}</h4>
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
