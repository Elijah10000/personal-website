import styled, { keyframes } from 'styled-components';

export const warpAnimation = keyframes`
  0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Bio = styled.div`
  width: 65%;
  margin-top: 12%;
  margin-left: 18%;
  display: flex;
`;

export const IntroContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-top: 2%;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #2d2e32;
    line-height: 1.2;
    margin-bottom: 1rem;
    margin-top: 2rem;
    transition: color 0.5s ease, transform 0.5s ease;
    font-family: Poppins, sans-serif;

    &:hover {
      transform: scale(1.07);
    }
  }

  h3 {
    font-size: 1.2rem;
    font-weight: 300;
    color: #757272;
    font-family: Poppins, sans-serif;
    margin-top: 0.5rem;
    transition: color 0.5s ease, transform 0.5s ease;

    &:hover {
      transform: scale(1.07);
    }
  }
`;

export const ImageContainer = styled.div`
  margin-left: 5%;
  margin-top: 4%;
`;

export const WarpedImage = styled.img`
  border: 3px solid black;  
  animation: ${warpAnimation} 3s infinite;
  transition: color 0.5s ease, transform 0.5s ease;

  &:hover {
      transform: scale(1.07);
    }
`;