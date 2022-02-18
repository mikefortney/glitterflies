import React from 'react';
import styled from 'styled-components';
import {
  Panel,
  Panels,
  PanelInner,
  SectionTitle as ST,
  Gradient
} from './styled-components';

import Misty from 'assets/misty.jpg';
import Nyaumon from 'assets/nyaumon.jpg';
import Yosan from 'assets/yosan.jpg';
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
    max-width: 1200px;
    margin: 0 auto;
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
        <div className="text default">{intro}</div>
      </PanelInner>
    </Panel>
  );
};

const Team: React.FC = () => {
  return (
    <>
      <SectionTitle>
        <h2>The Team</h2>
      </SectionTitle>
      <Wrapper>
        <Panels>
          {theTeam.map((m) => (
            <TeamMember
              key={m.name}
              name={m.name}
              imgSrc={m.imgSrc}
              twitterHandle={m.twitterHandle}
              intro={m.intro}
            />
          ))}
        </Panels>
      </Wrapper>
    </>
  );
};

export default Team;
