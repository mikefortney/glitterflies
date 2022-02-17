import React from 'react';
import styled from 'styled-components';
import { Panel, SinglePanel } from './styled-components';

import Misty from 'assets/misty.jpg';
import Nyaumon from 'assets/nyaumon.jpg';
import Yosan from 'assets/yosan.jpg';
import Kufim from 'assets/kufim.jpg';

const Title = styled.div`
  text-align: center;
  font-size: var(--size-l-3);
  padding-bottom: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 2rem;
  justify-items: center;
  align-items: center;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 10rem;
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
    max-width: 250px;
  }
`;

const Pfp = styled.div`
  border-bottom: 0.5rem solid #222;
`;

const Name = styled.div`
  padding-top: 0.5rem;
`;

interface TeamMemberProps {
  imgSrc: string;
  twitterHandle: string;
  intro: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  imgSrc,
  twitterHandle,
  intro
}) => {
  return (
    <SinglePanel>
      <Panel>
        <Pfp>
          <img src={imgSrc} alt="" />
        </Pfp>
        <Name>
          <a
            href={`https://twitter.com/${twitterHandle}`}
            target="_blank"
            rel="noreferrer"
          >
            MistyBayou
          </a>
        </Name>
        <div className="text default">{intro}</div>
      </Panel>
    </SinglePanel>
  );
};

const theTeam: TeamMemberProps[] = [
  {
    imgSrc: Misty,
    twitterHandle: 'MistyBayouNFT',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imgSrc: Nyaumon,
    twitterHandle: 'nyaumon',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imgSrc: Yosan,
    twitterHandle: '_yhwhy',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    imgSrc: Kufim,
    twitterHandle: 'kufimbank',
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
];

const Team: React.FC = () => {
  return (
    <>
      <Title>Meet The Team</Title>
      <Wrapper>
        {theTeam.map((m) => (
          <TeamMember
            imgSrc={m.imgSrc}
            twitterHandle={m.twitterHandle}
            intro={m.intro}
          />
        ))}
      </Wrapper>
    </>
  );
};

export default Team;
