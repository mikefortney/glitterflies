import styled from 'styled-components';

interface ButtonProps {
  size?: 'large';
}

const Btn = styled.button`
  font-size: ${(props) => ((props as any).size === 'large' ? '2rem' : '1rem')};
  height: ${(props) => ((props as any).size === 'large' ? '60px' : '40px')};
  padding: ${(props) =>
    (props as any).size === 'large' ? '0 3rem' : '0 2rem'};
  border: 2px solid #555;
  color: #333;
  border-radius: 4px;
  background-image: linear-gradient(
    to right,
    #ffab55,
    #ffbe4e,
    #ffd347,
    #ffe943,
    #ffff45
  );
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = (props) => {
  return <Btn {...props}>{props.children}</Btn>;
};

export default Button;
