import styled from 'styled-components';

import Yume from '../assets/yume.jpg';

const Wrapper = styled.div`
  background-color: #101922;
  padding: 1rem;
  text-align: center;
  color: #fff;
  img {
    display: inline-block;
    width: 100px;
  }
`;

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <img src={Yume} alt="Yume Labs" />
      <p>&copy; All Rights Reserved 2022</p>
    </Wrapper>
  );
};

export default Footer;
