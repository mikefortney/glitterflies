import styled from 'styled-components';

interface ButtonProps {
  size?: 'large' | 'medium';
}

const Btn = styled.button`
  font-size: ${(props) => {
    if ((props as any).size === 'large') return '2rem';
    if ((props as any).size === 'medium') return '1.5rem';
    return '1rem';
  }};
  height: ${(props) => {
    if ((props as any).size === 'large') return '60px';
    if ((props as any).size === 'medium') return '50px';
    return '40px';
  }};
  padding: ${(props) => {
    if ((props as any).size === 'large') return '0 3rem';
    if ((props as any).size === 'medium') return '0 3rem';
    return '0 2rem';
  }};
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
