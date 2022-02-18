import styled from 'styled-components';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
// import Button from './Button';

import GlitterflyRough from 'assets/glitterfly-rough.png';

const NavWrapper = styled.div`
  /* border: 1px solid rgba(255, 255, 255, 0.7); */
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  img {
    height: 60px;
  }
  span {
    font-family: 'Comforter', cursive;
    font-size: var(--size-l-3);
  }
`;

const Links = styled.div`
  font-size: var(--size-l-4);
  display: flex;
  gap: 1rem;
  align-items: center;
  a {
    color: #fff;
    &:hover,
    &:focus {
      color: rgba(255, 255, 255, 0.8);
    }
    svg {
      display: block;
    }
  }
`;

const Nav: React.FC = () => {
  return (
    <NavWrapper>
      <LogoWrapper>
        <img id="nav-logo" src={GlitterflyRough} alt="" />
        <span>Glitterflies</span>
      </LogoWrapper>
      <Links>
        {/* <Button>Mint - Coming Soon</Button> */}
        <a href="https://discord.gg/yume-labs" target="_blank" rel="noreferrer">
          <FaDiscord aria-label="Yume Labs Discord" />
        </a>
        <a
          href="https://twitter.com/TheGlitterflies"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter aria-label="Glitterflies Twitter" />
        </a>
      </Links>
    </NavWrapper>
  );
};

export default Nav;
