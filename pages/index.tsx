import React from 'react';
import { Container, IntroContainer, Bio, ImageContainer, WarpedImage} from '../styles/index-styles';

const Home = () => {
  return (
    <Container>
      <Bio>
        <IntroContainer>
          <h1>React and Typescript Front-End Developer!</h1>
          <h3>
            Hi, I'm Elijah McNamara, welcome to my website! I'm a passionate front-end engineer with a love for code. Take a look at some of my projects 👇
          </h3>
        </IntroContainer>
        <ImageContainer>
        <WarpedImage src="/assets/Picture.jpg" alt="Picture" style={{ height: "200px", width: "200px", borderRadius: "90px" }} />
        </ImageContainer>
      </Bio>
    </Container>
  );
};

export default Home;