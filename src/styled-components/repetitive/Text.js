import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const PrimaryText = styled(motion.h1)`
  font-family: 'Montserrat Alternates', sans-serif;
  color: ${(props) => props.inputColor || '#fdfcdc'};
  font-size: ${(props) => props.size};
  ${(props) =>
    props.responsive &&
    css`
      @media (max-width: 840px) {
        font-size: 44px;
      }
      @media (max-width: 720px) {
        font-size: 32px;
      }
      @media (max-width: 590px) {
        font-size: 36px;
      }
      @media (max-width: 360px) {
        font-size: 30px;
      }
    `}
`;

export const SecondaryText = styled.p`
  font-family: 'Montserrat Alternates', sans-serif;
  color: ${(props) => props.inputColor || '#202030'};
  margin-top: 10px;
  font-size: ${(props) => props.size};
  max-width: 35ch;
  line-height: 1.4;
  ${(props) =>
    props.responsive &&
    css`
      @media (max-width: 840px) {
        font-size: 22px;
      }
      @media (max-width: 720px) {
        font-size: 16px;
        max-width: 25ch;
      }
      @media (max-width: 360px) {
        font-size: 14px;
        max-width: 30ch;
      }
    `}
`;
