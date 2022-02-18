import styled from 'styled-components';
import { Gradient, SectionTitle } from './styled-components';

import GFBF from 'assets/GFBG.png';
import GF1 from 'assets/gf1.png';
import GF3 from 'assets/gf3.png';

const Blocks = styled.div`
  display: flex;
  & > div {
    flex: 1;
    padding: 2rem;
    font-size: var(--size-l-1);
    border: 6px solid #222;
    &:first-child {
      border-right: none;
    }
  }
  &:first-child {
    & > div {
      border-bottom: none;
    }
  }
`;

const ImgBlock = styled.div`
  background-image: url(${GFBF});
  background-position: top left;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 600px;
    &.gf3 {
      transform: translate(-50%, -30%);
    }
    &.gf1 {
      transform: translate(-50%, -70%);
    }
  }
`;

const TextBlock = styled(Gradient)`
  p {
    padding: 0.5rem 0;
  }
`;

const TheTech: React.FC = () => {
  return (
    <>
      <SectionTitle>
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
            <img className="gf3" src={GF3} alt="" />
          </ImgBlock>
          <TextBlock>
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
          <TextBlock>
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
