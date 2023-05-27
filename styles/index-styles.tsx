import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Bio = styled.div`
  margin-top: 7%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 2rem;
`;

export const IntroContainer = styled.div`
  text-align: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    color: #2d2e32;
    line-height: 1.2;
    margin-bottom: 1rem;
    font-family: Poppins, sans-serif;
    transition: transform 0.5s ease;
  
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
    transition: transform 0.5s ease;
  
  &:hover {
    transform: scale(1.07);
    }
  }
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
`;

export const WarpedImage = styled.img`
  border: 3px solid black;
  animation: warpAnimation 3s infinite;
  transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.07);
    }

  @keyframes warpAnimation {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    
  }
`;

export const Socials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  transition: transform 0.5s ease;

  a {
    margin-right: 0.5rem;
    color: #2d2e32;
    font-size: 1.5rem;

    &:hover {
      transform: scale(1.07);
    }
  }
`;

export const TechStackContainer = styled.div`
  h3 {
    border-right: 2px solid rgba(45,46,50,.5);
    padding-right: 1.5rem;  
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;
`;

export const TechIcon = styled.div`
  font-size: 50px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.20);
  }
`;

export const ProjectListIntro = styled.div`
  margin-left: 20%;
  margin-top: 5%;

  h3 {
    color: #147efb;
    font-size: 1.7rem;
    font-weight: 700;
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
  }

  h4 {
    color: #2d2e32;
    font-size: 1.7rem;
  }

  @media (max-width: 768px) {
    margin-left: 10%;
    margin-top: 3%;

    h3 {
      font-size: 1.5rem;
    }

    h4 {
      font-size: 1.5rem;
    }
  }
`;

export const FIQ = styled.div`
  margin-left: 12%;
  margin-top: 3%;
  display: flex;
  align-items: center;
  gap: 50px;
  width: 80%;

  a {
    margin-left: 27%;
    color: #2d2e32;
    font-size: 1.5rem;
  }

  h2 {
    margin-left: 17%;
    color: #2d2e32;
    font-size: 1.5rem;
    font-family: Poppins, sans-serif;
    text-transform: uppercase;
  }

  p {
    width: 60%;
    font-size: 1.2rem;
    font-weight: 400;
    text-align: center;
    color: #757272;
    font-family: Poppins, sans-serif;
  }

  @media (max-width: 768px) {
    margin-left: 5%;
    margin-top: 2%;

    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: 90%;

    a {
      margin-left: 0;
      font-size: 1.2rem;
    }

    h2 {
      margin-left: 0;
      font-size: 1.2rem;
    }

    p {
      width: 100%;
      font-size: 1rem;
    }
  }
`;

export const TextContainer = styled.div`
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  margin-left: 7%;

  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const TechnologyItem = styled.div`
  margin-left: 6%;
  margin-bottom: 5%;
  font-family: Poppins, sans-serif;
  font-size: 1.2rem;
  font-weight: 600;

  @media (max-width: 768px) {
    margin-left: 3%;
    margin-bottom: 3%;
    font-size: 1rem;
  }
`;
