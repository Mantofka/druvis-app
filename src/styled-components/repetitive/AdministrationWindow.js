import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Modal = styled(motion.div)`
  position: absolute;
  background-color: #f0e5e5;
  color: black;
  width: 500px;
  border: 1px solid #d6d0d0;
  border-radius: 10px;
  transform: translate(0%, -5%);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  @media (max-width: 580px) {
    width: 350px;
  }
  @media (max-width: 440px) {
    width: 250px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 20px;
  margin-bottom: 30px;
`;

export const Selection = styled.select`
  outline: none;
  border: 1px solid #d9cbcb;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  font-family: 'Montserrat Alternates', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #202030;
  margin-bottom: 5px;
`;

export const FileButton = styled.button`
  width: 30%;
  background: transparent;
  border-radius: 10px;
  cursor: pointer;
  outline: none;
  @media (max-width: 440px) {
    width: 50%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
  @media (max-width: 480px) {
    margin-right: 10px;
  }
`;

export const Button = styled(motion.div)`
  height: 30px;
  width: 80px;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  outline: none;
  border: none;
  margin-right: 15px;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(props) => props.bgColor || '#ffffff'};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${(props) => props.inputColor || '#000000'};
  font-family: 'Montserrat Alternates', sans-serif;
`;

export const SourceContainer = styled(motion.div)`
  display: flex;
  overflow-x: scroll;
  margin: 0px 20px;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  position: relative;
`;

export const Image = styled.img`
  position: relative;
  margin: 0px 10px;
  width: 170px;
  height: 120px;
  object-fit: cover;
  @media (max-width: 580px) {
    width: 140px;
    height: 90px;
  }
`;

export const Video = styled.video`
  position: relative;
  margin-right: 10px;
  width: 200px;
  height: 150px;
  object-fit: fill;
  @media (max-width: 580px) {
    width: 140px;
    height: 100px;
  }
`;

export const DeleteIcon = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
  color: red;
  cursor: pointer;
`;
