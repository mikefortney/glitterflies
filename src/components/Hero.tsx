import styled from 'styled-components';
import { GrRewind } from 'react-icons/gr';

import GFHero from 'assets/glitterflies-hero.png';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${GFHero});
  background-size: cover;
  background-position: center center;
  text-align: center;
`;

const Logo = styled.div`
  display: inline-block;
  position: relative;
  /* padding-top: 100px; */
  height: 100%;
  & > div {
    font-family: 'Comforter', cursive;
    font-size: var(--size-l-9);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-shadow: 0px 5px 10px rgba(255, 255, 255, 0.75);
    @media screen and (max-width: 749px) {
      font-size: var(--size-l-6);
      transform: translate(-50%, 30%);
    }
  }
`;

const DownArrow = styled.div`
  font-size: 2rem;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) rotate(-90deg);
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <Logo>
        {/* <img src={GlitterflyRough} alt="" /> */}
        <div>Glitterflies</div>
      </Logo>
      <DownArrow>
        <GrRewind />
      </DownArrow>
    </Wrapper>
  );
};

export default Hero;
