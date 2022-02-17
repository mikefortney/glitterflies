import Content from 'components/Content';
import Hero from 'components/Hero';
import GlobalStyle from 'globalStyles';
import useHeroScroll from 'hooks/useHeroScroll';

const App: React.FC = () => {
  const { contentRef } = useHeroScroll();

  return (
    <>
      <GlobalStyle />
      <Hero />
      <Content ref={contentRef} />
    </>
  );
};

export default App;
