import styled from 'styled-components';
import {
  Panel as Pnl,
  PanelInner as PI,
  Panels as Pnls,
  SectionTitle
} from './styled-components';
import { Timeline } from '@mantine/core';

import GFBF from '../assets/GFBG.png';
import GF2 from '../assets/gf2.png';

const Wrapper = styled.div`
  padding: 5rem 2rem;
  background-image: url(${GFBF});
  background-size: cover;
  background-position: center center;

  .mantine-Timeline-item {
    &:not(.mantine-Timeline-itemLineActive):before {
      border-left-color: #666 !important;
    }
    &:not(.mantine-Timeline-itemActive) {
      .mantine-Timeline-itemBullet {
        border-color: #666;
        background-color: #666;
      }
    }
  }

  .mantine-Timeline-itemTitle {
    font-weight: 600;
  }

  @media screen and (max-width: 767px) {
    padding: 2rem 1rem;
  }
`;

const Panels = styled(Pnls)`
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
  }
  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

const Panel = styled(Pnl)`
  background-color: rgba(255, 255, 255, 0.9);
`;

const PanelInner = styled(PI)`
  padding: 2rem;
`;

const GFImg = styled.div`
  flex: 1;
  position: relative;
  @media screen and (max-width: 991px) {
    min-height: 500px;
  }
  @media screen and (max-width: 767px) {
    min-height: 350px;
  }
  img {
    width: 65%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);
    @media screen and (max-width: 1199px) {
      width: 90%;
      transform: translate(-62%, -50%);
    }
    @media screen and (max-width: 991px) {
      width: 75%;
      transform: translate(-55%, -40%);
    }
    @media screen and (max-width: 767px) {
      width: 90%;
    }
  }
`;

const Roadmap: React.FC = () => {
  return (
    <>
      <SectionTitle id="roadmap">
        <h2>The Roadmap</h2>
      </SectionTitle>
      <Wrapper>
        <Panels>
          <GFImg>
            <img src={GF2} alt="" />
          </GFImg>
          <Panel>
            <PanelInner>
              <Timeline
                active={0}
                bulletSize={16}
                color="grape"
                lineWidth={2}
                styles={{
                  itemTitle: { fontFamily: `'augieregular'` }
                }}
              >
                <Timeline.Item
                  bullet={' '}
                  title="Pre-Mint"
                  lineVariant="dashed"
                >
                  <ul>
                    <li>Fill 777 whitelist spots.</li>
                    <li>Secure secondary market listings.</li>
                    <li>Secure rarity tool listings.</li>
                    <li>Glitterflies sneak peeks.</li>
                    <li>Multi-channel marketing campaign.</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item bullet={' '} title="Mint" lineVariant="dashed">
                  <ul>
                    <li>
                      Mint right here on{' '}
                      <a href="https://glitterflies.io/">
                        https://glitterflies.io/
                      </a>{' '}
                      from 10pm UTC.
                    </li>
                    <li>Whitelist can mint one per wallet for 4 hours.</li>
                    <li>Public sale after 4 hours.</li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item
                  bullet={' '}
                  title="Post-Mint"
                  lineVariant="dashed"
                >
                  <ul>
                    <li>Secondary market &amp; rarity tool listings.</li>
                    <li>
                      Establish Glitterflies holder channels &amp; Yume Club
                      channels.
                    </li>
                    <li>Establish wallet verification.</li>
                    <li>
                      10% of mint proceeds will be donated to{' '}
                      <a
                        href="https://www.zerofoodprint.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Zero Foodprint
                      </a>
                      .
                    </li>
                  </ul>
                </Timeline.Item>
                <Timeline.Item bullet={' '} title="Ongoing">
                  <ul>
                    <li>
                      Build tooling, utility, and NFTs over time to establish
                      funding to enter the gaming market.
                    </li>
                    <li>
                      Holders of all Yume Labs NFTs &amp; Kitten Coup will
                      receive privileged access to all releases.
                    </li>
                    <li>
                      Yume Club will bring together premium subscribers &amp;
                      NFT holders for exclusive partnerships &amp; benefits.
                    </li>
                    <li>
                      10% of royalties will be donated to{' '}
                      <a
                        href="https://www.zerofoodprint.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Zero Foodprint
                      </a>
                      .
                    </li>
                  </ul>
                </Timeline.Item>
              </Timeline>
            </PanelInner>
          </Panel>
        </Panels>
      </Wrapper>
    </>
  );
};

export default Roadmap;
