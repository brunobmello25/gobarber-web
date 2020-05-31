import React from 'react';
import styled from 'styled-components';
import { useTransition } from 'react-spring';
import { ToastMessage } from 'hooks/toast';
import { Toast } from 'components';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastsContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} style={props} data={item} />
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
