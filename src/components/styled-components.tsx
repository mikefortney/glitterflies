import styled from 'styled-components';

export const Gradient = styled.div`
  background-image: linear-gradient(
    to right top,
    #c06ae9,
    #a56de2,
    #8b6fd8,
    #736ecc,
    #5f6cbe,
    #4878c6,
    #2c84ca,
    #008ecb,
    #00aad6,
    #00c4cd,
    #00dab4,
    #77ec91
  );
  color: #fff;
`;

export const SectionTitle = styled.div`
  background-color: #f2f2f2;
  padding: 3rem 2rem;
  border: 6px solid #222;
  h2 {
    font-size: var(--size-l-3);
  }
  p {
    font-size: var(--size-l-1);
  }
`;

export const Panels = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  @media screen and (max-width: 1199px) {
    padding: 0 2rem;
    gap: 0;
    justify-content: space-between;
  }
`;

export const Panel = styled.div`
  flex: 1;
  border: 6px solid #222;
  background-color: #fff;
  box-shadow: 0 6px 6px -6px #000;
  color: #444;
  position: relative;
`;

export const PanelInner = styled.div`
  padding: 1rem;
`;
