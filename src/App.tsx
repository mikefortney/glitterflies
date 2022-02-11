import Content from 'components/Content';
import Hero from 'components/Hero';
import GlobalStyle from 'globalStyles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Content />
    </>
  );
};

export default App;
