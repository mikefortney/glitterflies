import React from 'react';
import styled from 'styled-components';
import { Panel, SinglePanel } from './styled-components';

import Misty from 'assets/misty.jpg';
import Nyaumon from 'assets/nyaumon.jpg';
import Yosan from 'assets/yosan.jpg';
import Kufim from 'assets/kufim.jpg';

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

const Name = styled.div`
  padding: 0.5rem 0;
`;

const Team = () => {
  return (
    <Wrapper>
      <SinglePanel>
        <Panel className="text default">
          <div>
            <img src={Misty} alt="" />
          </div>
          <Name>
            <a href="https://twitter.com/MistyBayouNFT" target="_blank">
              MistyBayou
            </a>
          </Name>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </Panel>
      </SinglePanel>
      <SinglePanel>
        <Panel className="text default">
          <div>
            <img src={Nyaumon} alt="" />
          </div>
          <Name>
            <a href="https://twitter.com/nyaumon" target="_blank">
              Nyaumon
            </a>
          </Name>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </Panel>
      </SinglePanel>
      <SinglePanel>
        <Panel className="text default">
          <div>
            <img src={Yosan} alt="" />
          </div>
          <Name>
            <a href="https://twitter.com/_yhwhy" target="_blank">
              Yosan
            </a>
          </Name>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </Panel>
      </SinglePanel>
      <SinglePanel>
        <Panel className="text default">
          <div>
            <img src={Kufim} alt="" />
          </div>
          <Name>
            <a href="https://twitter.com/kufimbank" target="_blank">
              Kufim
            </a>
          </Name>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </Panel>
      </SinglePanel>
    </Wrapper>
  );
};

export default Team;
