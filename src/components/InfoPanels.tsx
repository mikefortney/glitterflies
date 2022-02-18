import React from 'react';
import styled from 'styled-components';
import { Panels, Panel as Pnl, PanelInner } from './styled-components';
import Button from './Button';

import GlitterflyRoughPanel from 'assets/glitterfly-rough-2.png';
import Crystal from 'assets/crystal.jpg';

const GFImage = styled.img`
  position: absolute;
  top: -41px;
  left: -33px;
  z-index: 10;
  width: 542px;
  max-width: unset;
`;

const Panel = styled(Pnl)`
  flex-basis: 488px;
`;

const IntroContent = styled.div`
  font-size: var(--size-l-2);
  h1 {
    display: block;
    font-size: 1rem;
    font-weight: normal;
    padding-bottom: 1rem;
    &:before {
      height: 10px;
      width: 10px;
      background: currentColor;
      margin-right: 8px;
      position: relative;
      content: '';
      display: inline-block;
      bottom: 1px;
    }
  }
`;

const MintButton = styled.div`
  text-align: center;
`;

const InfoPanels = () => {
  return (
    <Panels>
      <Panel>
        <PanelInner>
          <IntroContent>
            <h1>These are the Glitterflies</h1>
            The Glitterflies are 777 uniquely generated NFTs on Solana; first
            seen in the lore of Kitten Coup, Glitterflies are imbued with
            powerful teleportation magic and will be bringing it soon to Solana
            games near you.
          </IntroContent>
        </PanelInner>
      </Panel>
      <Panel style={{ height: '468px' }}>
        <GFImage src={GlitterflyRoughPanel} alt="" />
      </Panel>
      <Panel>
        <img src={Crystal} width="100%" alt="" />
      </Panel>
      <Panel>
        <PanelInner>
          <h2>Mint Details:</h2>
          <div>
            Price: 0.33 $SOL
            <br />
            Date: 3rd March 2022
            <br />
            Time: 10:00 PM UTC
            <br />
          </div>
          <MintButton>
            <Button size="medium">Mint - Coming Soon</Button>
          </MintButton>
          {/* <a href="https://t.co/MDEs7IZXEn" target="_blank" rel="noreferrer">
          Read the Whitepaper
        </a> */}
        </PanelInner>
      </Panel>
    </Panels>
  );
};

export default InfoPanels;
