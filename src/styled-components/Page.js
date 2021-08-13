import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  z-index: 0;
  position: relative;
`;

export const HeroImage = styled(motion.img)`
  object-fit: cover;
  width: 100%;
  height: 100vh;
`;

export const LoadingImageContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const LoadingImage = styled(motion.img)`
  @media (max-width: 540px) {
    height: ${(props) => props.size1 || '400px'};
  }
  @media (max-width: 360px) {
    height: ${(props) => props.size2 || '250px'};
  }
`;

export const MainTextContainer = styled.div`
  position: absolute;
  top: 0;
  right: 2%;
  width: 100%;
`;

export const TextBox = styled.div`
  position: relative;
  margin-top: 8%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  & > h1 {
    width: 13ch;
    line-height: 1.1;
    margin-bottom: 10px;
    text-align: right;
    font-family: 'Cairo', sans-serif;
    font-size: 78px;
    font-weight: 900;
    color: ${(props) => props.colorPrimary || 'rgb(198,203,203)'};
  }
  & > p {
    font-family: 'Cairo', sans-serif;
    font-size: 26px;
    width: 30ch;
    text-align: right;
    line-height: 1.45;
    color: ${(props) => props.colorSecondary || 'rgb(198,203,203)'};
    font-weight: 400;
  }
  @media (max-width: 840px) {
    margin-top: 10%;
    & > h1 {
      font-size: 66px;
    }
    & > p {
      font-size: 24px;
    }
  }
  @media (max-width: 540px) {
    margin-top: 15%;
    & > h1 {
      font-size: 56px;
    }
    & > p {
      font-size: 22px;
    }
  }
  @media (max-width: 440px) {
    margin-top: 25%;
    & > h1 {
      font-size: 46px;
    }
    & > p {
      font-size: 20px;
    }
  }
  @media (max-width: 360px) {
    margin-top: 50%;
    & > h1 {
      font-size: 40px;
    }
    & > p {
      font-size: 15px;
    }
  }
`;

// Styles for picking sections.

export const SubSection = styled.div`
  z-index: 10000;
  width: 100%;
  background-color: #202030;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid #f07167;
  border-bottom: 1px solid #f07167;
  -webkit-box-shadow: 0px 6px 16px 5px #000000;
  box-shadow: 0px 6px 16px 5px #000000;
  & > h3 {
    font-size: 10px;
    margin-left: 30px;
    margin-top: 10px;
    color: rgb(200, 200, 200);
  }
`;

export const Selection = styled.select`,
  font-family: 'Cairo', sans-serif;
  outline: none;
  background: transparent;
  border: 1px solid #fdfcdc;
  border-radius: 10px;
  color: white;
  margin: 5px 10px 15px 30px;
  width: 180px;
  height: 35px;
`;

export const Option = styled.option`
  font-family: 'Cairo', sans-serif;
  background: #002848;
  border: none;
`;

export const Button = styled.button`
  font-family: 'Cairo', sans-serif;
  background-color: transparent;
  outline: none;
  border: 1px solid #fdfcdc;
  border-radius: 10px;
  height: 35px;
  width: 100px;
  margin: 5px 0px 15px 10px;
  color: white;
  font-weight: bold;
  transition: all 250ms ease-in;
  &:hover {
    color: #f0972d;
    border: 1px solid white;
  }
`;

export const GalleryContainer = styled.section`
  position: relative;
  padding: 30px 20px;
  background-color: #0081a7;
  display: grid;
  gap: 4px 4px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: 250px;
  justify-content: start;
  @media (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 8px 4px;
  }
  @media (max-width: 360px) {
    grid-template-columns: 1fr;
  }
`;

export const GalleryImage = styled.img`
  object-fit: cover;
  height: 200px;
  width: 300px;
  transition: all 200ms ease-in-out;
  filter: grayscale(80%);
  &:hover {
    filter: grayscale(0%);
  }
  @media (max-width: 720px) {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const LoadingContainer = styled.div`
  background-color: #0081a7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const Container = styled.div`
  overflow: hidden;
`;

export const LoadingText = styled.h2`
  font-size: 26px;
  color: rgb(200, 200, 200);
  margin-top: -25px;
  @media (max-width: 360px) {
    font-size: 22px;
  }
`;
