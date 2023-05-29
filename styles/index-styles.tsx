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
    transition: transform 0.3s ease;
  
    &:hover {
      transform: scale(1.07);
    }
  }
  
  h3 {
    font-size: 1.2rem;
    font-weight: 300;
    color: #757272;
    font-family: Poppins, sans-serif;
    margin-top: 0.3rem;
    transition: transform 0.3s ease;
  
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
  transition: transform 0.3s ease;

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

  a {
    margin-right: 0.3rem;
    color: #2d2e32;
    font-size: 1.5rem;
    transition: transform 0.3s ease;

    &:hover {
      color: #3232ff;
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
    font-size: 1.3rem;
    font-weight: 750;
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
  }

  h4 {
    color: #2d2e32;
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    margin-left: 10%;
    margin-top: 3%;

    h3 {
      font-size: 1rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

export const FIQ = styled.div`
  margin-left: 16%;
  margin-top: 3%;
  display: flex;
  align-items: center;
  gap: 50px;
  width: 80%;

  h2 {
    margin-left: 17%;
    color: #2d2e32;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  p {
    margin-left: 3%;
    width: 60%;
    font-size: 1.1rem;
    font-weight: 400;
    color: #757272;
    text-transform: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.07);
    }
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

export const GitHubIconFIQ = styled.div`
  width: 6%;
  margin-left: 30%;
  align-items: center;
  transition: transform 0.3s ease;
  color: #2d2e32;

    &:hover {
      transform: scale(1.07);
      color: #3232ff;
    }
`;

export const Image = styled.img`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const TextContainer = styled.div`
  margin-left: 3%;
`;

export const TechnologiesContainer = styled.div`
  display: flex;
  margin-left: 7%;

  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const TechnologyItem = styled.div`
  margin-left: 8%;
  margin-bottom: 5%;
  font-size: 1.2rem;
  font-weight: 700;
  color: #000000;
  text-transform: none;
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.07);
}

  @media (max-width: 768px) {
    margin-left: 3%;
    margin-bottom: 3%;
    font-size: 1rem;
  }
`;

export const BookReviewApp = styled.div`
  margin-left: 12%;
  margin-top: 4%;
  display: flex;
  align-items: center;
  width: 80%;

  h2 {
    color: #2d2e32;
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-right: 3%;
  }

  p {
    width: 55%;
    font-size: 1.1rem;
    font-weight: 400;
    color: #757272;
    text-transform: none;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.07);
    }
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

export const BookTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5%;
  width: 100%;
`;

export const BookTechnologiesContainer = styled.div`
  display: flex;
  margin-left: 7%;
  width: 50%;
  margin-top: 1%;
  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const BookTechnologyItem = styled.div`
  margin-right: 15%;
  margin-bottom: 8%;
  font-size: 1.2rem;
  font-weight: 700;
  color: #000000;
  text-transform: none;
  transition: transform 0.3s ease;

  &:hover {
      transform: scale(1.07);
   }

  @media (max-width: 768px) {
    margin-left: 3%;
    margin-bottom: 3%;
    font-size: 1rem;
  }
`;

export const BookGitHubIconFIQ = styled.div`
  width: 9%;
  transition: transform 0.3s ease;
  color: #2d2e32;

    &:hover {
      transform: scale(1.07);
      color: #3232ff;
    }
`;

export const BookImage = styled.img`
  transition: transform 0.3s ease;
  margin-right: 5%;

  &:hover {
    transform: scale(1.05);
  }
`;