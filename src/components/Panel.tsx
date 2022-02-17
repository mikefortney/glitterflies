import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Comic Sans', cursive;
  padding: 1vmin;
`;

const Single = styled.div`
  background-color: #fff;
  border: solid 2px #000;
  box-shadow: 0 6px 6px -6px #000;
  display: inline-block;
  flex: 1 1;
  height: 200px;
  margin: 1vmin;
  overflow: hidden;
  position: relative;
  background-image: radial-gradient(circle, #ffff45, #ffab55);
`;

export const NewPanels: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export const NewPanel: React.FC = ({ children }) => {
  return <Single>{children}</Single>;
};

export const Panels2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Panel2 = styled.div`
  border: 6px solid #222;
  background-color: #fff;
  box-shadow: 0 6px 6px -6px #000;
  color: #222;
  padding: 1rem;
  flex: 1;
`;
