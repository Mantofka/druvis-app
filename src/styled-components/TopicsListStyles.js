import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionContainer = styled(motion.section)`
  font-family: 'Cairo', sans-serif;
  padding: 0% 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: minmax(300px, 430px);
  grid-gap: 1%;
  justify-items: center;
  box-sizing: border-box;
  @media (max-width: 1368px) {
    grid-template-rows: minmax(230px, 280px);
  }
  @media (max-width: 840px) {
    grid-template-rows: minmax(200px, 250px);
  }
  @media (max-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 140px;
    grid-gap: 3%;
  }
  @media (max-width: 440px) {
    grid-template-columns: 1fr;
    grid-template-rows: 70px;
  }
`;

export const TopicContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 220px;
  max-height: 300px;
  border: 1px solid #f07167;
  transition: all 150ms ease-in-out;
  &::before {
    content: '';
    position: absolute;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    background-image: linear-gradient(to right bottom, #002f4b, #dc4225);
    opacity: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    filter: grayscale(0%);
    transition: all 350ms ease-in-out;
  }
  &:hover::before {
    content: '';
    position: absolute;
    clip-path: polygon(0 0, 0 100%, 100% 100%);
    opacity: 0.2;
    height: 100%;
    width: 100%;
    z-index: 10;
    filter: grayscale(100%);
    transition: all 350ms ease-in-out;
  }
  &::after {
    content: '';
    color: white;
    opacity: 1;
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: calc(16px + 5 * ((100vw - 320px) / 1024));
    text-align: center;
    width: 100%;
    transition: all 350ms ease-in-out;
    @media (max-width: 540px) {
      top: 80%;
    }
  }
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
    url(${(p) => p.bigURL});
  background-size: cover;
  background-position: center;

  @media (max-width: 840px) {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)),
      url(${(p) => p.minURL});
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 640px) {
    height: 140px;
  }
  @media (max-width: 440px) {
    height: 70px;
  }
`;
