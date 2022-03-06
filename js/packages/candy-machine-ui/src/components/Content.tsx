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
  candyMachineId: any;
	connection: any;
	txTimeout: any;
	rpcHost: any;
}

const Content = forwardRef<HTMLDivElement, ContentProps>(({ navRef, candyMachineId, connection, txTimeout, rpcHost }, ref) => {
  return (
    <>
      <ContentWrapper ref={ref}>
        <Nav ref={navRef} />
        <Intro
          candyMachineId={candyMachineId}
          connection={connection}
          txTimeout={txTimeout}
          rpcHost={rpcHost}
        />
        <TheTech />
        <Roadmap />
        <Team />
      </ContentWrapper>
      <Footer />
    </>
  );
});

export default Content;
