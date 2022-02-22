import { MutableRefObject, useEffect } from 'react';
import Content from 'components/Content';
import Hero from 'components/Hero';
import useHeroScroll from 'hooks/useHeroScroll';
import GlobalStyle from 'globalStyles';
import smoothscroll from 'smoothscroll-polyfill';

const App: React.FC = () => {
  const { contentRef } = useHeroScroll();
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
