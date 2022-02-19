import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Glide from '@glidejs/glide';
import {
  Panel,
  // Panels,
  PanelInner,
  SectionTitle as ST,
  Gradient
} from './styled-components';
import { BiRightArrow } from 'react-icons/bi';
import { BiLeftArrow } from 'react-icons/bi';

import Misty from 'assets/misty.jpg';
import Nyaumon from 'assets/nyaumon.jpg';
import Yosan from 'assets/yosan.png';
import Kufim from 'assets/kufim.jpg';

interface TeamMemberProps {
  name: string;
  imgSrc: string;
  twitterHandle: string;
  intro: string;
}

const theTeam: TeamMemberProps[] = [
  {
    name: 'MistyBayou',
    imgSrc: Misty,
    twitterHandle: 'MistyBayouNFT',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Nyaumon',
    imgSrc: Nyaumon,
    twitterHandle: 'nyaumon',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Yosan',
    imgSrc: Yosan,
    twitterHandle: '_yhwhy',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    name: 'Kufim',
    imgSrc: Kufim,
    twitterHandle: 'kufimbank',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const SectionTitle = styled(ST)`
  border: 6px solid #222;
`;

const Wrapper = styled(Gradient)`
  text-align: center;
  padding: 4rem 0;
  border: 6px solid #222;
  border-top: none;
  a {
    color: #333;
    &:hover,
    &:focus {
      color: #444;
    }
    &:visited,
    &:active {
      color: #333;
    }
  }
  & > div {
    max-width: 1199px;
    margin: 0 auto;
    @media screen and (max-width: 1199px) {
      max-width: 90%;
    }
    @media screen and (max-width: 1199px) {
      max-width: 100%;
    }
  }
  /* .glide__slide {
    max-width: 412px;
  } */
  .glide__arrow {
    color: rgba(255, 255, 255, 0.5);
    text-shadow: 0 0.25em 0.5em rgb(0 0 0 / 10%);
  }
`;

const Pfp = styled.div`
  border-bottom: 6px solid #222;
`;

const Name = styled.div`
  padding-bottom: 0.5rem;
`;

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  imgSrc,
  twitterHandle,
  intro
}) => {
  return (
    <li className="glide__slide">
      <Panel>
        <Pfp>
          <img src={imgSrc} alt="" />
        </Pfp>
        <PanelInner>
          <Name>
            <a
              href={`https://twitter.com/${twitterHandle}`}
              target="_blank"
              rel="noreferrer"
            >
              {name}
            </a>
          </Name>
          <div>{intro}</div>
        </PanelInner>
      </Panel>
    </li>
  );
};

const Team: React.FC = () => {
  const [glideHasMounted, setGlideHasMounted] = useState(false);
  useEffect(() => {
    if (!glideHasMounted && document.querySelector('.glide')) {
      new Glide('.glide', {
        breakpoints: {
          1199: {
            perView: 3
          },
          991: {
            perView: 2
          },
          767: {
            perView: 1,
            peek: 50
          }
        },
        peek: 100,
        perView: 4
      }).mount();
      setGlideHasMounted(true);
    }
  }, [glideHasMounted]);
  return (
    <>
      <SectionTitle>
        <h2>The Team</h2>
      </SectionTitle>
      <Wrapper>
        {/* <Panels> */}
        <div>
          <div className="glide">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {theTeam.map((m) => (
                  <TeamMember
                    key={m.name}
                    name={m.name}
                    imgSrc={m.imgSrc}
                    twitterHandle={m.twitterHandle}
                    intro={m.intro}
                  />
                ))}
              </ul>
            </div>
            <div className="glide__arrows" data-glide-el="controls">
              <button
                className="glide__arrow glide__arrow--left"
                data-glide-dir="<"
              >
                <BiLeftArrow title="Previous" />
              </button>
              <button
                className="glide__arrow glide__arrow--right"
                data-glide-dir=">"
              >
                <BiRightArrow title="Next" />
              </button>
            </div>
          </div>
        </div>
        {/* </Panels> */}
      </Wrapper>
    </>
  );
};

export default Team;
