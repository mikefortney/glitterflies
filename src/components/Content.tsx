import { forwardRef, MutableRefObject } from 'react';
import styled from 'styled-components';
import Intro from './Intro';
import Nav from './Nav';
import Roadmap from './Roadmap';
import Team from './Team';
import TheTech from './TheTech';
import Footer from './Footer';

const ContentWrapper = styled.div`
  font-family: 'augieregular';
  position: relative;
`;

interface ContentProps {
  navRef: MutableRefObject<HTMLDivElement>;
}

const Content = forwardRef<HTMLDivElement, ContentProps>(({ navRef }, ref) => {
  return (
    <>
      <ContentWrapper ref={ref}>
        <Nav ref={navRef} />
        <Intro />
        <TheTech />
        <Roadmap />
        <Team />
      </ContentWrapper>
      <Footer />
    </>
  );
});

export default Content;
