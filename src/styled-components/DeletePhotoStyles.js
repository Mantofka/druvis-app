import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  width: 480px;
  margin: 0 30px;
  margin-top: 50px;
  background-color: #f0e5e5;
  border: 1px solid #d6d0d0;
  box-sizing: border-box;
  border-radius: 10px;
  @media (max-width: 580px) {
    width: 250px;
    margin: 0;
  }
`;

export const SelectBar = styled(motion.div)`
  height: 50px;
  background-color: #f0e5e5;
  border: 1px solid #d6d0d0;
  display: flex;
  flex-direction: row;
  align-items: center;
  -webkit-box-shadow: 0px 1px 15px 1px rgba(43, 43, 43, 1);
  -moz-box-shadow: 0px 1px 15px 1px rgba(43, 43, 43, 1);
  box-shadow: 0px 1px 15px 1px rgba(43, 43, 43, 1);
  @media (max-width: 580px) {
    height: 130px;
    flex-direction: column;
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  margin-right: 15px;
  @media (max-width: 580px) {
    margin: 0;
    padding: 5px;
  }
`;

export const SubSectionContainer = styled(motion.div)`
  @media (max-width: 580px) {
    margin-top: 10px;
  }
`;

export const Selection = styled.select`
  box-sizing: border-box;
  outline: none;
  width: 180px;
  height: 35px;
  border: 1px solid #d9cbcb;
  border-radius: 5px;
  margin: 0 20px;
  background-color: #f0e5e5;
`;

export const PhotosContainer = styled(motion.div)`
  margin: 15px;
  display: flex;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

export const Image = styled.img`
  width: 250px;
  height: 200px;
  margin: 0 5px;
  object-fit: cover;
  @media (max-width: 580px) {
    margin-top: 6px;
    margin-right: 6px;
    width: 180px;
    height: 130px;
  }
`;

export const Video = styled.video`
  position: relative;
  margin-right: 10px;
  margin-top: 10px;
  width: 200px;
  height: 150px;
  object-fit: cover;
  @media (max-width: 580px) {
    width: 180px;
    height: 130px;
    margin-top: 6px;
    margin-right: 6px;
  }
`;
