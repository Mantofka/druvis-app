import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  background-color: rgba(0, 97, 167, 0.95);
  margin-top: 600px;
  min-height: 100vh;
  border-top: 3px solid #f0972d;
  border-bottom: 3px solid #f0972d;
`;

export const SectionContainer = styled.section`
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: 900px;
  max-width: 1200px;
  padding: 0% 5%;

  grid-gap: 1rem;
  align-items: center;
  @media (max-width: 840px) {
    grid-template-rows: 700px;
    margin-top: 400px;
    grid-gap: 0;
  }
  @media (max-width: 701px) {
    grid-template-columns: 1fr;
    justify-items: center;
    grid-template-rows: 550px;
  }
  @media (max-width: 480px) {
    padding: 0%;
  }
`;

export const SectionLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

export const SectionRight = styled.div`
  align-self: center;
  @media (max-width: 840px) {
    padding-bottom: 100px;
  }
`;

export const Button = styled(motion.button)`
  font-family: 'Cairo', sans-serif;
  padding: 8px 30px;
  color: #ffffff;
  background-color: #202030;
  border: 1px solid #fdfcdc;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 15px;
  outline: none;
  border-radius: 4px;
  transition: all 150ms ease-in-out;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  & > a {
    color: white;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  aspect-ratio: 16/9;
  padding: 0;
  object-fit: cover;
  filter: brightness(80%);
  border: 1px solid #ffffff;
  -webkit-box-shadow: -3px 3px 23px 8px rgba(0, 128, 167, 0.57);
  -moz-box-shadow: -3px 3px 23px 8px rgba(0, 128, 167, 0.57);
  box-shadow: -3px 3px 23px 8px rgba(0, 128, 167, 0.57);
  @media (max-width: 480px) {
    border: none;
  }
`;

export const PrimaryText = styled(motion.h1)`
  font-family: 'Cairo', sans-serif;
  font-weight: 900;
  font-size: 62px;
  color: #ffffff;
  line-height: 1.2;
  @media (max-width: 840px) {
    font-size: 45px;
  }
  @media (max-width: 767px) {
    font-size: 40px;
  }
  @media (max-width: 701px) {
    font-size: 56px;
  }
  @media (max-width: 480px) {
    font-size: 40px;
    width: 10ch;
  }
  @media (max-width: 360px) {
    font-size: 35px;
  }
`;

export const SecondaryText = styled.p`
  font-family: 'Cairo', sans-serif;
  font-size: 22px;
  color: #202030;
  margin-top: 10px;
  max-width: 35ch;
  line-height: 1.45;
  @media (max-width: 840px) {
    font-size: 18px;
    max-width: 30ch;
  }
  @media (max-width: 701px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
  @media (max-width: 360px) {
    font-size: 16px;
  }
`;
