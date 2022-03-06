import styled from 'styled-components';
import { SectionTitle } from './styled-components';

import GFBF from '../assets/GFBG.png';
import GF1 from '../assets/ImpishWings.png';
import GF2 from '../assets/SneakPeek2.png';

const ImgBlock = styled.div`
  background-image: url(${GFBF});
  background-position: top left;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 60%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 1199px) {
      max-width: 80%;
    }
    @media screen and (max-width: 991px) {
      max-width: 60%;
    }
    @media screen and (max-width: 767px) {
      max-width: 90%;
    }
  }
  @media screen and (max-width: 991px) {
    min-height: 550px;
    border-top: none !important;
    border-bottom: none !important;
  }
`;

const TextBlock = styled.div`
  &.one {
    background-image: radial-gradient(
      circle,
      #6eeaff,
      #56ddff,
      #44d0ff,
      #3fc2ff,
      #48b3ff
    );
  }
  &.two {
    background-image: radial-gradient(
      circle,
      #d165bf,
      #cf65c9,
      #cb66d3,
      #c768de,
      #c06ae9
    );
  }
  p {
    padding: 0.5rem 0;
  }
`;

const Blocks = styled.div`
  display: flex;
  & > div {
    flex: 1;
    padding: 2rem;
    font-size: var(--size-l-1);
    border: 6px solid #222;
    border-bottom: none;
    @media screen and (min-width: 992px) {
      &:first-child {
        border-right: none;
      }
    }
  }
  &:first-child {
    & > div {
      border-top: none;
    }
    @media screen and (max-width: 991px) {
      flex-direction: column-reverse;
    }
  }
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const TheTech: React.FC = () => {
  return (
    <>
      <SectionTitle id="tech">
        <h2>The Technology</h2>
        <p>
          You can't talk about Yume Labs without talking about Technology, and
          although this mint isn't overly heavy on the complex tech, we couldn't
          resist pulling out a couple of stops which we think you'll notice in
          the finished collection.
        </p>
      </SectionTitle>
      <div>
        <Blocks>
          <ImgBlock>
            <img className="gf3" src={GF2} alt="" />
          </ImgBlock>
          <TextBlock className="one">
            <h4>Decision Trees</h4>
            <p>
              The way most NFTs are randomized, each attribute is entirely
              independent of each other attribute. This presents specific
              limitations.
            </p>
            <p>
              For example, with Glitterflies, we have Wings, and Wing Patterns.
              Using traditional randomization software, these would have to be
              generated separately, meaning that it'd be impossible to use wings
              of different shapes and sizes without merging them into one
              attribute which is horrible to filter.
            </p>
            <p>
              Using our technology, we can create decisions which are made as
              trees, so we can determine what shape the wings will be, then
              choose from the available patterns for that shape. This technology
              has far more potential than this, but that's a discussion for
              another mint.
            </p>
          </TextBlock>
        </Blocks>
        <Blocks>
          <TextBlock className="two">
            <h4>The Palette Generator</h4>
            <p>
              With most collections, each attribute is created in color, and
              they're placed together randomly in combinations which can appear
              quite unappealing, making clean color combinations desirable. We
              think that every NFT in the collection should look coherent, so we
              do this differently as well.
            </p>
            <p>
              Instead of generating every attribute in color, we color
              everything white and our randomizing software applies color. This
              means that we can take a palette and apply it over an entire NFT,
              ensuring that the entire collection has the color range and
              variance which we want.
            </p>
            <p>
              Similarly, this technology has some incredibly complex potential
              including dynamic shading and highlighting for different scenes,
              but that's another discussion for another mint.
            </p>
          </TextBlock>
          <ImgBlock>
            <img className="gf1" src={GF1} alt="" />
          </ImgBlock>
        </Blocks>
      </div>
    </>
  );
};

export default TheTech;
