import { MutableRefObject, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { Burger, Drawer } from '@mantine/core';

import NavBG from 'assets/nav-bg.png';
import GFLogo from 'assets/Glitterflies_Logo_glow_pink.png';
import GFLogoSm from 'assets/gf2.png';

const NavWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  background-image: url(${NavBG});
  background-position: center center;
  background-size: cover;
  z-index: 199;
  border: 6px solid #222;
`;

const NavInner = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  #logo-sm {
    height: 60px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
  #logo {
    height: 80px;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  a {
    text-decoration: none;
    font-size: var(--size-l-1);
    color: #fff !important;
    text-shadow: 1px 1px 4px #222;
    &:hover,
    &:focus {
      color: rgba(255, 255, 255, 0.8);
    }
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Social = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  a {
    font-size: var(--size-l-4);
    svg {
      display: block;
    }
  }
  @media screen and (max-width: 767px) {
    font-size: var(--size-l-3);
  }
`;

const MobileNav = styled(Drawer)`
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
`;

const MobileNavInner = styled.div`
  padding: 0 2rem;
  text-align: center;
  font-family: 'augieregular';
  font-size: var(--size-l-1);
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1 0 100%;
      margin-bottom: 2rem;
      &.social {
        flex: 1;
        padding: 0 1rem;
        text-align: right;
        &:last-child {
          text-align: left;
        }
      }
    }
  }
  a {
    color: #fff !important;
    text-decoration: none;
  }
`;

const BurgerWrapper = styled.div`
  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const getYOffset = (el: HTMLElement) => {
  const box = el.getBoundingClientRect();
  const body = document.body;
  const docEl = document.documentElement;
  const scrollTop = window.scrollY || docEl.scrollTop || body.scrollTop;
  const clientTop = docEl.clientTop || body.clientTop || 0;
  const top = box.top + scrollTop - clientTop;
  return Math.round(top);
};

const Nav: React.FC = () => {
  const navRef = useRef<HTMLDivElement>();
  const [navHeight, setNavHeight] = useState(0);
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNavHeight(navRef.current?.clientHeight || 0);
    }, 1000);
  }, []);

  const anchorScroll = (
    e: React.MouseEvent | React.KeyboardEvent,
    anchor: string,
    isMobile?: boolean
  ) => {
    e.preventDefault();
    const el = document.getElementById(anchor);
    if (el) {
      if (isMobile) {
        setMobileNavIsOpen(false);
      }

      const top = getYOffset(el) - navHeight;
      setTimeout(() => {
        window.scrollTo({ behavior: 'smooth', top: top });
      }, 1);
    }
  };

  return (
    <NavWrapper ref={navRef as MutableRefObject<HTMLDivElement>}>
      <NavInner>
        <LogoWrapper>
          <a href="#intro" onClick={(e) => anchorScroll(e, 'intro')}>
            <img id="logo-sm" src={GFLogoSm} alt="The Glitterflies" />
            <img id="logo" src={GFLogo} alt="The Glitterflies" />
          </a>
        </LogoWrapper>
        <Links>
          <a href="#tech" onClick={(e) => anchorScroll(e, 'tech')}>
            The Technology
          </a>
          <a href="#roadmap" onClick={(e) => anchorScroll(e, 'roadmap')}>
            The Roadmap
          </a>
          <a href="#team" onClick={(e) => anchorScroll(e, 'team')}>
            The Team
          </a>
          <Social>
            <a
              href="https://discord.gg/yume-labs"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord aria-label="Yume Labs Discord" />
            </a>
            <a
              href="https://twitter.com/TheGlitterflies"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter aria-label="Glitterflies Twitter" />
            </a>
          </Social>
        </Links>
        <BurgerWrapper>
          <Burger
            title="Open Navigation"
            opened={mobileNavIsOpen}
            onClick={() => setMobileNavIsOpen((o: boolean) => !o)}
          />
        </BurgerWrapper>
      </NavInner>
      <MobileNav
        opened={mobileNavIsOpen}
        onClose={() => setMobileNavIsOpen(false)}
        position="right"
        aria-labelledby="sr-only"
        closeButtonLabel="Close Navigation"
      >
        <MobileNavInner>
          <div id="navtitle" className="sr-only">
            Navigation
          </div>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <a href="#tech" onClick={(e) => anchorScroll(e, 'tech', true)}>
                The Technology
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                onClick={(e) => anchorScroll(e, 'roadmap', true)}
              >
                The Roadmap
              </a>
            </li>
            <li>
              <a href="#team" onClick={(e) => anchorScroll(e, 'team', true)}>
                The Team
              </a>
            </li>
            <li className="social">
              <a
                href="https://discord.gg/yume-labs"
                target="_blank"
                rel="noreferrer"
              >
                <FaDiscord aria-label="Yume Labs Discord" />
              </a>
            </li>
            <li className="social">
              <a
                href="https://twitter.com/TheGlitterflies"
                target="_blank"
                rel="noreferrer"
              >
                <FaTwitter aria-label="Glitterflies Twitter" />
              </a>
            </li>
          </ul>
        </MobileNavInner>
      </MobileNav>
    </NavWrapper>
  );
};

export default Nav;
