import { MutableRefObject, useEffect, useState } from 'react';
import styled from 'styled-components';
import { GrRewind } from 'react-icons/gr';
import Fade from 'react-reveal';
import { smoothScroll } from './gfUtils';

import GFBG from '../assets/GFBG.png';
import GFLeft from '../assets/gf2.png';
import GFMid from '../assets/gf3.png';
import GFRight from '../assets/gf1.png';
import GFLogo from '../assets/Glitterflies_Logo_glow_pink.png';

const Wrapper = styled.div`
  height: 100vh;
  background-image: url(${GFBG});
  background-size: cover;
  background-position: center center;
  text-align: center;
  position: relative;
  overflow: hidden;

  #gf-left,
  #gf-mid,
  #gf-right {
    position: absolute;
  }

  #gf-left {
    bottom: 1%;
    left: 0.5%;
    width: 26%;
    @media screen and (max-width: 991px) {
      bottom: auto;
      top: 8%;
      left: 7%;
      width: 30%;
    }
    @media screen and (max-width: 767px) {
      top: 18%;
      left: 2%;
      width: 40%;
    }
  }

  #gf-mid {
    top: 2%;
    left: 39%;
    width: 28%;
    @media screen and (max-width: 991px) {
      width: 32%;
      top: 8%;
      left: auto;
      right: 4%;
    }
    @media screen and (max-width: 767px) {
      width: 40%;
      top: 20%;
      right: -15px;
    }
  }

  #gf-right {
    bottom: 6%;
    right: 1%;
    width: 28%;
    @media screen and (max-width: 991px) {
      bottom: 12%;
      right: 40%;
    }
    @media screen and (max-width: 767px) {
      bottom: 20%;
    }
  }

  #logo {
    position: absolute;
    top: 45%;
    left: 25%;
    width: 50%;
    z-index: 10;
    @media screen and (max-width: 991px) {
      top: 40%;
      width: 100%;
      left: 0;
    }
    @media screen and (max-width: 767px) {
      top: 45%;
    }
  }
`;

const DownArrow = styled.div`
  font-size: 2rem;
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%) rotate(-90deg);
  @media screen and (max-width: 767px) {
    bottom: 0.5rem;
  }
  svg > polygon {
    stroke: #fff;
  }
`;

interface HeroProps {
  navRef: MutableRefObject<HTMLDivElement>;
}

const Hero: React.FC<HeroProps> = ({ navRef }) => {
  const [run, setRun] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    setNavHeight(navRef.current?.clientHeight || 0);
    setTimeout(() => {
      setRun(true);
    }, 500);
  }, [navRef]);
  return (
    <Wrapper id="top">
      <Fade left when={run}>
        <img id="gf-left" src={GFLeft} alt="" />
      </Fade>
      <Fade top when={run}>
        <img id="gf-mid" src={GFMid} alt="" />
      </Fade>
      <Fade right when={run}>
        <img id="gf-right" src={GFRight} alt="" />
      </Fade>
      <Fade when={run}>
        <img id="logo" src={GFLogo} alt="The Glitterflies" />
      </Fade>
      <DownArrow>
        <a href="#intro" onClick={(e) => smoothScroll(e, 'intro', navHeight)}>
          <GrRewind />
        </a>
      </DownArrow>
    </Wrapper>
  );
};

export default Hero;
