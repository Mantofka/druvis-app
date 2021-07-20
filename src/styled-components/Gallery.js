import styled from 'styled-components';

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
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 5px;
  justify-content: start;
  min-height: 300px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  @media (max-width: 662px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;

export const Image = styled.img`
  object-fit: fill;
  width: 100%;
  max-width: 400px;
  height: auto;
  transition: all 200ms ease-in-out;
  filter: grayscale(80%);
  &:hover {
    filter: grayscale(0%);
  }
  align-self: center;
  justify-self: center;
`;

export const LoadingContainer = styled.div`
  background-color: #0081a7;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
`;

export const LoadingText = styled.h2`
  font-size: 26px;
  color: rgb(200, 200, 200);
  margin-top: -25px;
  @media (max-width: 360px) {
    font-size: 22px;
  }
`;
