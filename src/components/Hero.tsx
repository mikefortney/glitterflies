import styled from 'styled-components';
import { GrRewind } from 'react-icons/gr';

import GFBG from 'assets/GFBG.png';
import GF1 from 'assets/gf1.png';
import GF2 from 'assets/gf2.png';
import GF3 from 'assets/gf3.png';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${GFBG});
  background-size: cover;
  background-position: center center;
  text-align: center;
  position: relative;
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
    @media screen and (max-width: 767px) {
      font-size: var(--size-l-6);
      transform: translate(-50%, 60%);
    }
  }
`;

const GFImg = styled.img`
  position: absolute;
  max-width: none;
`;

const GFLeft = styled(GFImg)`
  top: 1%;
  left: 0.5%;
  width: 33%;
  @media screen and (max-width: 991px) {
    top: 18%;
    left: 2%;
  }
  @media screen and (max-width: 767px) {
    top: 10%;
    left: 50%;
    width: 50%;
    transform: translate(-40%, 0);
  }
`;

const GFMid = styled(GFImg)`
  top: 50%;
  left: 50%;
  transform: translate(-59%, -44%);
  width: 43%;
`;

const GFRight = styled(GFImg)`
  bottom: 6%;
  right: 1%;
  width: 33%;
  @media screen and (max-width: 991px) {
    bottom: 18%;
  }
  @media screen and (max-width: 767px) {
    bottom: 10%;
    right: 50%;
    transform: translate(40%, 0);
  }
`;

const DownArrow = styled.div`
  font-size: 2rem;
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%) rotate(-90deg);
  @media screen and (max-width: 767px) {
    bottom: 0.5rem;
  }
`;

const Hero: React.FC = () => {
  return (
    <Wrapper>
      <GFLeft src={GF3} alt="" />
      <GFMid src={GF2} alt="" />
      <GFRight src={GF1} alt="" />
      <Logo>
        <div>Glitterflies</div>
      </Logo>
      <DownArrow>
        <GrRewind />
      </DownArrow>
    </Wrapper>
  );
};

export default Hero;
