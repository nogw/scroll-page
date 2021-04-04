import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Progress = styled(motion.div)`
  background-color: #029459;
  height: 5px;
  transition: all 50ms ease;
  width: ${props => props.progress}%;
  position: fixed;
  left: 0;
  top: 0;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 95vh;

  h1 {
    color: #dbdbdb;
    font-size: 3rem;

    span {
      color: #029459;
    }
  }
`;
