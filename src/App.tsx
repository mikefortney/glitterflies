import { MutableRefObject, useEffect, useRef } from 'react';
import Content from 'components/Content';
import Hero from 'components/Hero';
// import useHeroScroll from 'hooks/useHeroScroll';
import GlobalStyle from 'globalStyles';
import smoothscroll from 'smoothscroll-polyfill';

const App: React.FC = () => {
  // const { contentRef } = useHeroScroll();
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Hero />
      <Content ref={contentRef as MutableRefObject<HTMLDivElement>} />
    </>
  );
};

export default App;
