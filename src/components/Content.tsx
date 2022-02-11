import styled from 'styled-components';
import Button from './Button';
import InfoPanels from './InfoPanels';
// import Intro from './Intro';
import Nav from './Nav';
import Team from './Team';

const ContentWrapper = styled.div`
  background-image: linear-gradient(
    to right top,
    #c06ae9,
    #a56de2,
    #8b6fd8,
    #736ecc,
    #5f6cbe,
    #4878c6,
    #2c84ca,
    #008ecb,
    #00aad6,
    #00c4cd,
    #00dab4,
    #77ec91
  );
  color: #fff;
  z-index: 1;
  /* margin-top: 100vh; */
  position: relative;
  min-height: 100vh;
  padding: 1rem;
  font-family: 'augieregular';
`;

const MintButton = styled.div`
  text-align: center;
  padding: 10rem 0;
`;

const Content: React.FC = () => {
  return (
    <ContentWrapper>
      <Nav />
      {/* <Intro /> */}
      <InfoPanels />
      <MintButton>
        <Button size="large">Mint - Coming Soon</Button>
      </MintButton>
      <Team />
    </ContentWrapper>
  );
};

export default Content;
