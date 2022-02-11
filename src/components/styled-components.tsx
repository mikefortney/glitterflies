import styled from 'styled-components';

export const Panels = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #222;
  padding: 0.5rem;
  gap: 0.5rem;
  max-width: 1000px;
  margin: 6rem auto 0;
  transform: skew(2deg);
`;

export const SinglePanel = styled.div`
  background-color: #222;
  padding: 0.5rem;
`;

export const Panel = styled.div`
  min-height: 250px;
  background-color: #fff;
  position: relative;
  &.text {
    padding: 1rem;
    font-size: var(--size-l-3);
    color: #444;
    small {
      display: block;
      font-size: 1rem;
      &:before {
        height: 10px;
        width: 10px;
        background: currentColor;
        margin-right: 8px;
        position: relative;
        content: '';
        display: inline-block;
        bottom: 1px;
      }
    }
    &.default {
      font-size: 1rem;
    }
  }
`;
