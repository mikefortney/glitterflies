import React from 'react';
import styled from 'styled-components';
import { Panels, Panel } from './styled-components';

import GlitterflyRoughPanel from 'assets/glitterfly-rough-2.png';
import Crystal from 'assets/crystal.jpg';

const GFImage = styled.img`
  position: absolute;
  top: -42px;
  left: -34px;
  z-index: 10;
  width: 552px;
  max-width: unset;
`;

const InfoPanels = () => {
  return (
    <Panels>
      <Panel className="text">
        <small>These are the Glitterflies</small>
        777 lorem ipsum dolor
        <br />
        consectetur adipiscing
        <br />
        sed do eiusmod tempor
        <br />
        labore et dolore
      </Panel>
      <Panel style={{ height: '465px' }}>
        <GFImage src={GlitterflyRoughPanel} alt="" />
      </Panel>
      <Panel>
        <img src={Crystal} width="100%" alt="" />
      </Panel>
      <Panel className="text">
        More info about the collection ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum
        <br />
        <a href="https://t.co/MDEs7IZXEn" target="_blank" rel="noreferrer">
          Read the Whitepaper
        </a>
      </Panel>
    </Panels>
  );
};

export default InfoPanels;
