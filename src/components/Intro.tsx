import styled from 'styled-components';

import GlitterflyRoughPanel from 'assets/glitterfly-rough-2.png';

const IntroWraper = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 3rem;
  align-items: center;
  padding: 6rem 3rem 0;

  @media screen and (max-width: 749px) {
    display: block;
  }
`;

const Info = styled.div`
  font-size: var(--size-l-3);
  small {
    display: block;
    font-size: 1rem;
    &:before {
      height: 10px;
      width: 10px;
      background: currentColor;
      margin-right: 8px;
      position: relative;
      content: '';
      display: inline-block;
      bottom: 1px;
    }
  }
`;

const Image = styled.div`
  text-align: center;
  img {
    display: inline-block;
  }
`;

const Intro: React.FC = () => {
  return (
    <IntroWraper>
      <Info>
        <small>These are the Glitterflies</small>
        <h1>
          777 lorem ipsum dolor
          <br />
          consectetur adipiscing
          <br />
          sed do eiusmod tempor
          <br />
          labore et dolore
        </h1>
      </Info>
      <Image>
        <img src={GlitterflyRoughPanel} alt="" />
      </Image>
    </IntroWraper>
  );
};

export default Intro;
