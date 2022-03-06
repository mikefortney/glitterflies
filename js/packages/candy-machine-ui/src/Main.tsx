import { MutableRefObject, useEffect, useRef } from 'react';
import Content from './components/Content';
import Hero from './components/Hero';
import GlobalStyle from './globalStyles';
import smoothscroll from 'smoothscroll-polyfill';

interface MainProps {
	candyMachineId: any;
	connection: any;
	txTimeout: any;
	rpcHost: any;
}

const Main: React.FC<MainProps> = ({candyMachineId, connection, txTimeout, rpcHost}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Hero navRef={navRef as MutableRefObject<HTMLDivElement>} />
      <Content
				candyMachineId={candyMachineId}
				connection={connection}
				txTimeout={txTimeout}
				rpcHost={rpcHost}
        ref={contentRef as MutableRefObject<HTMLDivElement>}
        navRef={navRef as MutableRefObject<HTMLDivElement>}
      />
    </>
  );
};

export default Main;
