import { forwardRef } from 'react';
import styled from 'styled-components';
import TopSection from './TopSection';
import Nav from './Nav';
import Roadmap from './Roadmap';
import Team from './Team';
import TheTech from './TheTech';
import Footer from './Footer';

const ContentWrapper = styled.div`
  font-family: 'augieregular';
  position: relative;
`;

const Content = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <>
      <ContentWrapper ref={ref}>
        <Nav />
        <TopSection />
        <TheTech />
        <Roadmap />
        <Team />
      </ContentWrapper>
      <Footer />
    </>
  );
});

export default Content;
