import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export const Bio = styled.div`
  width: 65%;
  height: 60%;
  margin-top: 12%;
  margin-left: 18%;
  display: flex;
`;

export const IntroContainer = styled.div`
  width: 40%;
  height: 47%;
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
  }
`;

export const ImageContainer = styled.div`
  margin-left: 5%;
  margin-top: 4%;
  height: 52%;
`;

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

export const WarpedImage = styled.img`
  border: 3px solid black;  
  animation: ${warpAnimation} 3s infinite;
  transition: color 0.5s ease, transform 0.5s ease;
  &:hover {
      transform: scale(1.07);
    }
`;

export const Socials = styled.div`
  margin-top: 4%;
  display: flex;
  height: 15%;
  width: 33%;

  a {
    margin-right: 0.5rem;
    color: #2d2e32;
    transition: color 0.5s ease, transform 0.5s ease;
    margin-bottom: 1rem;
    font-size: 1.5rem;

    &:hover {
      transform: scale(1.07);
    }
  }
`;

export const TechStack = styled.div`
  justify-content: flex-end;
  height: 10%;
  background-color: red;
  
  h3 {
    border-right: 2px solid rgba(45, 46, 50, 0.5);
    width: 30%;
    color: #2d2e32;
    font-family: Mulish, sans-serif;
    font-weight: 600;
  }
`;