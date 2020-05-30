import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { IconBaseProps } from 'react-icons';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<Props> = ({ icon: Icon, ...props }) => {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input {...props} />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;
