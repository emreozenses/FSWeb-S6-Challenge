import styled from "styled-components";
import Karakter from "../components/Karakter";
const MainD = styled.div`
margin-bottom: 0rem;
`;
const Main = ({ peopleData }) => {
  return (
    <MainD>
      <Karakter peopleData={peopleData} />
    </MainD>
  );
};

export default Main;
