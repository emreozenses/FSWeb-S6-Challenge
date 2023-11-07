import styled from "styled-components";
import Karakter from "../components/Karakter";
const MainD = styled.div`
margin-bottom: 30rem;
`;
const Main = ({ peopleData }) => {
  return (
    <MainD>
      <Karakter peopleData={peopleData} />
    </MainD>
  );
};

export default Main;
