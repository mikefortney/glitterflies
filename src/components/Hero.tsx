import styled from 'styled-components';
import { GrRewind } from 'react-icons/gr';

import GFBG from 'assets/GFBG.png';
import GF1 from 'assets/gf1.png';
import GF2 from 'assets/gf2.png';
import GF3 from 'assets/gf3.png';
import GFLogo from 'assets/Glitterflies_Logo_glow_pink.png';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${GFBG});
  background-size: cover;
  background-position: center center;
  text-align: center;
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  width: 50%;
  z-index: 10;
  @media screen and (max-width: 991px) {
    top: 50%;
    width: 80%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const GFImg = styled.img`
  position: absolute;
  max-width: none;
`;

const GFLeft = styled(GFImg)`
  bottom: 1%;
  left: 0.5%;
  width: 26%;
  @media screen and (max-width: 991px) {
    width: 30%;
    bottom: auto;
    top: 8%;
    left: 7%;
  }
  @media screen and (max-width: 767px) {
    width: 40%;
    top: 18%;
    left: 2%;
  }
`;

const GFMid = styled(GFImg)`
  top: 2%;
  left: 50%;
  transform: translate(-40%, 0%);
  width: 28%;
  @media screen and (max-width: 991px) {
    width: 32%;
    top: 8%;
    left: auto;
    right: 4%;
    transform: translate(0, 0);
  }
  @media screen and (max-width: 767px) {
    width: 40%;
    top: 20%;
    right: -15px;
  }
`;

const GFRight = styled(GFImg)`
  bottom: 6%;
  right: 1%;
  width: 28%;
  @media screen and (max-width: 991px) {
    bottom: 15%;
    right: 50%;
    transform: translate(40%, 0);
  }
  @media screen and (max-width: 767px) {
    bottom: 25%;
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
      <GFLeft src={GF2} alt="" />
      <GFMid src={GF3} alt="" />
      <GFRight src={GF1} alt="" />
      <Logo>
        <img src={GFLogo} alt="The Glitterflies" />
      </Logo>
      <DownArrow>
        <GrRewind />
      </DownArrow>
    </Wrapper>
  );
};

export default Hero;
