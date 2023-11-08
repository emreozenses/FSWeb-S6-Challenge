import styled from "styled-components";
import Karakter from "../components/Karakter";
import Paging from "./Paging";
const MainD = styled.div`
  margin-bottom: 0rem;
`;
const Main = ({
  peopleData,
  filmData,
  pageHandler,
  numberOfPages
}) => {
  return (
    <MainD>
      <Karakter peopleData={peopleData} filmData={filmData} />
      <Paging pageHandler={pageHandler} numberOfPages={numberOfPages} />
    </MainD>
  );
};

export default Main;
