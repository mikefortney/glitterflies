import { forwardRef, MutableRefObject, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { Burger, Drawer } from '@mantine/core';
import { smoothScroll } from './gfUtils';

import NavBG from '../assets/nav-bg.png';
import GFLogo from '../assets/Glitterflies_Logo_glow_pink.png';
import GFLogoSm from '../assets/gf2.png';

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
    font-size: var(--size-l-3);
    svg {
      display: block;
    }
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
        padding: 0 2rem;
        text-align: right;
        font-size: var(--size-l-4);
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

const Nav = forwardRef<HTMLDivElement>((_props, ref) => {
  const [navHeight, setNavHeight] = useState(0);
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setNavHeight(
        (ref as MutableRefObject<HTMLDivElement>).current?.clientHeight || 0
      );
    }, 1000);
  }, [ref]);

  return (
    <NavWrapper ref={ref}>
      <NavInner>
        <LogoWrapper>
          <a href="#top" onClick={(e) => smoothScroll(e, 'top', navHeight)}>
            <img id="logo-sm" src={GFLogoSm} alt="The Glitterflies" />
            <img id="logo" src={GFLogo} alt="The Glitterflies" />
          </a>
        </LogoWrapper>
        <Links>
          <a href="#intro" onClick={(e) => smoothScroll(e, 'intro', navHeight)}>
            The Mint
          </a>
          <a href="#tech" onClick={(e) => smoothScroll(e, 'tech', navHeight)}>
            The Technology
          </a>
          <a
            href="#roadmap"
            onClick={(e) => smoothScroll(e, 'roadmap', navHeight)}
          >
            The Roadmap
          </a>
          <a href="#team" onClick={(e) => smoothScroll(e, 'team', navHeight)}>
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
            color="#fff"
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
              <a
                href="#intro"
                onClick={(e) =>
                  smoothScroll(e, 'intro', navHeight, true, () =>
                    setMobileNavIsOpen(false)
                  )
                }
              >
                The Mint
              </a>
            </li>
            <li>
              <a
                href="#tech"
                onClick={(e) =>
                  smoothScroll(e, 'tech', navHeight, true, () =>
                    setMobileNavIsOpen(false)
                  )
                }
              >
                The Technology
              </a>
            </li>
            <li>
              <a
                href="#roadmap"
                onClick={(e) =>
                  smoothScroll(e, 'roadmap', navHeight, true, () =>
                    setMobileNavIsOpen(false)
                  )
                }
              >
                The Roadmap
              </a>
            </li>
            <li>
              <a
                href="#team"
                onClick={(e) =>
                  smoothScroll(e, 'team', navHeight, true, () =>
                    setMobileNavIsOpen(false)
                  )
                }
              >
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
});

export default Nav;
