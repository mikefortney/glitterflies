import Content from 'components/Content';
import Hero from 'components/Hero';
import useHeroScroll from 'hooks/useHeroScroll';
import GlobalStyle from 'globalStyles';
import smoothscroll from 'smoothscroll-polyfill';

const App: React.FC = () => {
  const { contentRef } = useHeroScroll();
  smoothscroll.polyfill();

  return (
    <>
      <GlobalStyle />
      <Hero />
      <Content ref={contentRef} />
    </>
  );
};

export default App;
