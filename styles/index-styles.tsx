import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

export const MenuBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #f2f2f2;
  padding: 10px;
  z-index: 9999;

  @media (max-width: 375px) {
    padding: 3px;
  }

  @media (max-width: 544px) {
    padding: 3px;
  }
  
`;

export const Nav = styled.nav`
  ul {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    text-align: right;
  }

  ul li {
    display: inline-block;
  }

  ul li:first-child {
    float: left;
  }

  ul li a {
    display: block;
    padding: 15px;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    color: #2d2e32;
    font-family: Poppins, sans-serif;
    transition: transform 0.3s ease;

    &:hover {
      color: #147efb;
      transform: scale(1.07);
    }
  }

  @media (max-width: 375px) {
    ul li a {
      font-size: 0.8rem;
      padding: 5px;
    }
  }

  @media (max-width: 544px) {
    ul li a {
      font-size: 0.8rem;
      padding: 5px;
    }  }
`;

export const Bio = styled.div`
  margin-top: 5%;
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
      color: #147efb;
      transform: scale(1.07);
    }
  }
`;

export const TechStackContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 25px;

  h3 {
    border-right: 2px solid rgba(45, 46, 50, 0.5);
    padding-right: 1.5rem;
  }

  @media (max-width: 768px) {
    flex-direction: row;

    h3 {
      border-right: none;
      padding-right: 0;
      margin-right: .5rem;
    }
  }
`;

export const TechIcon = styled.div`
  font-size: 50px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (min-width: 375px) {
    font-size: 20px;
    padding: 1px;
  }
`;

export const AboutMe = styled.div`
  margin-top: 6%;
  margin-bottom: 2%;
  margin-left: 20%;
  display: flex;
  align-items: center;
  gap: 100px;

  h3 {
    margin-left: 21%;
    color: #147efb;
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  h4 {
    color: #2d2e32;
    font-size: 1.2rem;
  }


  p {
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

  @media (max-width: 1373px) {
    margin-left: 12%;

    p {
      width: 85%;
      font-size: 1rem;
    }
  }
`;

export const AboutMeTextContainer = styled.div`
  width: 75%;
  margin-bottom: 3%;
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

  @media (max-width: 1373px) {
    width: 90%;
    margin-left: 12%;
    /* background-color: red; */
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
      color: #147efb;
    }
`;

export const Image = styled.img`
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1373px) {
    width: 45%;
  }

  @media (max-width: 375px) {
    width: 300px;
  }
`;

export const TextContainer = styled.div`
  margin-left: 3%;

  @media (max-width: 1373px) {
    width: 55%;

    h2 {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }
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

@media (max-width: 1373px) {
    font-size: 0.8rem;
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
      color: #147efb;
    }
`;

export const BookImage = styled.img`
  transition: transform 0.3s ease;
  margin-right: 5%;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SecurityScreen = styled.div`
  margin-left: 20%;
  margin-top: 6%;
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
    margin-left: 5%;
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

export const SecurityScreenTextContainer = styled.div`
  margin-left: 6%;
`;

export const SecurityScreenTechnologiesContainer = styled.div`
  display: flex;
  margin-left: 2%;

  @media (max-width: 768px) {
    margin-left: 5%;
  }
`;

export const SecurityScreenTechnologyItem = styled.div`
  margin-top: 1%;
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

export const SecurityScreenGitHubIconFIQ = styled.div`
  width: 6%;
  margin-left: 30.5%;
  align-items: center;
  transition: transform 0.3s ease;
  color: #2d2e32;

    &:hover {
      transform: scale(1.07);
      color: #147efb;
    }
`;

export const SecurityScreenImage = styled.img`
  transition: transform 0.3s ease;

&:hover {
  transform: scale(1.05);
}
`;

export const ContactMe = styled.div`
  margin-left: 20%;
  margin-top: 8%;

  p {
    color: #147efb;
    font-size: 1.3rem;
    font-weight: 750;
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
  }

  h3 {
    color: #2d2e32;
    font-size: 1.5rem;
    font-weight: 800;
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
  }

  @media (max-width: 768px) {
    margin-left: 5%;
    margin-top: 4%;

    h3 {
      font-size: 1.2rem;
    }

    p {
      font-size: 1.1rem;
    }
  }
`;

export const Title = styled.h3`
`;

export const ContactInformation = styled.div`
  display: flex;
  gap: 15%;
  margin-top: 4%;
  margin-right: 10%;

  @media (max-width: 1250px) {
    flex-wrap: wrap;
    gap: 10px;
    margin-right: 0;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1600px) {
    flex-basis: 50%;
  }

  @media (max-width: 1024px) {
    flex-basis: 50%;
  }
`;

export const Icon = styled.h1`
  font-size: 46px;
  margin-right: 15px;

  @media (max-width: 1600px) {
    font-size: 36px;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  height: 25%;

  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.1rem;
  }

  h4 {
    margin-top: 0;
    margin-bottom: 3%;
    font-size: 1.2rem;
  }

  a {
    &:hover {
      color: #147efb;
    }
  }

  @media (max-width: 1600px) {
    p {
      font-size: 1rem;
    }

    h4 {
      font-size: 1rem;
    }
  }
`;

export const InformationTitle = styled.h4`
`;

export const Footer = styled.footer`
  margin-top: 4%;
  background-color: #2f2f2f;
  width: 100%;
  height: 120px;

  p {
    color: #ffffff;
    font-size: 1.2rem;
    font-weight: 800;
    text-transform: uppercase;
    font-family: Poppins, sans-serif;
    text-align: center; 
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  color: #ffffff;
  justify-content: center;
  gap: 10px;
  transition: transform 0.3s ease;

  a {
      &:hover {
        color: #147efb;
        transform: scale(1.07);
      }
    }
`;