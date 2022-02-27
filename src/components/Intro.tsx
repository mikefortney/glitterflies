import styled from 'styled-components';
import { Gradient } from './styled-components';

import GF4Flip from '../assets/FieryWingsFlip.png';

const Wrapper = styled(Gradient)`
  padding: 4rem 0 4rem;
`;

const Inner = styled.div`
  display: flex;
  gap: 4rem;
  align-items: center;
  max-width: 1600px;
  margin: 0 auto;
  @media screen and (max-width: 1199px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 991px) {
    flex-direction: column-reverse;
    gap: 2rem;
  }
`;

const IntroContent = styled.div`
  font-size: var(--size-l-2);
  h1 {
    font-size: var(--size-l-3);
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
      bottom: 7px;
    }
  }
  h4 {
    padding: 1rem 0;
  }
  ul {
    margin: 0;
  }
`;

const MintDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  & > div {
    flex: 1;
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const MintButton = styled.div`
  display: inline-block;
  margin: 0 auto;
`;

const GFImg = styled.div`
  max-width: 35%;
  @media screen and (max-width: 991px) {
    max-width: 60%;
    position: relative;
    left: 20px;
  }
  @media screen and (max-width: 767px) {
    max-width: 90%;
    left: auto;
  }
`;

const Intro: React.FC = () => {
  return (
    <Wrapper id="intro">
      <Inner>
        <IntroContent>
          <h1>These are the Glitterflies</h1>
          <p>
            The Glitterflies are 777 uniquely generated NFTs on Solana; first
            seen in the lore of Kitten Coup, Glitterflies are imbued with
            powerful teleportation magic and will be bringing it soon to Solana
            games near you.
          </p>
          <div>
            <h4>Mint Details</h4>
            <MintDetails>
              <div>
                Whitelist
                <ul>
                  <li>Date: 6th March, 2022</li>
                  <li>Time: 10:00 PM UTC</li>
                  <li>Price: .33 $SOL</li>
                </ul>
              </div>
              <div>
                Public
                <ul>
                  <li>Date: 7th March, 2022</li>
                  <li>Time: 2:00 AM UTC</li>
                  <li>Price: 1 $SOL</li>
                </ul>
              </div>
            </MintDetails>
            <MintButton>{/* Misty put the candy machine here :) */}</MintButton>
          </div>
        </IntroContent>
        <GFImg>
          <img src={GF4Flip} alt="" />
        </GFImg>
      </Inner>
    </Wrapper>
  );
};

export default Intro;
