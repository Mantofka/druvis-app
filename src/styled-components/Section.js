import styled from "styled-components/macro";
import { motion } from "framer-motion";

export const Container = styled.div`
  background-color: rgba(0, 97, 167, 0.95);
  margin-top: 600px;
  min-height: 100vh;
  height: 550px;
  border-top: 3px solid #f0972d;
  border-bottom: 3px solid #f0972d;
`;

export const SectionContainer = styled.section`
  height: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  max-width: 1200px;
  padding: 0% 5%;
  justify-items: center;

  grid-gap: 1rem;
  align-items: center;
  @media (max-width: 701px) {
    grid-template-columns: 1fr;
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
  @media (max-width: 701px) {
    align-self: end;
  }
`;

export const SectionRight = styled.div`
  align-self: center;
  @media (max-width: 701px) {
    align-self: start;
  }
`;

export const Button = styled(motion.button)`
  font-family: "Cairo", sans-serif;
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
  font-family: "Cairo", sans-serif;
  font-weight: 900;
  color: #ffffff;
  line-height: 1.2;
  font-size : clamp(2.5rem, 5vw, 5rem);
`;

export const SecondaryText = styled.p`
  font-family: "Cairo", sans-serif;
  font-size : clamp(1rem, 2vw, 1.5rem);
  color: #202030;
  margin-top: 10px;
  max-width: 35ch;
  line-height: 1.45;
  
`;
