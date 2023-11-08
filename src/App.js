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
    height: 91vh;
  `;

  const [peopleData, setPeopleData] = useState([]);
  const [filmData, setFilmData] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/?page=${activePage}`)
      .then((res) => {
        console.log("peopleData:", res.data.results);
        setPeopleData(res.data.results);
        setNumberOfPages(Math.ceil(res.data.count / res.data.results.length));
      })
      .catch((err) => {
        console.log("Veriler Yüklenemedi!", err);
      });
  }, [activePage]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((res) => {
        console.log("filmData:", res.data.results);
        setFilmData(res.data.results);
      })
      .catch((err) => {
        console.log("Veriler Yüklenemedi!", err);
      });
  }, []);

  const pageHandler = (page) => {
    console.log(page);
    if (page == "previous") {
      setActivePage(activePage - 1);
    } else if (page == "next") {
      setActivePage(activePage + 1);
    }
      else {
        setActivePage(page);
      }};
  console.log(activePage);

  return (
    <AppDiv>
      <Header>StarWars Characters</Header>
      <MainDiv>
        <Main
          peopleData={peopleData}
          filmData={filmData}
          pageHandler={pageHandler}
          numberOfPages={numberOfPages}
        />
      </MainDiv>
    </AppDiv>
  );
};

export default App;
