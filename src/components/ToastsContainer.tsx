import React from 'react';
import styled from 'styled-components';
import { ToastMessage } from 'hooks/toast';
import { Toast } from 'components';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastsContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} data={message} />
      ))}
    </Container>
  );
};

export default ToastsContainer;

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: 30px;
  overflow: hidden;
`;
