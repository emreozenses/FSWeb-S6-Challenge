import styled from "styled-components";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Main from "./layout/Main";
import img from "./images/sw-bg.jpg";
import starimg from "./images/starry-night-sky.jpg";

const App = () => {
  const AppDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${starimg});
  `;
  const Header = styled.h1`
    color: white;
    text-shadow: 1px 1px 5px #fff;
  `;
  const MainDiv = styled.div`
    display: flex;
    background-image: url(${img});
    background-size: cover;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 90vh;
  `;

  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((res) => {
        console.log("peopleData:", res.data);
        setPeopleData(res.data);
      })
      .catch((err) => {
        console.log("Veriler Yüklenemedi!", err);
      });
  }, []);

  return (
    <AppDiv>
      <Header>StarWars Characters</Header>
      <MainDiv>
        <Main peopleData={peopleData} />
      </MainDiv>
    </AppDiv>
  );
};

export default App;
