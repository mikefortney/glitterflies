import styled from 'styled-components';

export const Panels = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  &.text,
  .text {
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

export const SpeechBubble = styled.div`
  background-color: #fff;
  border: solid 3px #222;
  border-radius: 12px;
  /* display: inline-block; */
  margin: 0.5em;
  padding: 0.5em 1em;
  position: relative;
  color: #222;

  &:before {
    border: solid 12px transparent;
    border-left: solid 12px #000;
    border-top: solid 12px #000;
    bottom: -24px;
    content: '';
    height: 0;
    left: 24px;
    position: absolute;
    transform: skew(45deg);
    width: 0;
  }

  &:after {
    border: solid 10px transparent;
    border-left: solid 10px #fff;
    border-top: solid 10px #fff;
    bottom: -19px;
    content: '';
    height: 0;
    left: 24px;
    position: absolute;
    transform: skew(45deg);
    width: 0;
  }
`;
