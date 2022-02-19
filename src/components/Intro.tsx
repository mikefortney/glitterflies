import styled from 'styled-components';
import Button from './Button';
import { Gradient } from './styled-components';

import GF2Flip from '../assets/gf2-flip.png';

const Wrapper = styled(Gradient)`
  padding: 10rem 0 10rem;
  border: 6px solid #222;
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
  @media screen and (max-width: 1199px) {
    flex-direction: column;
  }
`;

const MintButton = styled.div`
  text-align: center;
`;

const GFImg = styled.div`
  @media screen and (max-width: 991px) {
    max-width: 60%;
    position: relative;
    left: 20px;
  }
  @media screen and (max-width: 767px) {
    max-width: 90%;
    position: relative;
    left: 20px;
  }
`;

const Intro: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <IntroContent>
          <h1>These are the Glitterflies</h1>
          <p>
            The Glitterflies are 777 uniquely generated NFTs on Solana; first
            seen in the lore of Kitten Coup, Glitterflies are imbued with
            powerful teleportation magic and will be bringing it soon to Solana
            games near you.
          </p>
          <MintDetails>
            <div>
              <h4>Mint Details</h4>
              <ul>
                <li>Date: 3rd March, 2022</li>
                <li>Time: 10:00 PM UTC</li>
                <li>Price: .33 $SOL</li>
              </ul>
            </div>
            <MintButton>
              <Button size="medium">Connect Wallet</Button>
            </MintButton>
          </MintDetails>
        </IntroContent>
        <GFImg>
          <img src={GF2Flip} alt="" />
        </GFImg>
      </Inner>
    </Wrapper>
  );
};

export default Intro;
