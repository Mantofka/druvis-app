import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const ConfigurationContainer = styled.div`
  height: 100vh;
  background-color: rgb(220, 220, 220);
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
`;

export const ConfigurationView = styled.div`
  padding-top: 60px;
  display: flex;
  flex-direction: row;
`;

export const NavigationSection = styled.section`
  z-index: 1000;
  padding-top: 10px;
  background-color: #0081a7;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  @media (max-width: 840px) {
    width: auto;
  }
`;

export const MainSection = styled.section`
  position: relative;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 6px;
  margin-bottom: 10px;
  width: 100%;
`;

export const Button = styled(motion.button)`
  font-family: 'Montserrat Alternates', sans-serif;
  font-weight: 700;
  color: #d1b3c4;
  border: none;
  height: 35px;
  width: 150px;
  font-size: 14px;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  @media (max-width: 840px) {
    display: none;
  }
`;
